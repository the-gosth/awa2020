self.addEventListener('install', event => {
	console.log(`Event fired: ${event.type}`);
	console.dir(event);
});

self.addEventListener('activate', event => {
	console.log(`Event fired: ${event.type}`);
	console.dir(event);
});


var cacheName = 'bestEver';
self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
		.then((response) => {
			if (response) {
				return response;
			}

			let fetchRequest = event.request.clone();

			return fetch(fetchRequest).then(
				(fetchResponse) => {
				if(!fetchResponse || fetchResponse.status !== 200) {
					return fetchResponse;
				}

				let responseToCache = fetchResponse.clone();

				caches.open(cacheName)
				.then((cache) => {
					cache.put(event.request, responseToCache);
				})

				return fetchResponse;
				}
			)
		})
	)
})