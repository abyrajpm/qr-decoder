const ASSETS = ['.', './index.html', './manifest.webmanifest'];
self.addEventListener('install', e=>{
  e.waitUntil(caches.open('qr-decoder-v1').then(c=>c.addAll(ASSETS)));
});
self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request)));
});
