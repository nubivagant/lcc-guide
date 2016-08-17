importScripts( '/lcc-guide/cache-polyfill.js' );

var filesToCache = [
  // root
  '/lcc-guide/',
  '/lcc-guide/index.html',
  // css
  '/lcc-guide/assets/css/main.css',
  '/lcc-guide/assets/css/normalize.css',
  '/lcc-guide/assets/css/syntax.css',
  // images
  '/lcc-guide/assets/img/octocat.png',
  // pages
  '/lcc-guide/jekyll/update/2013/11/20/welcome-to-jekyll.html','/lcc-guide/example_page/',
  // posts
  '/lcc-guide/jekyll/update/2013/11/20/welcome-to-jekyll.html',
];

self.addEventListener( 'install', function( e ) {
  e.waitUntil(
    caches.open( 'DOCter-v1.1' )
      .then( function( cache ) {
        return cache.addAll( filesToCache );
    })
  );
});

self.addEventListener( 'fetch', function( event ) {
  event.respondWith(
    caches.match( event.request ).then( function( response ) {
      return response || fetch( event.request );
    })
 );
});
