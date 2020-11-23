
var cacheName = "ginko-v1";

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
              console.log('[Service Worker] Caching all: app shell and content');
          return cache.addAll(contentToCache);
        })
      );
});