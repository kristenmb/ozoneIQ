self.addEventListener('install', (e) => {
  
  console.log('SW install event')
})

self.addEventListener('activate', (e) => {
  console.log('SW activate event')
})