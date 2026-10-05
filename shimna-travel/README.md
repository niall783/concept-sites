# Shimna Travel concept

An independent website redesign concept for Shimna Taxis & Travel in Newcastle, County Down. This is a presentation concept, not the business's official website.

- [Public preview](https://shimna-travel-concept.niall783.chatgpt.site/)
- [Original business website](https://shimnatravel.co.uk/)

## Files

- `index.html`: content, navigation, service sections and enquiry form.
- `style.css`: layout, navy/yellow theme and responsive styling.
- `script.js`: mobile menu, journey selection and email-draft preparation.
- `assets/`: locally served photographs.

## Run

From this folder, run `python3 -m http.server 8000` and open http://localhost:8000.

## Edit

Change pictures by replacing the corresponding files under `assets/` or changing the image paths in `index.html`. Contact details and social links are ordinary links in `index.html`. Colours and typography are in `style.css`.

The form prepares a draft addressed to `info@shimnatravel.co.uk`; it does not send an email, query live availability or confirm a booking. Changes must be deployed separately to update the live preview.

Google Fonts loads DM Sans and Manrope over the internet; local system fonts are the fallback. The site has responsive layouts, visible keyboard focus, native form validation and reduced-motion support. The concept includes `noindex,nofollow` metadata.

## Photo credits

- `assets/newcastle.jpg`: Newcastle Beach, County Down, June 2010 (01), by Ardfern. [Original and attribution](https://commons.wikimedia.org/wiki/File:Newcastle_Beach,_County_Down,_June_2010_(01).JPG). [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). The original file is retained; CSS crops its display. The photograph retains its CC BY-SA licence.
- `assets/vehicles.jpg`: photograph retrieved from the [original Shimna Travel gallery](https://shimnatravel.co.uk/gallery-2/) on 5 October 2026. [Original image](https://shimnatravel.co.uk/wp-content/uploads/2022/05/247820_219868201375013_2712006_n.jpg). No open reuse licence was identified; rights remain with the original holder. Obtain permission or replace it for another use. This historic image is not a guarantee of the current fleet.

The business name and contact information come from the original website, checked on 5 October 2026. No endorsement by the business is implied.
