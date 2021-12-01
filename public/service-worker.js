// cache aktivieren
const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

// das ist der service worker
const self = this;



// event für die Installation des Service Workers
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log("Opened Cache");
                return cache.addAll(urlsToCache);
            })
    )
});

self.addEventListener("push", function (event) {
    console.log("[Service Worker] Push Received.", event.data.text());
    var options = {
        body: "This notification was generated from a push!"
    };
    event.waitUntil(self.registration.showNotification("Hello world!", options));
});