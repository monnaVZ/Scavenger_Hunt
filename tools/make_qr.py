#!/usr/bin/env python3
"""
Generate QR codes + a printable poster sheet for every stop in data.js.

Usage:
    pip install qrcode pillow
    python3 tools/make_qr.py https://YOUR-SITE-ADDRESS/  [output_dir]

Needs Node.js (to read data.js). Output (default ../qr-codes next to the site):
    <CODE>.png        one QR image per stop
    posters.html      print it (one poster per page) and stick them up around town
    prize-tick-sheets.html  one page per prize, for whoever hands that prize out
    placement.csv     organiser checklist: which poster goes where

Poster locations are kept out of the public site. If the output folder contains a
spots.json ({"CODE": "where to put it"}), those go into placement.csv.
"""
import csv, html, json, os, subprocess, sys
import qrcode

here = os.path.dirname(os.path.abspath(__file__))
site = os.path.dirname(here)

if len(sys.argv) < 2:
    sys.exit(__doc__)
base = sys.argv[1].rstrip("/") + "/"
out = sys.argv[2] if len(sys.argv) > 2 else os.path.join(os.path.dirname(site), "qr-codes")
os.makedirs(out, exist_ok=True)

js = "global.window={};require(%r);process.stdout.write(JSON.stringify(window.HUNT))" % os.path.join(site, "data.js")
hunt = json.loads(subprocess.check_output(["node", "-e", js]))

spots_file = os.path.join(out, "spots.json")
spots = json.load(open(spots_file)) if os.path.exists(spots_file) else {}

posters, rows, sheets = [], [], []
short = base.split("://", 1)[1].rstrip("/")
for i, s in enumerate(hunt["stops"], 1):
    url = f"{base}stop.html?c={s['code']}"
    qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_Q, box_size=20, border=2)
    qr.add_data(url)
    qr.make(fit=True)
    qr.make_image(fill_color="black", back_color="white").save(os.path.join(out, f"{s['code']}.png"))
    rows.append([i, s["code"], s["type"], s["name"], spots.get(s["code"], ""), url])
    posters.append(f"""
<section class="poster">
  <img class="logo" src="logo.png" alt="">
  <div class="kicker">{html.escape(hunt['title'])}</div>
  <h1>Scan me! <span>Skandeer my!</span></h1>
  <p>Point your phone camera here to win a prize<br>or uncover a piece of Rhodes history.</p>
  <p class="af">Rig jou foon se kamera hierheen om 'n prys te wen<br>of 'n stukkie Rhodes-geskiedenis te ontdek.</p>
  <img src="{s['code']}.png" alt="QR code">
  <div class="type">Can't scan? / Kan nie skandeer nie?<br>
    Go to <b>{html.escape(short)}</b> and type code <b class="code">{s['code']}</b></div>
  <div class="foot">#{i:02d}</div>
</section>""")
    if s["type"] == "prize":
        lines = "".join(f"<tr><td>{n}</td><td></td><td></td><td></td></tr>" for n in range(1, 26))
        sheets.append(f"""
<section class="sheet">
  <div class="kicker">{html.escape(hunt['title'])} · prize tick sheet</div>
  <h2>{html.escape(s['name'])} <small>code {s['code']}</small></h2>
  <p>{html.escape(s.get('prize',''))} · <b>{html.escape(s.get('limit','') or 'No limit set')}</b></p>
  <p class="how">Check the ticket shows code <b>{s['code']}</b> and is not stamped CLAIMED. Write down the 4-letter player ID,
  hand over the prize, then tap "Prize-giver: mark as handed over" twice on the player's phone.
  Turn away any player ID already on this sheet.</p>
  <table><tr><th>#</th><th>Player ID</th><th>Time</th><th>Your initials</th></tr>{lines}</table>
</section>""")

import shutil
if os.path.exists(os.path.join(site, "logo.png")):
    shutil.copy(os.path.join(site, "logo.png"), os.path.join(out, "logo.png"))

with open(os.path.join(out, "placement.csv"), "w", newline="") as f:
    w = csv.writer(f)
    w.writerow(["#", "code", "type", "name", "suggested spot", "url", "placed where", "placed by"])
    w.writerows(rows)

with open(os.path.join(out, "posters.html"), "w") as f:
    f.write(f"""<!doctype html><html><head><meta charset="utf-8"><title>QR posters</title>
<style>
@page {{ size: A4; margin: 12mm; }}
body {{ font-family: Georgia, serif; margin: 0; color: #2b2118; }}
.poster {{ page-break-after: always; text-align: center; padding: 2mm 0; }}
.kicker {{ text-transform: uppercase; letter-spacing: .15em; font: 600 14pt system-ui, sans-serif; color: #b5532a; }}
h1 {{ font-size: 44pt; margin: 5mm 0 3mm; }}
h1 span {{ color: #b5532a; }}
p {{ font-size: 15pt; margin: 0 0 3mm; }}
p.af {{ font-style: italic; color: #555; margin-bottom: 6mm; }}
img {{ width: 118mm; height: 118mm; image-rendering: pixelated; }}
img.logo {{ width: 34mm; height: 34mm; image-rendering: auto; display: block; margin: 0 auto 3mm; }}
.type {{ font: 13pt system-ui, sans-serif; margin-top: 5mm; line-height: 1.5; }}
.type .code {{ font: 700 17pt ui-monospace, monospace; letter-spacing: .12em; }}
.foot {{ font: 10pt ui-monospace, monospace; color: #888; margin-top: 4mm; }}
</style></head><body>{''.join(posters)}</body></html>""")

with open(os.path.join(out, "prize-tick-sheets.html"), "w") as f:
    f.write(f"""<!doctype html><html><head><meta charset="utf-8"><title>Prize tick sheets</title>
<style>
@page {{ size: A4; margin: 14mm; }}
body {{ font-family: system-ui, sans-serif; margin: 0; color: #2b2118; font-size: 11pt; }}
.sheet {{ page-break-after: always; }}
.kicker {{ text-transform: uppercase; letter-spacing: .12em; font-size: 9pt; color: #b5532a; }}
h2 {{ font: 700 20pt Georgia, serif; margin: 2mm 0; }} h2 small {{ font: 11pt ui-monospace, monospace; color: #777; }}
p {{ margin: 0 0 3mm; }} .how {{ background: #f6efe3; padding: 3mm; border-radius: 2mm; }}
table {{ width: 100%; border-collapse: collapse; }}
th, td {{ border: 1px solid #999; padding: 0 2mm; height: 7.6mm; text-align: left; }}
td:first-child, th:first-child {{ width: 10mm; color: #888; }}
</style></head><body>{''.join(sheets)}</body></html>""")

print(f"{len(rows)} QR codes written to {out}")
for r in rows:
    print(f"  #{r[0]:02d} {r[2]:8} {r[3]:30} {r[5]}")
