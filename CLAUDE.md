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

- Core proposition (latest correction): be honest with readers who may never finish the original. Fat Free delivers the entire story without the fat: “all killer, no filler”. Never frame it as a taste, sample, excerpt or trailer-length selection. Readers encounter the author's actual prose rather than a Wikipedia or AI plot summary. If they like it, move mid-stream to Semi-Skimmed; if they love it, read the original. Do not sell condensation as an improvement or a superior book. The movie-trailer analogy refers only to editing for pace and punch, applied to the whole story from beginning to end.
- Titles must be “Fat Free War and Peace”, “Fat Free Don Quixote”, etc., including the cloth-cover lettering. Every book entry must carry its comparison in this order: original time, Semi-Skimmed time and percentage reduction, Fat Free time and percentage reduction. Percentages measure reading time. Source counts and calculations are in `research/classics-reading-times.json`; original-edition links are shown with the comparisons. User approved shorter title-specific Semi-Skimmed estimates where an eight-hour cut would exceed the original.
- Newly created diagrams, graphs and illustrations are central to the offer and must be prominent. Include character/relationship diagrams, timelines, maps, visual explanations of ideas and original illustrations, with accessible text equivalents; visual-guide time is included in reading estimates.
- Use a provocative, teasing voice aimed at readers who recognise themselves: “you know who you are”, “attention span of a fruit fly”, buying classics they never finish, and 47 hours of a Russian novel they vaguely think they should read. Be self-deprecating about the literary sacrilege too. Avoid timid “might”, “maybe”, or worthy educational sales copy. Acknowledge that cuts change the experience and that conventional editors may object. Do not domesticate the pitch into a conventional respectful abridgement or educational product. Use “cuts” or “editions”, never “reading grades” or reading levels.
- State the method plainly: “We try to add nothing”: use the author’s original words or a classic English translation, cut and condensed. Credit the translation; visibly mark any essential linking additions. Keep new diagrams, graphs, illustrations and guide explanations clearly separate from narrative prose. Avoid an absolute claim of zero editorial words. Editorial credit: “Condensed and edited by Porchester Publishing”. Do not attribute this series to Francesco Durazzo.
- Fat Free uses two hours and Semi-Skimmed four hours for Ovid, Milton, Dante and Nietzsche. Other titles use four hours for Fat Free and eight for Semi-Skimmed. These budgets include all reader-facing text and visual-guide interpretation, per the author’s 17 October 2026 decision in the shared Milk Project notes. Public copy uses a single “Estimated reading time” label, without a public calculation-method section, without provisional-target or reader-testing disclaimers. Internally, estimates remain planning figures rather than measured completed-edition timings. Milk names do not describe percentages of retained text.
- Full Fat means the unabridged original. Keep source links, but label them “Original”, without “free” pricing badges or pricing contrasts. Pricing of the condensed editions is undecided and they may also be free. Do not imply that the cuts are paid products. No release date, price, availability or retailer commitments have been announced.
- First title: War and Peace by Leo Tolstoy. Initial production covers a complete Fat Free draft and a matched Semi-Skimmed Austerlitz sample; a full Semi-Skimmed edition is later work. Do not imply that complete editions already exist. Keep internal draft/sample production stages off the public page; lead with the reader proposition.
- Intended formats: standalone Fat Free and Semi-Skimmed ebooks plus an optional combined edition with navigation between corresponding passages. Describe these features in the present tense in marketing copy; the “Coming soon” label communicates availability.
- The dedicated concept page retains the publisher masthead, footer and typography. Original flat SVG bottles in `site/assets/condensed-classics/` use blue and green accents, handle cutouts and off-white bodies. They are decorative; edition names and timing explanations appear in adjacent HTML. Do not publish unfinished cover-study images.
- The source project lives at `~/Documents/ChatGPT/The Milk Project`; its current charter and grade specification supersede the original handoff.

## Languages

- The whole publisher site is available in English, Brazilian Portuguese and Italian. English is the fallback and retains the original unprefixed URLs; translations live under `/pt-br/` and `/it/` with identical slugs.
- The homepage follows the browser's Accept-Language preference (quality weights respected): any Portuguese maps to PT-BR, Italian to IT, English to EN; unsupported preferences fall back to English. Do not use country-based routing.
- The visible 🇬🇧 / 🇧🇷 / 🇮🇹 flag switch (with accessible English / Português brasileiro / Italiano labels) opens the equivalent page and remembers an explicit choice in the `porchester_lang` cookie. This overrides browser preference at the root. Direct links to a locale page always retain their language. English homepage selection uses `/?lang=en` to override negotiation.
- Routing is implemented by `functions/_middleware.js`, outside the public folder. Static local previews show page content but need Cloudflare Pages Functions to exercise routing and preference persistence.
- Grand Galleria's approved PT-BR and IT synopsis and hook come verbatim from https://francescodurazzo.com/pt-br/ and /it/. PT-BR uses its Portuguese title and jacket. Italian uses the existing English title and jacket: an Italian website is not an announcement of an Italian book edition.
- Keep established series/product names and unapproved translated book titles unchanged. Translate surrounding catalogue copy and accessibility labels. Localised classics pages describe the English collection; do not reuse those times as claims for a Portuguese or Italian edition. The separate Portuguese pilot awaits the author's selection in another chat.
- `research/page-locales.json` is the equivalent-page map. `research/localization-copy.json` records the translation pairs used for this release; HTML is served directly, with no build step. When changing copy, update its translations and this editorial record together.
- Every catalogue page has a self canonical, reciprocal en/pt-BR/it/x-default links and localised metadata. Shared 404 offers recovery in all three languages. Extend the locale map and sitemap when adding pages.

## Design

