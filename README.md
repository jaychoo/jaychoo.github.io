# jaychoo.github.io

Personal portfolio site — plain HTML/CSS/JS styled with [Tailwind CSS](https://tailwindcss.com/),
hosted on GitHub Pages.

## Structure

- `index.html`, `about/index.html`, `projects/index.html` — pages (plain
  HTML, no templating; nav/footer are duplicated across each file)
- `assets/css/style.css` — **generated** by the Tailwind CLI, committed so
  GitHub Pages can serve it with no build step. Don't hand-edit it.
- `src/input.css` — Tailwind entry point (source of truth for styling)
- `assets/js/theme.js` — wires up the light/dark toggle button

## Working locally

Install once:

```sh
npm install
```

Rebuild CSS after changing Tailwind classes in the HTML or `src/input.css`:

```sh
npm run build:css       # one-off build
npm run watch:css       # rebuild on every change
```

Preview with any static file server, e.g.:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000. (Use `127.0.0.1` instead of `localhost`
if your browser resolves `localhost` to `::1` and the connection resets.)

## Deploying

Commit the generated `assets/css/style.css` along with your changes, then
push to `main` — GitHub Pages serves the static files directly, no CI
build required. Live at https://jaychoo.github.io.
