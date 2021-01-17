'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d908d26cac8092d475f40a5179ca6347",
".git/config": "8831f589e9dd3f6f621d13c4d3b8d0f2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "202cb50076a119826b7fecb9cddc32de",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "b098aa64701e489465ea3c4607814a42",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ac5cecef9550236dbe6bce7b7febecbf",
".git/logs/refs/heads/main": "cef3f62c8f4bba4df55978594ede7e9e",
".git/logs/refs/remotes/origin/main": "7750c1d4122411d36df22e042f47c351",
".git/objects/05/66a2327ca70cab54e275324fb78cf9a1cb9ec3": "8d9627672857b406bd6c493ec63d5a6d",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/14/12f584ffff4e71ccbb4abb2700c157a1dd9f2c": "4c51890d662605fbbb7b30ae1c2ddbfa",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/cd005c6c78fa7d0e006f364dd1f0316a6b2ae5": "60654accca69a843bf68594a351e95cc",
".git/objects/2a/75221646c69a368d3176eb0365b30493659ec9": "b3f7a2c77d2ae57818c40e872ebc623b",
".git/objects/2f/3a4213558b6942bf9e24f22441b333f9fa4d0b": "4b4a5debeef5ec6c5e5c03709cb36fea",
".git/objects/3c/7c2d0134909ab1e3415135f3916898c01eed61": "270b368a9edca3c435d8713df2e18faa",
".git/objects/3d/d8fca5ba42557fbc37aa249224902c5eb9a4f2": "e516d5e7cd81f750d5b6a6ee31962a4b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/62/b71ba71b435fa3633ae17588f00a7be1246c16": "7c842e8c19ebab7bd4cfb789570caf85",
".git/objects/81/302b07ccc3d1ebc4c4233eb3b27c95133f87b1": "e0e68875f22373c8fed6d7b57040e297",
".git/objects/84/d734c34fcdb5ecf22f6a95c9df0e405c9cafac": "e1cb5ee5334fb34d68cd2ddca2c8644f",
".git/objects/86/eabad78775e7aadf241a1aac571ec4ae345d71": "ee5519461d211b35224ede09b2872b0a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/358efeac7812694b7850b2b3894ca1783d3747": "bc33260442d1303be899fcd68db9becd",
".git/objects/92/31fc9c29be29beed5fdac9419695b8391ff555": "b3183bebe6380cefaa21a019a2f6077e",
".git/objects/96/bdb9c27e7cab6f0752eff8b8d49698c7018b0b": "d163c4183ba2a9ac8e9ffdbbc4050d94",
".git/objects/9a/5f55d2cb5e7b855168c33c8a23acadbd0a045b": "58f8f7169e0d2beed7077c26b52eecc2",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/aa/c0fd79c47c2e3328b3b55e9547699d8b826daa": "2e3c9cd5099cae63dceab438bb854e28",
".git/objects/ad/ec66d7eb791fb04268a355b45f9844800859d2": "f74dc1bb9194ea5e1aea42fbe186c262",
".git/objects/af/8db5ae5b09f6362ef4aaf80eae87bec4419ed4": "360dbe985b2fe69635538ee7e7883186",
".git/objects/b0/49286e919244a7d09837d6e8e440e4bfd77732": "e984b5381379238316a2267567b1953c",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b5/e744febd5d88db9f5110f68ae9217f5b8ceccd": "17c62ecb6825e074440e81237c4e8382",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/89b4e72faf8d4ef98a0128f3e86109c8c885f7": "567b6778c146faebb28ed845fe810410",
".git/objects/bd/010925abbd22455e0557452339ca0465420028": "21c31efe09cb8d68d831f6e0cc2b800c",
".git/objects/c1/4a8d6f2c808f0525eed94ba715f05d7d765180": "7bc56a89d99fad951617fee7136a2a73",
".git/objects/cb/85e3485f56eafbf9cb1d43c6addd213c0b0887": "b4ca8031ed243416a3d4545a309a41d5",
".git/objects/e0/178521ee4001d373a16f1943bb159fb56507a1": "9c59d7f8e48f3146056dc0d83da93686",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f9/9be38cd925844a5c52d3421ad45a65db6207b4": "2062b0345a1c003ce1e8ba87dbbb0c6f",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/refs/heads/main": "9e8ac20944b2691147ff5829fceed337",
".git/refs/remotes/origin/main": "9e8ac20944b2691147ff5829fceed337",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "5e9fc068aa256dcb0bf3eabee8903fc6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "251056608a98f770c3546cd5ca5a876d",
"/": "251056608a98f770c3546cd5ca5a876d",
"main.dart.js": "d7c7492aaba38df4c33d02a9662ba89c",
"manifest.json": "2a216e252b712fb4b0d185880bbac732",
"README.md": "640828765ed840b165ae9f9bdf753220",
"version.json": "91f3926493d4a41300289de7f869f124"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
