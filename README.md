# jaychoo.github.io

Personal portfolio site, built with [Jekyll](https://jekyllrb.com/) using the
[minima](https://github.com/jekyll/minima) theme, hosted on GitHub Pages.

## Structure

- `index.md` — home page
- `about.md` — about / resume page
- `projects.md` — projects list
- `_config.yml` — site configuration
- `assets/` — static files (images, resume PDF, etc.)

## Local preview

Requires Ruby + Bundler.

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

## Deploying

Push to the `main` branch of a repo named `jaychoo.github.io` on GitHub —
Pages builds and publishes it automatically at https://jaychoo.github.io.
