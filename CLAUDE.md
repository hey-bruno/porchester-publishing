# Porchester Publishing — website

Source for porchesterpublishing.com, the site of Porchester Publishing, the London imprint that publishes Francesco Durazzo's books.

## What this site is for

- The imprint's public face: who publishes the books, and a page for each book.
- English-first. The imprint is a global, English-centric operation; the first title happens to be in Brazilian Portuguese, and later titles and translations will be in English.
- Audience: readers, booksellers, publishers and press.

## Facts and content

- Never invent facts. No dates, prices, availability, quotes, reviews, award claims or descriptions that Bruno hasn't written or approved.
- No placeholders, generic "coming soon" filler, lorem ipsum or bracketed notes on a page that goes live. The substantive Condensed Classics coming-soon announcement below is explicitly approved. If content is missing, ask Bruno in the chat instead.
- Copy comes from the approved files in `~/grandes-galerias/publicacao/` (decisions, bio, sinopse and so on). Treat `decisoes.md` there as the source of truth for names and decisions.
- Settled facts so far:
  - Imprint: Porchester Publishing, London.
  - Author: Francesco Durazzo (pen name).
  - First title: *Agência de Detetives Grandes Galerias Ltda.*, subtitle *Livro 1: Frequência Maldita* (Brazilian Portuguese).
  - English edition: *The Grand Galleria Detective Agency, Ltd.*, subtitle *Book 1: Cursed Frequency*. It belongs to The Underqualified series; on the Porchester site it is listed as "The Underqualified presents" with the subtitle *Cursed Frequency* (no "Book 1").
  - The Underqualified series, in development: *Stevens Creek Investigative Partners LLC*, subtitle *Wrong Future* (Bay Area, 1999), and *Little Venice Investigations & Boat Painting*, subtitle *Private City*, tagline "London, 1997. Raves. Raids. Redevelopment. Rising surveillance. Bodies keep turning up in the canal."
  - Separate project, not part of a series: *Demon’s Country*, Welsh title *Gwlad y Gwyllwr*, tagline "Two hundred miles to run. One old debt to settle."
  - Separate project, in development: *The Last Daughters of Dunbrae*, subtitle *An Unquiet Inheritance*, tagline "A remote Scottish island. Tea by the fire, a crumbling manor to restore. Two estranged sisters. One vanished sibling. Some family secrets are worth killing for."
  - Author site: https://francescodurazzo.com
- Genres shown on the list: The Underqualified books "Mystery & thriller"; *Demon’s Country* "Horror"; *The Last Daughters of Dunbrae* "Gothic mystery".
- The fiction titles above are by Francesco Durazzo, but the site must not make that obvious: Bruno wants Porchester to read as a publishing house, not one author self-publishing. Name the author only where needed (the released or forthcoming title), never on in-development titles, and never write anything like "our author" or a list of titles by author.

## The Condensed Classics

