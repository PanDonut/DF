window.addEventListener("offline", function() {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        'offline.png',
        'offline-page.html',
      ]);
    })
  );
});