//install process
self.addEventListener('install', e => {
    console.log('sw is installed')
})

//activate 
self.addEventListener('activate', e => {
    console.log('sw is activated')
})

self.addEventListener('fetch', e => {
    console.log('sw fetch event', e)
})