- Look: light heritage, a Caslon title page on cream. Cream ground `#f5f0e4`, green-black text `#1e2619`, the logo's oak green `#46602f` for the logo, the wordmark, rules and small labels; Libre Caslon Display and Libre Caslon Text (Google Fonts); thick-and-thin double rules and a framed page. Avoid Victorian pastiche: no faux-aged paper, flourishes, blackletter, "Est." dates or ornate dingbats. Deliberately different from the Francesco Durazzo author site.
- Logo: an oak tree merged with a capital P, drawn by Bruno. Master files live in `brand/` (outside `site/`): SVG and 2400px PNG in green on cream, cream on black (for book covers and spines), black on brass, and green, cream and black on transparent. The site uses `site/assets/porchester-logo.svg` (green) and `site/favicon.svg`.
- Layout: compact masthead (small logo and wordmark, London); the books carry the page. The forthcoming title is featured with its cover beside the text. Group books by series or standalone status; shelves use one column with thumbnails on phones, two on tablets and four on desktop, with two-book groups centred at the same desktop cover size.
- Covers: 2:3, saved as `site/assets/covers/<name>.jpg` at 720×1080. A title without a jacket gets a cloth plate (its own cloth colour, title lettered in cream, the oak-P mark) in place of the image; swap the plate for an `<img>` when the jacket exists. The Grand Galleria cover is the English jacket from the author site.
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



- Homepage shelf correction: below the featured Grand Galleria, keep Stevens Creek, Little Venice, Demon’s Country and The Last Daughters of Dunbrae together in one original four-column “In development” shelf. Use existing series labels to distinguish The Underqualified titles from standalone novels; do not split them into two half-empty rows. Classics follow this shelf.


## Approved site refinement (17 October 2026)

- Preserve the heritage identity while refining usability: cream, oak green, Caslon, framed page, fine rules, cloth plates. The approved refinement supersedes the earlier requirement to keep CSS byte-for-byte unchanged. Shared CSS lives in `site/assets/site.css`; minimal cover-lightbox JS lives in `site/assets/site.js`. No framework or build step.
- Homepage: concise Grand Galleria feature, original four-book development shelf, secondary Condensed Classics introduction and featured first title, short publisher introduction. The full classics catalogue now lives on `/condensed-classics/`; the full Grand Galleria synopsis lives on `/books/grand-galleria/`.
- Navigation is identical across pages: `/underqualified/`, `/standalone/`, `/condensed-classics/`, `/about/`, `/contact/`. Each fiction book has a permanent `/books/<slug>/` page. Book title links stay within the publisher site; author website links are explicit.
- Nothing is on sale yet. This is normal catalogue status, not a defect. Show confirmed publication facts plainly. No disabled purchase buttons, invented retailer availability, newsletter signup without a service, unapproved samples, awards or endorsements.
- Preserve approved fiction blurbs when moving them. Keep development-title pages concise when there is no additional approved copy. Do not invent plots to fill pages.
- All classics entries retain original / Semi-Skimmed / Fat Free times and reductions. The complete collection consists of the featured War and Peace plus ten other titles. No public reading-time-method disclosure.
- Before deployment, review desktop and phone screenshots and check all pages for overflow, heading hierarchy, links, assets, keyboard access, metadata and correct publication status. Use a preview branch, then merge, deploy and verify production after the review passes.

- Approved Condensed Classics series logo: `site/assets/condensed-classics/logo.png`, copied unchanged from the canonical Milk Project `assets/branding/condensed-classics-logo.png` (final approved generation, 17 October 2026). Use as a small emblem on the homepage series introduction and dedicated series page, separate from the Porchester masthead. The original PNG has a cream background. Use the transparent derivative `site/assets/condensed-classics/logo-transparent.png` for the website, with normal colour rendering and no blend mode. Keep adjacent series headings as accessible text.
- Series branding authority: `~/Documents/ChatGPT/The Milk Project/DESIGN_SYSTEM.md`. Keep the playful series identity separate from the publisher imprint; logo approval does not approve unfinished cover concepts.

## Approved collection philosophy page (17 October 2026)

- The dedicated collection page leads with “a gateway drug to the classics”: curiosity from word of mouth, adaptations or summaries leads to the actual prose in Fat Free or Semi-Skimmed, and optionally the unabridged original. Keep either entry point valid and finishing a cut worthwhile. The reading-as-chore framing describes readers' existing feelings; do not shame them for stopping at a condensed edition.
- An unsigned first-person note recounts the author's school revision cheat sheets using only the supplied facts. This specific personal origin note is approved alongside the otherwise product-first publisher voice. Do not infer a name or add biography.
- Guides are part of condensation: compact information for orientation and recall, including essential context from cut passages. Major dramatic scenes stay in prose. An optional, spoiler-labelled “What this cut leaves out” overview is an extension requiring implementation and is explicitly absent from the current pilot.
- The page now includes approved pilot evidence, superseding the earlier restriction on all mention of internal pilot status for this bounded explanation: 99.85% verbatim narrative wording from the Maude translation, not an accuracy/completeness score; supporting matter is excluded. Show uneven source-retention figures behind an accessible disclosure, with their separate denominator and the unmeasured description-versus-plot distinction. This is not a public reading-time calculation section.
- Preserve the existing catalogue and title-specific timing blocks, translation attribution, coming-soon status, source links and intended formats. The updated collection copy and metadata must stay aligned in EN/PT-BR/IT and research/localization-copy.json. Component CSS: site/assets/condensed-classics/method.css.
- The source copy and recomputable statistics live in the Milk Project's artifacts/website-condensation/. This website change does not modify the manuscript, EPUBs or pilot package. Review this branch preview before any production publication.
