"""Validate static pages, local links and shared structure. Run: python3 scripts/check_site.py."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import re
ROOT=Path(__file__).resolve().parents[1]/'site'
VOID=set('area base br col embed hr img input link meta param source track wbr'.split())
class Page(HTMLParser):
 def __init__(self,path):
  super().__init__(convert_charrefs=True);self.path=path;self.stack=[];self.ids=set();self.links=[];self.h1=0;self.canonical=None;self.description=False;self.title=False;self.nav=False
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag not in VOID:self.stack.append(tag)
  if 'id' in a:
   assert a['id'] not in self.ids,(self.path,'duplicate id',a['id'])
   self.ids.add(a['id'])
  if tag=='h1':self.h1+=1
  if tag=='title':self.title=True
  if tag=='nav' and a.get('aria-label')=='Main navigation':self.nav=True
  if tag=='meta' and a.get('name')=='description':self.description=bool(a.get('content'))
  if tag=='link' and a.get('rel')=='canonical':self.canonical=a.get('href')
  if tag=='img':assert 'alt' in a,(self.path,'missing alt')
  for name in ['href','src']:
   if name in a:self.links.append(a[name])
 def handle_endtag(self,tag):
  if tag in VOID:return
  assert self.stack and self.stack[-1]==tag,(self.path,tag,self.stack[-4:])
  self.stack.pop()
pages={}
for path in ROOT.rglob('*.html'):
 p=Page(path);p.feed(path.read_text());assert not p.stack,(path,p.stack)
 assert p.h1==1 and p.title and p.description and p.canonical and p.nav,(path,'page metadata/headings/nav')
 assert 'How the reading times are calculated' not in path.read_text()
 assert '<style>' not in path.read_text(),(path,'inline stylesheet')
 pages[path]=p
for path,p in pages.items():
 for ref in p.links:
  u=urlsplit(ref)
  if u.scheme or u.netloc:continue
  target=ROOT/unquote(u.path).lstrip('/') if u.path.startswith('/') else path.parent/unquote(u.path) if u.path else path
  if target.is_dir():target=target/'index.html'
  assert target.exists(),(path,'broken local link',ref)
  if u.fragment:assert target in pages and unquote(u.fragment) in pages[target].ids,(path,'broken anchor',ref)
canon=[p.canonical for p in pages.values()]
assert len(canon)==len(set(canon)),'duplicate canonical'
print(f'PASS: {len(pages)} pages; balanced HTML, one H1, metadata, unique IDs, image alternatives, shared navigation and all local links/assets/anchors.')
