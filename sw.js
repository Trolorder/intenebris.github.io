// sw.js — Service Worker minimal pour In Tenebris
// Rôle : exister et s'activer. Suffisant pour compléter les critères PWA
// aux côtés du manifest.json. Peut être enrichi plus tard (cache offline,
// notifications push, etc.) sans casser l'enregistrement existant.

const VERSION = 'in-tenebris-v1';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Passe-plat réseau : ne cache rien, ne bloque rien.
// (à remplacer par une vraie stratégie de cache si besoin d'un mode hors-ligne)
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
