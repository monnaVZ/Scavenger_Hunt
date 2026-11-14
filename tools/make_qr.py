#!/usr/bin/env python3
"""
Generate QR codes + a printable poster sheet for every stop in data.js.

Usage:
    pip install qrcode pillow
    python3 tools/make_qr.py https://YOUR-SITE-ADDRESS/  [output_dir]

Needs Node.js (to read data.js). Output (default ../qr-codes next to the site):
    <CODE>.png        one QR image per stop
    posters.html      print it (one poster per page) and stick them up around town
    placement.csv     organiser checklist: which poster goes where
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

posters, rows = [], []
for i, s in enumerate(hunt["stops"], 1):
    url = f"{base}stop.html?c={s['code']}"
    qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_Q, box_size=20, border=2)
    qr.add_data(url)
    qr.make(fit=True)
    qr.make_image(fill_color="black", back_color="white").save(os.path.join(out, f"{s['code']}.png"))
    rows.append([i, s["code"], s["type"], s["name"], s.get("spot", ""), url])
    posters.append(f"""
<section class="poster">
  <div class="kicker">{html.escape(hunt['title'])}</div>
  <h1>Scan me!</h1>
  <p>Point your phone camera here to win a prize<br>or uncover a piece of Rhodes history.</p>
  <img src="{s['code']}.png" alt="QR code">
  <div class="foot">#{i:02d} · {s['code']}</div>
</section>""")

with open(os.path.join(out, "placement.csv"), "w", newline="") as f:
    w = csv.writer(f)
    w.writerow(["#", "code", "type", "name", "suggested spot", "url", "placed where", "placed by"])
    w.writerows(rows)

with open(os.path.join(out, "posters.html"), "w") as f:
    f.write(f"""<!doctype html><html><head><meta charset="utf-8"><title>QR posters</title>
<style>
@page {{ size: A4; margin: 12mm; }}
body {{ font-family: Georgia, serif; margin: 0; color: #2b2118; }}
.poster {{ page-break-after: always; text-align: center; padding: 10mm 0; }}
.kicker {{ text-transform: uppercase; letter-spacing: .15em; font: 600 14pt system-ui, sans-serif; color: #b5532a; }}
h1 {{ font-size: 54pt; margin: 6mm 0 2mm; }}
p {{ font-size: 16pt; margin: 0 0 8mm; }}
img {{ width: 140mm; height: 140mm; image-rendering: pixelated; }}
.foot {{ font: 10pt ui-monospace, monospace; color: #888; margin-top: 4mm; }}
</style></head><body>{''.join(posters)}</body></html>""")

print(f"{len(rows)} QR codes written to {out}")
for r in rows:
    print(f"  #{r[0]:02d} {r[2]:8} {r[3]:30} {r[5]}")
