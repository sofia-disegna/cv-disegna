# Dark navy pixel-art CV starter

## Files
- `index.html` — sidebar and CV content
- `style.css` — dark navy / IBM Plex Mono styling and responsive layout
- `script.js` — cursor-tracking pupils and click-to-blink
- `assets/avatar-base.png` — the supplied avatar artwork

## Customize
1. Replace the placeholder name, role, intro, location, email and social links in `index.html`.
2. Replace the sample experience, education, skills and projects with your CV.
3. Put your PDF at `assets/cv.pdf` for the download button to work.
4. The eye overlays are positioned for the supplied 256 × 256 avatar. If you replace the artwork, adjust `.eye`, `.eye-left` and `.eye-right` in `style.css`.
5. Open `index.html` in a browser, or use VS Code with Live Server.

The eye lenses are white overlays placed inside the dark glasses in the original artwork. Pupils track the pointer. Clicking the avatar briefly switches to `> <` closed-eye marks while keeping the lenses white.

## Publish with GitHub Pages
1. Create a public repository named `YOUR-USERNAME.github.io`.
2. Upload the contents of this folder to the repository root.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Once deployed, visit `https://YOUR-USERNAME.github.io`.

The font loads from Google Fonts; a system monospace fallback is used if it is unavailable.
