# Stoepsit Fees Scavenger Hunt — Rhodes

A plain static site: no server, no database, no sign-up. Works on any free static host
(GitHub Pages, Netlify Drop, Cloudflare Pages).

## How it works
- Every QR code links to `stop.html?c=CODE`. The page looks up CODE in `data.js` and shows
  either a **landmark story** or a **prize** with a "show this screen to claim" ticket.
- Each player's finds are saved on their own phone (browser storage). `index.html` shows
  their progress and the list of what they've found.
- Each phone gets a 4-letter player ID shown on prize tickets, so prize-givers can jot down
  who has claimed.
- Codes are random, so players can't guess the next stop by changing the link.
- Each landmark page shows a **clue** to the next landmark the player hasn't found yet.
- A prize whose text still says TODO is **hidden**: not counted, and its poster says "not unlocked yet".
- `sw.js` saves the site on the phone, so after the first visit it works **without signal**.
- **English/Afrikaans** switch at the top of every page. Each stop has an `af` block in `data.js`.
- Prize pages have a **"Prize-giver: mark as handed over"** button (tap twice). It stamps the ticket CLAIMED on that phone.
  Use it together with the printed tick sheets, since a determined player could still clear their browser.
- Prizes marked `placeholder: true` show an "example prize" banner. Remove the flag when the prize is real.
- Players who can't scan can type the poster's 6-character code on the home page.
- Optional visitor counter: sign up free at goatcounter.com and put your code in `goatcounter` in `data.js`.
- Poster locations are kept out of this public repo (see `spots.json` in the QR output folder).

## Files
| File | What it is |
| --- | --- |
| `data.js` | **All content.** Landmark stories, prizes, intro text, dates. Edit only this. |
| `index.html` | Home page: intro, how to play, progress, your finds |
| `stop.html` | The page each QR code opens |
| `style.css`, `app.js` | Look and shared logic |
| `tools/make_qr.py` | Makes QR images, a printable poster sheet and a placement checklist |

## Adding content
Open `data.js` and replace the TODO fields. To add a stop, copy an entry and give it a new
6-character code (letters/numbers). Landmark photos can go in an `img/` folder.

## Making the QR posters (after the site address is known)
```
pip install qrcode pillow
python3 tools/make_qr.py https://YOUR-SITE-ADDRESS/
```
This writes `../qr-codes/` with one PNG per stop, `posters.html` (print, one poster per A4
page) and `placement.csv` (tick off where each poster went).

Only re-print a poster if its **code** changes; editing a story or prize text doesn't need new QR codes.
