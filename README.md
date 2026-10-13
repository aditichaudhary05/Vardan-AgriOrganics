# Vardan AgriOrganics

A responsive, frontend-only e-commerce demonstration for an Indian organic farming brand. The experience includes a product catalogue, simulated shopping flows, community and learning pages, and a browser-local admin demo.

## Stack

- React 18 and JavaScript
- Vite
- React Router DOM
- Plain CSS, browser forms, and localStorage

No backend, database, payment processor, form library, animation library, or icon library is included. Product images are illustrative remote Unsplash images and need internet access to load.

## Run locally

1. Install Node.js (18 or newer).
2. Run `npm install`.
3. Run `npm run dev` and open the local URL printed by Vite.
4. Run `npm run build` to create the production frontend bundle in `dist/`.

## GitHub Pages deployment

The Vite base path is configured for `https://aditichaudhary05.github.io/Vardan-AgriOrganics/`. The workflow in `.github/workflows/deploy.yml` builds and deploys `dist/` whenever a commit reaches `main`. In the repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. Check the Actions tab for the first deployment run; the live URL updates after the workflow succeeds.

## Routes

- `/` home
- `/shop`, `/categories`, `/product/:id`
- `/wishlist`, `/cart`, `/checkout`, `/order-confirmation/:id`
- `/account`, `/login`, `/register`
- `/our-story`, `/farmer-community`
- `/learning-centre`, `/articles/:slug`
- `/local-stores`, `/delivery-network`, `/contact`, `/faq`
- `/privacy`, `/terms`
- `/admin` frontend demo administration

## Demo functionality

Search, category filtering, sorting, product details, cart, wishlist, checkout, sample orders, account form, community and guidance requests, newsletter, contact enquiries, FAQ accordions, postal-code sample checker, sample store search, and admin catalogue and record status controls work in the browser. Demo content persists in localStorage. The admin page is intentionally open and is not authentication or a secure administrative system.

The catalogue, prices, stores, serviceable postal codes, and contact information are sample content. No order, delivery, payment, account, expert service, or business enquiry is sent to Vardan. Local browser data is not shared with a server and can be removed by clearing site data.

## Future Express and PostgreSQL integration

The UI uses a central product catalogue and small storage helpers in `src/App.jsx`; mock records have clear localStorage keys (`v_products`, `v_cart`, `v_wish`, `v_orders`, `v_session`, `v_community`, `v_guidance`, `v_contacts`, and `v_newsletter`). To connect a future backend, move those reads and writes behind service modules that call versioned API endpoints, preserve these UI shapes as API response contracts, add server-side validation and authentication, and replace local demo order placement with a server-created order and approved payment flow. Keep credentials and authoritative prices on the server. No backend API is implemented here.
