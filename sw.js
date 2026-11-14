// Keeps the hunt working when there is no signal.
// Network first (so content updates show up straight away), saved copy as the fallback.
var CACHE = "stoepsit-hunt-v1";
var FILES = ["./", "index.html", "stop.html", "style.css", "app.js", "data.js", "logo.png", "icon-180.png"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }));
  self.skipWaiting();
});
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request).then(function (res) {
      if (res.ok) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
      }
      return res;
    }).catch(function () {
      // ignoreSearch: stop.html?c=ANY is served from the one saved stop.html
      return caches.match(e.request, { ignoreSearch: true });
    })
  );
});
