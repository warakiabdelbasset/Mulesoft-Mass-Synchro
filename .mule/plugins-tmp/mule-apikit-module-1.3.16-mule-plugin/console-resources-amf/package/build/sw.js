/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "api-console-78222ea6.js",
    "revision": "a9b9fcab714c6f1cf6a347a279e31a16"
  },
  {
    "url": "index.html",
    "revision": "ab7768ad560945c765faf5d9d7ee7065"
  },
  {
    "url": "legacy/api-console-a61c800f.js",
    "revision": "a43c1e8ed8b3b2a41d55b2ba97f18472"
  },
  {
    "url": "polyfills/core-js.da8d8819d4fcddc05b82706be190ca82.js",
    "revision": "280dc6d955e57fd263fd0f3f9741c059"
  },
  {
    "url": "polyfills/custom-elements-es5-adapter.84b300ee818dce8b351c7cc7c100bcf7.js",
    "revision": "cff507bc95ad1d6bf1a415cc9c8852b0"
  },
  {
    "url": "polyfills/dynamic-import.991be47e17117abb5eb15f5254ad3869.js",
    "revision": "08b86a7f56c6f0d65265654299b16d74"
  },
  {
    "url": "polyfills/fetch.22ae01701128c1ab2432217873215d6a.js",
    "revision": "97857a4d39ccdacede722329a79af967"
  },
  {
    "url": "polyfills/regenerator-runtime.00d94cc6e1d36f22abd18835b91f49dc.js",
    "revision": "312761a785d67a66e72cb3a9fb37aac8"
  },
  {
    "url": "polyfills/systemjs.43834357060ed117b1ff0f5bdaafa116.js",
    "revision": "2eb2280584e8e298418e20d8761d0546"
  },
  {
    "url": "polyfills/webcomponents.33779c09ef049bf2e469a098b6ee7a5f.js",
    "revision": "de4bdd416c5bdb296585ee9f5f918002"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));
