// const pwaCache = 'pwa-cache-1'
// const staticCache = [
//       '/index.html',
//       '/index.css',
//       '/index.js',
//       '/logo4.png',
//       '/utilities.js',
//       '/RB.png',
//       '/LM.png',
//       '/KB.png',
//       '/location.svg'
//     ]

// self.addEventListener('install', (e) => {
//   e.waitUntil(
//     caches.open(pwaCache)
//       .then(cache => cache.addAll(staticCache))
//   )
// })

// self.addEventListener('activate', (e) => {
//   let cacheCleaned = caches.keys()
//     .then(keys => {
//       keys.forEach(key => {
//         if (key !== pwaCache) {
//           return caches.delete(key)
//         }
//       })
//     })
//   e.waitUntil(cacheCleaned)
// })


// self.addEventListener('fetch', (e) => {
//   e.respondWith(
//     caches.match(e.request).then((res) => {
//       if (res) return res

//       return fetch(e.request).then((newRes) => {
//         caches.open(pwaCache).then((cache) => cache.put(e.request, newRes))
//         return newRes.clone()
//       })
//     })
//   )
//   })