# Nanu Cart — PWA E-commerce Starter

A mobile-first, installable Progressive Web App starter using your supplied Nanu Cart logo. It is designed to be uploaded to GitHub and deployed with GitHub Pages.

## Included
- Home page with hero, categories, spotlight, top deals, products for you and more products
- Category browsing, search, sorting and product cards
- Single product detail pages with similar products
- Cart with quantity controls and price summary
- Checkout form and local demo order confirmation
- Demo login/signup, account, profile, wishlist, order history and help pages
- PWA manifest and service worker for installability/offline shell
- Local browser storage for cart, wishlist, profile and demo orders

## Important before going live
This is a front-end prototype. It does **not** include:
- Real customer authentication or OTP verification
- A server/database shared across devices
- Razorpay/payment gateway
- Live inventory, shipping charges, GST calculation or courier tracking
- Real WhatsApp/support integration

Checkout currently creates a **local demo order** in the browser. Do not treat it as a real customer order or collect payment until a backend and payment provider are connected. Prices and product data are sample catalogue content and must be verified/updated.

## Upload to GitHub
1. Extract `nanucart-pwa.zip`.
2. Open GitHub and create a new repository, for example `nanucart-store`.
3. Upload the **contents** of this folder (not the outer ZIP) so `index.html` is at the repository root.
4. In the repository open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then Save.
7. Wait for GitHub Pages to publish. Your site URL will appear in that Pages panel.

## Install as an app
Open the published HTTPS website in Chrome on Android → browser menu → **Install app** or **Add to Home screen**.

## Update products and branding
- Edit product names, prices, descriptions, categories and feature lists in `app.js` inside the `PRODUCTS` array.
- Edit category names/icons in the `CATEGORIES` array.
- Replace `assets/nanucart-logo.png` and `assets/nanucart-app-icon.png` if you update the logo. Keep the app icon square.
- Change colors at the top of `styles.css` under `:root`.

## Suggested production connection
For a real multi-user store, connect a backend such as Supabase/Firebase for authentication, database and order records; connect Razorpay for payments; and connect your chosen courier/WhatsApp workflow. Keep secret API keys on a secure server, never in browser JavaScript.
