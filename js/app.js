if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('https://cybertunnelofficial.github.io/progressive-web-app/sw.js')
        .then(reg => console.log('sw registered', reg))
        .catch(err => console.log('sw register err', err))
}