- Homepage catalogue order: The Underqualified (Grand Galleria leads, followed by Stevens Creek and Little Venice), Standalone books (Demon’s Country and The Last Daughters of Dunbrae), then The Condensed Classics. All five existing fiction books precede the classics. Grand Galleria remains the main feature.
- Core proposition (latest correction): be honest with readers who may never finish the original. Fat Free delivers the entire story without the fat: “all killer, no filler”. Never frame it as a taste, sample, excerpt or trailer-length selection. Readers encounter the author's actual prose rather than a Wikipedia or AI plot summary. If they like it, move mid-stream to Semi-Skimmed; if they love it, read the original. Do not sell condensation as an improvement or a superior book. The movie-trailer analogy refers only to editing for pace and punch, applied to the whole story from beginning to end.
- Titles must be “Fat Free War and Peace”, “Fat Free Don Quixote”, etc., including the cloth-cover lettering. Every book entry must carry its comparison in this order: original time, Semi-Skimmed time and percentage reduction, Fat Free time and percentage reduction. Percentages measure reading time. Source counts and calculations are in `research/classics-reading-times.json`; original-edition links are shown with the comparisons. User approved shorter title-specific Semi-Skimmed estimates where an eight-hour cut would exceed the original.
- Newly created diagrams, graphs and illustrations are central to the offer and must be prominent. Include character/relationship diagrams, timelines, maps, visual explanations of ideas and original illustrations, with accessible text equivalents; visual-guide time is included in reading estimates.
- Use a provocative, teasing voice aimed at readers who recognise themselves: “you know who you are”, “attention span of a fruit fly”, buying classics they never finish, and 47 hours of a Russian novel they vaguely think they should read. Be self-deprecating about the literary sacrilege too. Avoid timid “might”, “maybe”, or worthy educational sales copy. Acknowledge that cuts change the experience and that conventional editors may object. Do not domesticate the pitch into a conventional respectful abridgement or educational product. Use “cuts” or “editions”, never “reading grades” or reading levels.
- State the method plainly: “We try to add nothing”: use the author’s original words or a classic English translation, cut and condensed. Credit the translation; visibly mark any essential linking additions. Keep new diagrams, graphs, illustrations and guide explanations clearly separate from narrative prose. Avoid an absolute claim of zero editorial words. Editorial credit: “Condensed and edited by Porchester Publishing”. Do not attribute this series to Francesco Durazzo.
- Fat Free uses two hours and Semi-Skimmed four hours for Ovid, Milton, Dante and Nietzsche. Other titles use four hours for Fat Free and eight for Semi-Skimmed. These budgets include all reader-facing text and visual-guide interpretation, per the author’s 17 October 2026 decision in the shared Milk Project notes. Public copy uses a single “Estimated reading time” label, without a public calculation-method section, without provisional-target or reader-testing disclaimers. Internally, estimates remain planning figures rather than measured completed-edition timings. Milk names do not describe percentages of retained text.
- Full Fat means the unabridged original. Keep source links, but label them “Original”, without “free” pricing badges or pricing contrasts. Pricing of the condensed editions is undecided and they may also be free. Do not imply that the cuts are paid products. No release date, price, availability or retailer commitments have been announced.
- First title: War and Peace by Leo Tolstoy. Initial production covers a complete Fat Free draft and a matched Semi-Skimmed Austerlitz sample; a full Semi-Skimmed edition is later work. Do not imply that complete editions already exist. Keep internal draft/sample production stages off the public page; lead with the reader proposition.
- Intended formats: standalone Fat Free and Semi-Skimmed ebooks plus an optional combined edition with navigation between corresponding passages. Describe these features in the present tense in marketing copy; the “Coming soon” label communicates availability.
- The homepage classics section uses the same cover-and-synopsis feature layout as Grand Galleria, led by Fat Free War and Peace, followed by cloth-cover cards for all ten other candidates. Use existing 2:3 cloth plates and oak-P marks for books without finished jackets. The public catalogue heading is “The collection”; do not add “under consideration” or other tentative labels. List The Decameron, Metamorphoses, Paradise Lost, The Divine Comedy, Thus Spoke Zarathustra, Ulysses (James Joyce), In Search of Lost Time, Les Misérables, Don Quixote and The Brothers Karamazov. Anna Karenina remains in reserve and is excluded from the public list.
- The dedicated concept page retains the publisher masthead, footer and typography. Original flat SVG bottles in `site/assets/condensed-classics/` use blue and green accents, handle cutouts and off-white bodies. They are decorative; edition names and timing explanations appear in adjacent HTML. Do not publish unfinished cover-study images.
- The source project lives at `~/Documents/ChatGPT/The Milk Project`; its current charter and grade specification supersede the original handoff.

## Languages

