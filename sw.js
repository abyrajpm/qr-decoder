const ASSETS = ['.', './index.html', './manifest.webmanifest', './config.json'];
self.addEventListener('install', e=>{
  e.waitUntil(caches.open('qr-decoder-v3').then(c=>c.addAll(ASSETS)));
});
self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request)));
});
