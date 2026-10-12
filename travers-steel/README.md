# Travers Steel

[Public website demo](https://travers-steel-demo.niall783.chatgpt.site) · [Original website](https://traverssteel.com/)

Independent, uncommissioned modern replacement demonstration by Niall O’Rourke. The original business website is unchanged. 28 complete static pages, with service/product detail, galleries, about/contact and privacy. Presentation follows Project Blueprint taste-principles 1.1.0 and plain-language copy guidance.

## Run locally

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. No package installation, database, API key or build step. Edit HTML for content, style.css for design, script.js for navigation, filters and enquiry draft behaviour. site-content.json retains the structured content used during authoring; editing it alone does not regenerate the HTML.

## Enquiries

The form prepares a message locally, for copying or opening in the visitor’s email application. It does not submit, store, price, book or process payment. Telephone/email links use published business details. Advantage has no verified public email, so its form offers copying and the existing official contact route. A live form delivery service would require separately approved setup.

## Implementation handover

Any static host can serve this folder. This public Git repository does not automatically deploy to OpenAI Sites. Before official implementation, the business/provider should approve current service and contact information, image rights, privacy wording and enquiry delivery. Review noindex/robots restrictions only when approved as an official site. Original domains and hosting are unaffected.

## Images and source provenance

Photographs come from the existing business website. See assets/sources.json for source URLs and selected files. Copyright stays with the original rights holders; no open image licence or business endorsement is implied. Some images resized for performance. Project archive content remains historical; catalogue examples do not establish current stock or specifications.

## Verification

Internal links/assets, headings and image alt text checked across all pages. Rendered desktop and phone layouts reviewed; homepages checked at 320/360/390/430/768/1440px. Mobile menus, gallery filters and enquiry drafts checked for each site. See QA.md for the scoped Blueprint review.
