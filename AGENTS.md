<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio presentation
- Keep the single-page portfolio's section links and existing content together in the index route; this preserves smooth in-page navigation.
- Define the cinematic monochrome palette and editorial type styles in global CSS tokens; this keeps all sections and controls visually consistent.

## Deployment target
- Keep the index route prerendered to static HTML and the single Pages publish step in `.github/workflows/deploy.yml`; this lets the portfolio be hosted on a static host (GitHub Pages) without a server runtime.