- When the site goes bilingual, it is English and Brazilian Portuguese.
- Default language: Brazilian Portuguese for visitors whose browser prefers Brazilian Portuguese or who are located in Brazil; English for everyone else.
- Implement the default with a small Cloudflare Pages Function at the site root (a `functions/` folder next to `site/`, not inside it), reading the browser's Accept-Language header and Cloudflare's visitor country. Static files alone can't see the visitor's country.
- A visible language switch must always override the automatic choice, and the visitor's choice should be remembered.
- Undecided, ask Bruno before building: what visitors whose browser prefers European Portuguese should see.

## Design

- Look: light heritage, a Caslon title page on cream. Cream ground `#f5f0e4`, green-black text `#1e2619`, the logo's oak green `#46602f` for the logo, the wordmark, rules and small labels; Libre Caslon Display and Libre Caslon Text (Google Fonts); thick-and-thin double rules and a framed page. Avoid Victorian pastiche: no faux-aged paper, flourishes, blackletter, "Est." dates or ornate dingbats. Deliberately different from the Francesco Durazzo author site.
- Logo: an oak tree merged with a capital P, drawn by Bruno. Master files live in `brand/` (outside `site/`): SVG and 2400px PNG in green on cream, cream on black (for book covers and spines), black on brass, and green, cream and black on transparent. The site uses `site/assets/porchester-logo.svg` (green) and `site/favicon.svg`.
- Layout: compact masthead (small logo and wordmark, London); the books carry the page. The forthcoming title is featured with its cover beside the text. Group books by series or standalone status; shelves use one column with thumbnails on phones, two on tablets and four on desktop, with two-book groups centred at the same desktop cover size.
- Covers: 2:3, saved as `site/assets/covers/<name>.jpg` at 720×1080. A title without a jacket gets a cloth plate (its own cloth colour, title lettered in cream, the oak-P mark) in place of the image; swap the plate for an `<img>` when the jacket exists. The Grand Galleria cover is the English jacket from the author site.
- Store buttons: under "Where to buy" each store is an outlined small-caps button (store name only, no logos, because of the stores' brand rules). Before launch they are faded, non-clickable `<span class="store">`; at launch turn each into `<a class="store" href="…">`.
- Plain, matter-of-fact tone, like the name: a place and a press. No marketing superlatives.
- Pages must work on a phone first (16px side margins, no horizontal scrolling).

## Tech and deploys

- Plain static HTML and CSS, no build step. Everything public lives in `site/`; Cloudflare publishes only that folder. Keep notes and instructions (like this file) outside `site/`, because anything inside it is public. Move to Astro only when the site outgrows a few pages, and ask first.
- Hosted on Cloudflare Pages, project `porchester-publishing`, connected to this GitHub repo (`hey-bruno/porchester-publishing`).
- Pushing to `main` deploys to production. Make changes on a branch: Cloudflare publishes each branch to a preview address for review before merging.
- Pushes go out as the GitHub account `hey-bruno`, not Bruno's work account.

- Series copy should follow the author’s personal writing guide: connected prose, varied sentence lengths, precise explanations and dry, occasional humour. Avoid strings of fragments, repeated punchlines, theatrical contrasts, em dashes and redundant concluding slogans. Retain the explicitly requested “attention span of a fruit fly” and “all killer, no filler”; keep the provocative premise without performing a joke in every sentence. Apply this to series copy, not to approved novel synopses.

- Marketing tense (author correction): describe the editions and their features in the present tense, even before release. Use “includes”, “links”, “comes with” and “we mark”, not “will include”, “will link”, “we’re creating” or “planned as”. Keep the coming-soon label and avoid invented release dates or purchase availability. Cut repeated explanations and forced punchlines rather than merely joining short sentences.

- Product-first marketing (author correction): describe what the editions are and what readers get, not the publisher’s challenge, ambition, effort or production journey. No “our first challenge”, “our aim”, “we’re comfortable with that” or diary-like accounts of making the books. Keep the requested original-words promise concise; lead title blurbs with the story, reading experience and new visual guides.
