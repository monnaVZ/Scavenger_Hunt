// Shared helpers. Progress is kept on the player's own phone (localStorage),
// so no server, no sign-up, and nothing to break on the day.
(function () {
  var KEY = "stoepsit-hunt-v1";

  // ---------- Interface text (English / Afrikaans) ----------
  var TEXT = {
    en: {
      switchTo: "Afrikaans",
      codesFound: "codes found", of: "of",
      landmark: "landmark", landmarks: "landmarks", prize: "prize", prizes: "prizes",
      howTitle: "How to play",
      how: [
        "Follow the clue to a landmark and look for our QR code poster.",
        "Open your phone camera and point it at the code.",
        "Tap the link to see a prize or the story of the landmark.",
        "Each landmark gives you a clue to the next one. Prizes are hidden along the way, with no clues!",
        "Your finds are saved on your phone. Come back here to see them all.",
      ],
      cantScan: "Can't scan? Type the 6-character code from the poster:",
      go: "Go",
      yourFinds: "Your finds",
      tagPrize: "Prize", tagLandmark: "Landmark",
      nextClue: "Your next clue", firstClue: "Your first clue",
      allTitle: "You found them all!",
      allHome: "Every code in Rhodes, done. You now know this village better than most people who have driven through it. Well played!",
      allStop: "That was the last one. Every code in Rhodes, done. Well played!",
      newFind: "New find!", already: "You found this one already.",
      thatsNofT: "That's {n} of {t}.",
      foundPrize: "You found a prize", thanksTo: "Thanks to",
      showToClaim: "Show this screen to claim", player: "Player", found: "Found",
      example: "Example prize only. The real prizes are still being arranged.",
      staffMark: "Prize-giver: mark as handed over", tapAgain: "Tap again to confirm",
      claimed: "CLAIMED", claimedNote: "This prize has already been handed over to this phone.",
      historic: "Historic landmark", didYouKnow: "Did you know?",
      seeAll: "See all my finds",
      badTitle: "Hmm, that code isn't ours",
      badText: "We couldn't find this code. Try scanning it again, or head back to see your finds.",
      lockedTitle: "Not unlocked yet",
      lockedText: "You've found a real code, but this one isn't switched on yet. Come back and scan it again a little later!",
      madeFor: "Made for the Stoepsit Fees",
    },
    af: {
      switchTo: "English",
      codesFound: "kodes gevind", of: "van",
      landmark: "landmerk", landmarks: "landmerke", prize: "prys", prizes: "pryse",
      howTitle: "Hoe om te speel",
      how: [
        "Volg die leidraad na 'n landmerk en soek ons QR-kode-plakkaat.",
        "Maak jou foon se kamera oop en rig dit op die kode.",
        "Tik op die skakel om 'n prys of die landmerk se storie te sien.",
        "Elke landmerk gee jou 'n leidraad na die volgende een. Pryse is langs die pad weggesteek, sonder leidrade!",
        "Jou vondste word op jou foon gestoor. Kom terug hierheen om hulle almal te sien.",
      ],
      cantScan: "Kan nie skandeer nie? Tik die kode van 6 karakters op die plakkaat in:",
      go: "Gaan",
      yourFinds: "Jou vondste",
      tagPrize: "Prys", tagLandmark: "Landmerk",
      nextClue: "Jou volgende leidraad", firstClue: "Jou eerste leidraad",
      allTitle: "Jy het hulle almal gevind!",
      allHome: "Elke kode in Rhodes, klaar. Jy ken nou hierdie dorpie beter as die meeste mense wat al hier deurgery het. Mooi so!",
      allStop: "Dit was die laaste een. Elke kode in Rhodes, klaar. Mooi so!",
      newFind: "Nuwe vonds!", already: "Jy het hierdie een reeds gevind.",
      thatsNofT: "Dis {n} van {t}.",
      foundPrize: "Jy het 'n prys gevind", thanksTo: "Met dank aan",
      showToClaim: "Wys hierdie skerm om jou prys te eis", player: "Speler", found: "Gevind",
      example: "Net 'n voorbeeldprys. Die regte pryse word nog gereël.",
      staffMark: "Prysgewer: merk as oorhandig", tapAgain: "Tik weer om te bevestig",
      claimed: "GEËIS", claimedNote: "Hierdie prys is reeds aan hierdie foon oorhandig.",
      historic: "Historiese landmerk", didYouKnow: "Het jy geweet?",
      seeAll: "Sien al my vondste",
      badTitle: "Hmm, dié kode is nie ons s'n nie",
      badText: "Ons kon nie hierdie kode vind nie. Probeer dit weer skandeer, of gaan terug om jou vondste te sien.",
      lockedTitle: "Nog nie oopgesluit nie",
      lockedText: "Jy het 'n regte kode gevind, maar dié een is nog nie aangeskakel nie. Kom skandeer dit 'n bietjie later weer!",
      madeFor: "Gemaak vir die Stoepsit Fees",
    },
  };

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function save(state) {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }
  function state() {
    var s = load();
    if (!s.player) {
      // Short per-phone ID, shown on prize screens so organisers can note who claimed.
      var a = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789", id = "";
      for (var i = 0; i < 4; i++) id += a[Math.floor(Math.random() * a.length)];
      s.player = id;
    }
    s.found = s.found || {};
    s.claimed = s.claimed || {};
    if (!s.lang) s.lang = /^af/i.test(navigator.language || "") ? "af" : "en";
    save(s);
    return s;
  }
  function lang() { return state().lang; }
  function setLang(l) { var s = state(); s.lang = l; save(s); }
  function T(key) { return TEXT[lang()][key] || TEXT.en[key] || key; }
  // Content in the player's language: obj.af.field if Afrikaans is on and it exists, else obj.field.
  function L(obj, field) {
    var a = lang() === "af" && obj.af;
    return a && a[field] != null && a[field] !== "" ? a[field] : obj[field];
  }
  function esc(t) {
    return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function findStop(code) {
    code = String(code || "").trim().toUpperCase();
    return HUNT.stops.filter(function (s) { return s.code === code; })[0];
  }
  // A prize that hasn't been filled in yet stays hidden from players.
  function isPending(stop) {
    return stop.type === "prize" && /^\s*(TODO|$)/i.test(stop.prize || "");
  }
  function active() {
    return HUNT.stops.filter(function (s) { return !isPending(s); });
  }
  // The next landmark (in walking order) this player hasn't found yet, starting after `afterCode`.
  function nextLandmark(found, afterCode) {
    var list = HUNT.stops.filter(function (s) { return s.type === "history"; });
    var start = 0;
    for (var i = 0; i < list.length; i++) if (list[i].code === afterCode) start = i + 1;
    for (var j = 0; j < list.length; j++) {
      var s = list[(start + j) % list.length];
      if (!found[s.code] && s.clue) return s;
    }
    return null;
  }
  function markFound(code) {
    var s = state(), isNew = !s.found[code];
    if (isNew) { s.found[code] = Date.now(); save(s); }
    return { state: s, isNew: isNew };
  }
  function markClaimed(code) {
    var s = state();
    s.claimed[code] = Date.now(); save(s);
  }
  function fmtTime(ts) {
    var d = new Date(ts), loc = lang() === "af" ? "af-ZA" : "en-ZA";
    return d.toLocaleDateString(loc, { weekday: "short" }) + " " +
      d.toLocaleTimeString(loc, { hour: "2-digit", minute: "2-digit", hour12: false });
  }
  // Language switch button: put <button id="lang"></button> on the page.
  function initLang() {
    document.documentElement.lang = lang();
    var b = document.getElementById("lang");
    if (!b) return;
    b.textContent = T("switchTo");
    b.onclick = function () { setLang(lang() === "af" ? "en" : "af"); location.reload(); };
  }

  window.Hunt = {
    state: state, esc: esc, findStop: findStop, markFound: markFound, markClaimed: markClaimed,
    fmtTime: fmtTime, isPending: isPending, active: active, nextLandmark: nextLandmark,
    T: T, L: L, lang: lang, initLang: initLang,
  };

  // Offline support: after the first visit the whole hunt works without signal.
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    });
  }

  // Optional visitor counter (privacy-friendly, no cookies). Only loads if a code is set in data.js.
  if (window.HUNT && HUNT.goatcounter) {
    var gc = document.createElement("script");
    gc.async = true;
    gc.src = "https://gc.zgo.at/count.js";
    gc.setAttribute("data-goatcounter", "https://" + HUNT.goatcounter + ".goatcounter.com/count");
    document.head.appendChild(gc);
  }
})();
