# Annita Landing Page

A static web experience for the Annita LLC Hub and Custom Solutions pages.

## Project structure

- `index.html` — Annita LLC Hub landing page
- `404.html` — static fallback page for missing routes
- `robots.txt` — crawler directives for the static site
- `solutions/index.html` — Custom Solutions overview
- `solutions/request.html` — multi-step custom solutions request form
- `solutions/request/submitted.html` — submission confirmation page
- `styles.css` — global design tokens and shared component styles
- `scripts/app.js` — shared page interactions and routing helpers
- `scripts/form.js` — request form state, validation, and submission logic

## Running locally

From the project root (`Annita-Landing Page`):

```powershell
npm install
npm start
```

Then open `http://127.0.0.1:8080`.

## Routing architecture

- `/` → Hub landing page
- `/solutions/` → Custom Solutions overview
- `/solutions/request.html` → Custom Solutions request form
- `/solutions/request/submitted.html` → Confirmation page

The project is designed as a static site. The form saves state in `localStorage` and redirects to the confirmation page after submission.

## Backend integration

The submission logic includes a placeholder fetch to `/api/solutions/request`.
To enable email confirmation receipts, wire that endpoint to a backend service or serverless function that:

1. receives the JSON request payload
2. persists the brief
3. sends an email receipt to the provided address

## Deployment

This is a static site and can be deployed to any static hosting provider.
For DigitalOcean App Platform, use a static site deployment with the project root as the build context and serve `index.html`.
For any static host, configure fallback routing to `404.html` if the host does not support directory-based rewrites.

## Notes

- Uses CSS variables for global design tokens.
- Uses accessible, responsive layouts.
- The request form validates on blur and saves progress automatically.
- The landing page and solutions pages share the same visual system.
