import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const source = await readFile(new URL('../functions/_middleware.js',import.meta.url),'utf8');
const {chooseLanguage,onRequest} = await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));
const req = (path='/',language='',cookie='') => new Request('https://porchesterpublishing.com'+path,{headers:{'Accept-Language':language,Cookie:cookie}});
for (const [header,expected] of [['','en'],['pt-BR, en;q=0.8','pt-br'],['pt-PT','pt-br'],['it-CH','it'],['fr, it;q=0.8, en;q=0.5','it'],['it;q=0.3,en;q=0.9','en'],['it;q=0,en','en'],['it;q=invalid,pt;q=0.5','pt-br'],['*','en']]) assert.equal(chooseLanguage(req('/',header)),expected);
assert.equal(chooseLanguage(req('/','it','porchester_lang=en')),'en');
assert.equal(chooseLanguage(req('/','it','porchester_lang=invalid')),'it');
const next=async()=>new Response('static',{status:200,headers:{'Content-Type':'text/html','X-Test':'preserved'}});
let response=await onRequest({request:req('/?utm_source=press','it'),next});
assert.equal(response.status,302);assert.equal(response.headers.get('location'),'https://porchesterpublishing.com/it/?utm_source=press');
assert.equal(response.headers.get('cache-control'),'private, no-store');
for (const path of ['/it/books/grand-galleria/','/pt-br/','/books/grand-galleria/','/assets/site.css']) {
 response=await onRequest({request:req(path,'pt-BR'),next});assert.equal(await response.text(),'static');assert.equal(response.headers.get('location'),null);
}
response=await onRequest({request:req('/?lang=en','pt-BR'),next});assert.equal(response.status,200);assert.match(response.headers.get('set-cookie'),/porchester_lang=en/);assert.equal(response.headers.get('X-Test'),'preserved');
response=await onRequest({request:req('/pt-br/books/grand-galleria/?lang=pt-br','en'),next});assert.equal(response.status,302);assert.equal(response.headers.get('location'),'https://porchesterpublishing.com/pt-br/books/grand-galleria/');assert.match(response.headers.get('set-cookie'),/porchester_lang=pt-br/);
console.log('PASS: browser weighting, Portuguese variants, fallback, cookie precedence, direct routes, explicit EN, query preservation, cache isolation and static headers.');
