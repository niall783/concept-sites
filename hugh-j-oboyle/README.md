# Hugh J O’Boyle — full replacement demo

Independent redesign prepared by Niall O’Rourke, not commissioned or endorsed by the business. Original: https://www.hj-oboyle.co.uk/

## Run

Serve this folder with any static web server. No installation, build step, database or API key is required.

```sh
python3 -m http.server 8000
```

## Included

20 complete pages: home, about, service/product/capability detail, contact, demo privacy, and project portfolio and project detail pages. Mobile navigation and FAQ disclosure work. Enquiry forms validate inputs and prepare an email draft for review; they do not submit, send, store, quote or book anything. The portfolio has category filters and an All projects reset.

## Edit or hand over

Text, contact routes and navigation are in the HTML files. `style.css` contains typography, colours and layouts; `script.js` contains menu, filtering and draft behaviour. Pictures and source credits are in `assets/`. Replace pictures and alt text together. Deploy the contents of this folder to another static host, or transfer layouts/content into the business’s preferred CMS.

The business/provider should approve factual copy, imagery rights, privacy and current pricing/specifications before replacing the official domain. Funeral pricing, any regulated prepaid plan and live transactions are deliberately unclaimed; current written information belongs to the business. Demo noindex and identity notices should be reviewed for any approved official version.

## Images and content

Public official sources checked 12 October 2026. See `assets/sources.json` for original images and used files. Business-owned images retain their original rights; this repository grants no licence to those photos or branding. Some images were resized for delivery, with no semantic alteration. No client quotes, prices, dates of projects, current stock, verified certifications or appointments were invented. Font files are served by Google Fonts with local fallbacks.

## Hosting and validation

OpenAI Sites preview and public GitHub source are separate deployments. A GitHub push alone does not update the live demo. The demo adds no marketing cookies or custom trackers. Available Sites controls exposed no native cookieless analytics setup; analytics activation is a documented provider handover item, not claimed enabled.

See `QA.md` for dated verification and limits.

## Share

- Public demo: https://hugh-j-oboyle-demo.niall783.chatgpt.site
- Code: https://github.com/niall783/concept-sites/tree/main/hugh-j-oboyle
