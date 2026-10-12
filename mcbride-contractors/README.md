# McBride — complete website demo

Independent replacement website demo prepared by Niall O’Rourke. Not commissioned or endorsed by the featured business.

## Run

The deployable website is this folder. No install, build, database or API key is required.

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. All pages are static HTML with shared CSS and JavaScript.

## Scope

13 pages: home, services, individual service pages, about, contact, demo privacy and approach / project imagery. Desktop and mobile navigation, FAQ disclosure, service selection, enquiry draft preparation and copy feedback work locally.

The form prepares a message and opens the visitor’s email app only when they choose Open email draft. It does not send, submit, store, book or quote anything. No backend or login is needed. KPS resources intentionally link to existing/current sources rather than copying financial calculators or time-sensitive tax guidance.

## Edit and hand over

- Text, contact routes and navigation: each HTML file in this folder.
- Colours, type and responsive composition: `style.css`.
- Mobile menu and enquiry drafting: `script.js`.
- Replace photos in `assets/` and update the relevant HTML/alt text.
- Deploy this folder to any static host or port these pages into the business’s preferred CMS.

Before using on the official domain, the business/provider should approve factual copy, imagery, legal/privacy wording and any backend delivery, then remove demo notices/noindex where appropriate. The preview and public GitHub source are separate deployments; pushing GitHub alone does not update the preview.

## Facts and assets

Original website: https://www.mcbridecontractors.co.uk/. Details checked 12 October 2026. No testimonials, prices, live availability or performance figures were invented. Original business-owned photos/portraits remain copyrighted by their respective rights holders and are not given a code licence by this repository. See `assets/sources.json` for original asset URLs and credits. Some records describe unused original assets; only files present in this demo are deployed.

Google Fonts serves the selected typefaces; local fonts are fallbacks. No advertising trackers or custom analytics scripts are added. OpenAI Sites does not expose a native cookieless analytics configuration through the available publishing tools; analytics activation remains a provider handover item, not claimed enabled.

## Design and validation

See `QA.md` for the Blueprint style direction and dated checks. Demo privacy and robots metadata are intentionally appropriate to a public preview, not copied from the business.

## Share

- Public demo: https://mcbride-contractors-demo.niall783.chatgpt.site/
- Source: https://github.com/niall783/concept-sites/tree/main/mcbride-contractors
