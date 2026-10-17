// Negotiate only the unprefixed homepage. Explicit locale URLs never redirect
// because of browser settings. A selector choice works even without JavaScript.
const SUPPORTED = ['en', 'pt-br', 'it'];
export function chooseLanguage(request) {
  const cookie = /(?:^|;\s*)porchester_lang=([^;]+)/.exec(request.headers.get('Cookie') || '');
  if (cookie && SUPPORTED.includes(cookie[1])) return cookie[1];
  const prefs = (request.headers.get('Accept-Language') || '').split(',').map((part, index) => {
    const [tag, ...params] = part.trim().toLowerCase().split(';');
    const quality = params.map(p => p.trim()).find(p => p.startsWith('q='));
    return { tag, q: quality ? Number(quality.slice(2)) : 1, index };
  }).filter(p => p.tag && Number.isFinite(p.q) && p.q > 0 && p.q <= 1)
    .sort((a,b) => b.q - a.q || a.index - b.index);
  for (const {tag} of prefs) {
    const primary = tag.split('-')[0];
    if (primary === 'pt') return 'pt-br';
    if (primary === 'en' || primary === 'it') return primary;
  }
  return 'en';
}
export async function onRequest({request, next}) {
  const url = new URL(request.url);
  const choice = url.searchParams.get('lang');
  const explicit = SUPPORTED.includes(choice);
  if (url.pathname !== '/' && !explicit) return next();
  const lang = explicit ? choice : chooseLanguage(request);
  const headers = new Headers({Vary: 'Accept-Language, Cookie', 'Cache-Control': 'private, no-store'});
  if (explicit) headers.set('Set-Cookie', `porchester_lang=${lang}; Path=/; Max-Age=31536000; SameSite=Lax; Secure; HttpOnly`);
  url.searchParams.delete('lang');
  if (url.pathname === '/' && lang !== 'en') {
    url.pathname = `/${lang}/`;
    headers.set('Location', url.href);
    return new Response(null, {status:302, headers});
  }
  if (explicit && url.pathname !== '/') {
    headers.set('Location', url.href);
    return new Response(null, {status:302, headers});
  }
  const original = await next();
  const response = new Response(original.body, original);
  for (const [key,value] of headers) response.headers.set(key,value);
  return response;
}
