const cacheName = "v3";

const addResourcesToCache = async (resources) => {
  const cache = await caches.open(cacheName);
  await cache.addAll(resources);
};

const putInCache = async (request, response) => {
  const cache = await caches.open(cacheName);
  await cache.put(request, response);
};

const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl  }) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    console.log("Response from cache");
    return responseFromCache;
  }
  try {
    const responseFromNetwork = await fetch(request);
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork; 
  } catch (e) {
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      console.log("Response from fallback");
      return fallbackResponse;
    }
    return new Response("Network error happened", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }

};

self.addEventListener("install", (event) => {
  event.waitUntil(addResourcesToCache([
    "expandable_div.html",
    "js/expandable.js",
    "css/expandable_div.css"
  ]));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            return caches.delete(cache);
           }
        })
      );
   })
 );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst({
    request: event.request,
    fallbackUrl: "expandable_div.html"
  }));
});
