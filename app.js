// Shared helpers. Progress is kept on the player's own phone (localStorage),
// so no server, no sign-up, and nothing to break on the day.
(function () {
  var KEY = "stoepsit-hunt-v1";

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
    save(s);
    return s;
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
  function markFound(code) {
    var s = state(), isNew = !s.found[code];
    if (isNew) { s.found[code] = Date.now(); save(s); }
    return { state: s, isNew: isNew };
  }
  function fmtTime(ts) {
    var d = new Date(ts);
    return d.toLocaleDateString(undefined, { weekday: "short" }) + " " +
      d.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
  }

  window.Hunt = { state: state, esc: esc, findStop: findStop, markFound: markFound, fmtTime: fmtTime };
})();
