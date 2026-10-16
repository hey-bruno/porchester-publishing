# Publisher site refinement review — 17 October 2026

Implemented the author-approved refinement plan, retaining the cream/oak-green/Caslon identity and treating forthcoming status as normal catalogue information.

## Scope

- Shared responsive navigation, stylesheet and small cover-lightbox script.
- Shorter homepage with Grand Galleria leading, four-book development shelf and secondary classics introduction.
- Dedicated pages for all five fiction titles, series and standalone browsing, About and Contact.
- Full Grand Galleria synopsis preserved verbatim on its book page.
- Eleven classics retained on the series page: War and Peace feature and ten catalogue entries, preserving original/Semi-Skimmed/Fat Free times and reductions.
- Disabled retailer controls removed; confirmed publication information retained.
- Per-page metadata and canonicals, sitemap, robots file, custom 404, skip link and keyboard focus.

## Validation

- `python3 scripts/check_site.py`: all 12 HTML pages pass balanced-tag, one-H1, metadata, unique-ID, image-alt and local-link/asset/fragment checks.
- Browser layout checks for all 12 pages at 320, 375, 768 and 1440 pixels: no horizontal overflow. All content images loaded; the closed lightbox intentionally has no image URL until opened.
- Visual review: complete desktop homepage and classics page, tablet Underqualified page, mobile homepage and development-title page, desktop Grand Galleria and Contact.
- Corrected spacing above publisher section, cover-link text decoration and duplicate collection ID during review.
- Keyboard: visible skip link and focus outline, skip target, modal focus, Escape to close cover and focus return.
- Contrast against cream: body 13.71:1, muted copy 4.81:1, oak-green copy 6.21:1.
- Grand Galleria synopsis compared paragraph-for-paragraph with the pre-refinement source; unchanged.
- Original homepage fragment destinations retained for existing links.

## Editorial boundary

No invented reviews, publication dates, prices, retailers, availability, sample extracts, artwork or signup service. Development pages use only their approved titles, subtitles, genres and blurbs. No public reading-time methodology disclosure.

Deployment is checked separately against production after merging.
