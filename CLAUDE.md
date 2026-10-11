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
  - First title: *Agência de Detetives Grandes Galerias Ltda.*, subtitle *Livro 1: Frequência Maldita* (Brazilian Portuguese).
  - English edition: *The Grand Galleria Detective Agency, Ltd.*, subtitle *Book 1: Cursed Frequency*. It belongs to The Underqualified series; on the Porchester site it is listed as "The Underqualified presents" with the subtitle *Cursed Frequency* (no "Book 1").
  - The Underqualified series, in development: *Stevens Creek Investigative Partners LLC*, subtitle *Wrong Future* (Bay Area, 1999), and *Little Venice Investigations & Boat Painting*, subtitle *Private City*, tagline "London, 1997. Raves. Raids. Redevelopment. Rising surveillance. Bodies keep turning up in the canal."
  - Separate project, not part of a series: *Demon’s Country*, Welsh title *Gwlad y Gwyllwr*, tagline "Two hundred miles to run. One old debt to settle."
  - Separate project, in development: *The Last Daughters of Dunbrae*, subtitle *An Unquiet Inheritance*, tagline "A remote Scottish island. Tea by the fire, a crumbling manor to restore. Two estranged sisters. One vanished sibling. A family inheritance to die for."
  - Author site: https://francescodurazzo.com
- All titles are by Francesco Durazzo, but the site must not make that obvious: Bruno wants Porchester to read as a publishing house, not one author self-publishing. Name the author only where needed (the released or forthcoming title), never on in-development titles, and never write anything like "our author" or a list of titles by author.

## Languages

- When the site goes bilingual, it is English and Brazilian Portuguese.
- Default language: Brazilian Portuguese for visitors whose browser prefers Brazilian Portuguese or who are located in Brazil; English for everyone else.
- Implement the default with a small Cloudflare Pages Function at the site root (a `functions/` folder next to `site/`, not inside it), reading the browser's Accept-Language header and Cloudflare's visitor country. Static files alone can't see the visitor's country.
- A visible language switch must always override the automatic choice, and the visitor's choice should be remembered.
- Undecided, ask Bruno before building: what visitors whose browser prefers European Portuguese should see.

## Design

- Look: light heritage, a Caslon title page on cream. Cream ground `#f5f0e4`, green-black text `#1e2619`, the logo's oak green `#46602f` for the logo, the wordmark, rules and small labels; Libre Caslon Display and Libre Caslon Text (Google Fonts); thick-and-thin double rules and a framed page. Avoid Victorian pastiche: no faux-aged paper, flourishes, blackletter, "Est." dates or ornate dingbats. Deliberately different from the Francesco Durazzo author site.
- Logo: an oak tree merged with a capital P, drawn by Bruno. Master files live in `brand/` (outside `site/`): SVG and 2400px PNG in green on cream, cream on black (for book covers and spines), black on brass, and green, cream and black on transparent. The site uses `site/assets/porchester-logo.svg` (green) and `site/favicon.svg`.
- Plain, matter-of-fact tone, like the name: a place and a press. No marketing superlatives.
- Pages must work on a phone first (16px side margins, no horizontal scrolling).

## Tech and deploys

- Plain static HTML and CSS, no build step. Everything public lives in `site/`; Cloudflare publishes only that folder. Keep notes and instructions (like this file) outside `site/`, because anything inside it is public. Move to Astro only when the site outgrows a few pages, and ask first.
- Hosted on Cloudflare Pages, project `porchester-publishing`, connected to this GitHub repo (`hey-bruno/porchester-publishing`).
- Pushing to `main` deploys to production. Make changes on a branch: Cloudflare publishes each branch to a preview address for review before merging.
- Pushes go out as the GitHub account `hey-bruno`, not Bruno's work account.
