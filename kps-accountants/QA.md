# Design and QA — 12 October 2026

Applied Project Blueprint `taste-principles.md` v1.1.0 and `copy-style.md`. Buildless HTML is intentional for a portable, low-maintenance brochure handover; a React component library would add unnecessary dependencies here.

Visual direction: navy and mint with strong sans-serif typography and an original abstract accounting illustration (no financial data implied).

Checked desktop composition at 1440×900, and homepage layout widths 320, 360, 390, 430, 768 and 1440. All pages passed internal file/asset link checks, single-h1 structure and image alt checks. Main homepage contact action remained visible in each first useful viewport; no horizontal overflow or missing images observed. Contact page checked at390: local draft opens, appropriate email recipient/subject/body generated, nothing sent. Dominic mobile menu opened/closed, with state reflected through aria-expanded; all sites use the same behaviour. Reduced-motion, visible focus, minimum control sizes, native validation and FAQ disclosure are implemented.

Taste rubric (self-review, not independent audit): Context3, Clarity3, Hierarchy3, Restraint3, Character2, Typography3, Interaction2, Safety3, States2, Responsive3, Accessibility2, Polish2 =31/36. Evidence: visitor/home state/contact task at six widths; desktop compositions reviewed; mobile contact draft state checked for each business. Accessibility is a focused implementation/render check, not an exhaustive assistive-technology audit. States cover menu, FAQ closed/open, required form fields, reviewed draft and clipboard fallback; no invented server loading/success states.

Limits: no real emails sent, no form backend configured, external calculator/news systems remain original-site links, no client approval or official-domain replacement. Public access will be confirmed separately after deployment. No native hosting analytics claim is made.
