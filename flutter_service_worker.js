'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "734e3a1e66b24045d397d04a6b45c554",
"assets/assets/facebook-login-button-01.png": "13112f18aa0ac1e31d3df4679d14f62c",
"assets/assets/facebook_login.png": "db8f4655ff185f09aeb4cc93a2c2d16d",
"assets/assets/google-login-button-01.png": "90ea62b046680d16cb06ee1bbe15d355",
"assets/assets/headerBG.png": "5246f48bd9cdca824c0c945a051722e6",
"assets/assets/header_carosel_card_bg-01.png": "1bde3151c80b0dc678286d1812db8405",
"assets/assets/loginBG.jpg": "e1b46c7cd8c5cadcb9b3b3de1d4d9ce7",
"assets/assets/logo/nextCartLogo.png": "ab31b8f627ecf37c89e97c0aadca0be9",
"assets/assets/logo/nextCartLogoFullWide.png": "1573e2214c9a339e6a27f79e0fe2783c",
"assets/assets/logo/nextCartLogoFullWideBlack.png": "9768702ff76fdf9b99ba21086c5ce919",
"assets/assets/menu/Business%2520Support.png": "505d8cb04b4d7147c0c86f86559dca2f",
"assets/assets/menu/Community%2520Management.png": "29dc7343de8d2aaa31d990ae5f5e5cff",
"assets/assets/menu/customer.png": "51d44c28659df5644aa154efc86d118d",
"assets/assets/menu/invoice.png": "2f42b95c162610b57eb2b771ba4e61de",
"assets/assets/menu/Manage%2520Business.png": "3fe2b8e89e94e592421a185ef87e4f76",
"assets/assets/menu/Manage%2520Orders.png": "6020641aeee769a82113cc4dc1192d01",
"assets/assets/menu/operation.png": "5497be73865d98038eef3e4d2224bd1b",
"assets/assets/menu/order.png": "0414482975f1d441b51db4bb06b4e588",
"assets/assets/menu/POS.png": "59c468b63fb83980ee5104d8d8b3e714",
"assets/assets/menu/product.png": "4e92f9f0e6663058b6a5abffcb44dd9c",
"assets/assets/menu/sales.png": "b72cdc31c125d880399f9899d3ccfd12",
"assets/assets/menu/Source%2520Product.png": "7b64e7157e53d5f26c97c16a15229987",
"assets/assets/menu/Update%2520Shop.png": "39c4a004c549c46ba4bfc86fd5047f38",
"assets/assets/menu/vendor.png": "4dda95e64ebe894fa5be731f7d5213f6",
"assets/assets/noData.json": "1526f6b5970b958cbcb9e7a7e93aa9f0",
"assets/assets/placeholder.png": "ac09bc77fc8448d29514e382026abfcc",
"assets/assets/svg/rightBar.svg": "7b8883eccedae8a4982c39ad5da0cc89",
"assets/assets/ui.jpg": "30878043eba0e7a940a0aa5199791aff",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "b84e25cf949e2181c7ad74b80e37d36b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/shaders/ink_sparkle.frag": "3d5ed56329f8fc5a5724887f6abc0da4",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "41c1774bc68fa8642ced5f2b60d835ec",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "433ac136717173f94839976468059e53",
"icons/Icon-512.png": "b8884c311f3c49e8dd71262997470972",
"icons/Icon-maskable-192.png": "433ac136717173f94839976468059e53",
"icons/Icon-maskable-512.png": "b8884c311f3c49e8dd71262997470972",
"index.html": "429123eecfabe05ad94d0dc6cf63ab36",
"/": "429123eecfabe05ad94d0dc6cf63ab36",
"main.dart.js": "fdacc034ac2624c6076ea09d3be02e5d",
"manifest.json": "bc08ef917a24a2d7a84df3e7e16ddea8",
"version.json": "fa844dbfffed37e47d0fada545e565b2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
