# Porchester Publishing — website

Source for porchesterpublishing.com, the site of Porchester Publishing, the London imprint that publishes Francesco Durazzo's books.

## What this site is for

- The imprint's public face: who publishes the books, and a page for each book.
- English-first. The imprint is a global, English-centric operation; the first title happens to be in Brazilian Portuguese, and later titles and translations will be in English.
- Audience: readers, booksellers, publishers and press.

## Facts and content

- Never invent facts. No dates, prices, availability, quotes, reviews, award claims or descriptions that Bruno hasn't written or approved.
- No placeholders, "coming soon" filler, lorem ipsum or bracketed notes on a page that goes live. If content is missing, ask Bruno in the chat instead.
- Copy comes from the approved files in `~/grandes-galerias/publicacao/` (decisions, bio, sinopse and so on). Treat `decisoes.md` there as the source of truth for names and decisions.
- Settled facts so far:
  - Imprint: Porchester Publishing, London.
  - Author: Francesco Durazzo (pen name).
  - First title: *Agência de Detetives Grandes Galerias Ltda.* (Brazilian Portuguese).
  - Author site: https://francescodurazzo.com

## Design

- Current look: a single centred page, serif type (Georgia stack), warm paper background with near-black ink, and a dark-mode version of both. Keep any new page consistent with it until Bruno decides otherwise.
- Plain, matter-of-fact tone, like the name: a place and a press. No marketing superlatives.
- Pages must work on a phone first (16px side margins, no horizontal scrolling).

## Tech and deploys

- Plain static HTML and CSS, no build step. Everything public lives in `site/`; Cloudflare publishes only that folder. Keep notes and instructions (like this file) outside `site/`, because anything inside it is public. Move to Astro only when the site outgrows a few pages, and ask first.
- Hosted on Cloudflare Pages, project `porchester-publishing`, connected to this GitHub repo (`hey-bruno/porchester-publishing`).
- Pushing to `main` deploys to production. Make changes on a branch: Cloudflare publishes each branch to a preview address for review before merging.
- Pushes go out as the GitHub account `hey-bruno`, not Bruno's work account.
