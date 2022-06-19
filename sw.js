self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('_loan-calc').then((cache) => cache.addAll([
            'index.html',
            'index.js',
            'bootstrap.min.css',
            'bootstrap.bundle.min.js',
            'jquery-git.min.js',
            'moment.min.js',
            'timing.png',
        ])),
    );
});

self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});