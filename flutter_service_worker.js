'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "34e7611d7d6294a84d2898c7db338d5f",
".git/config": "1c4437af2af53e43a84248544ce5e2c1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "64f1cf062e8518e67efa5eb8b8ba6661",
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
".git/index": "a051fc9f0956f46bf1dc6eed94b00ab1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "000b4f6f116e86ba5b19cadfaa7bc15d",
".git/logs/refs/heads/main": "6a44491e1ddcc0cc192e95b1adbb85da",
".git/logs/refs/remotes/origin/main": "31db623e1f9f2837829b902db5eac97f",
".git/objects/01/fcc60830fb9117c3a5dcfe1720053b5d3361f5": "52f4bb4792a49a934f33316190d5cf74",
".git/objects/02/7fbc8025b11f089ab06001150e53a4b66add0a": "0cb33d65b8f37a4b78a9730c19d23bc3",
".git/objects/11/bd220dd7179afa3745cf93feb1cdbaf74a5d43": "0daa17cf81e237cd35f85bf6d61bf5da",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/13/7594fe78cd4f3d47e736f3bc26432bcb095e4f": "77457533486a93c14718c7d8bf062e17",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/9d294715ca5026e1d196dca0cbe98494cda514": "4758a4492a1d4d2c491f425c19bcdf37",
".git/objects/2f/3a4213558b6942bf9e24f22441b333f9fa4d0b": "4b4a5debeef5ec6c5e5c03709cb36fea",
".git/objects/2f/be4fc2a685cb2b8e090bfda42c2a85d04a2fc5": "7c1787fb99b3b86d165f3c75afd4c442",
".git/objects/31/991ab397975cb069bd1a4f82c82401e31d56f2": "54cf4102fa4f1573106640b44175829a",
".git/objects/3d/d8fca5ba42557fbc37aa249224902c5eb9a4f2": "e516d5e7cd81f750d5b6a6ee31962a4b",
".git/objects/42/64a01cebd76c06fc294a4d845bc8fb684d21d6": "9ab14780412495d09596b00a423f3713",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/56/17e42926ceb9a2ce591da90bc623c8c0e54fad": "887e90fffb9cc45bd46c5025ddd637ea",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/63/12c6888296683c2e9ff9a86b678953eb4c13df": "853d71d0bacf45aaec7b00a7a11393ee",
".git/objects/64/69dcb5585a605374851cd577adfcf2190867d2": "1371a9ea4d90331db59e714527a512b6",
".git/objects/79/12b0a394ffd0f7ba082c2ff368f16acec6a0b9": "4c6ecda79a7d5fb94c8659646b901b26",
".git/objects/84/d734c34fcdb5ecf22f6a95c9df0e405c9cafac": "e1cb5ee5334fb34d68cd2ddca2c8644f",
".git/objects/86/eabad78775e7aadf241a1aac571ec4ae345d71": "ee5519461d211b35224ede09b2872b0a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/963cab7ea5ef2197e661b6d4dcd6913d4c754f": "1da278efc6cb450e8711ae24c28da83c",
".git/objects/91/03f9b9108f3d9c922125d68fe7895d4e27cde6": "245c76c23061da180f66e9802101c946",
".git/objects/91/f7f50d731338df2110e201fe0e0bbd7df3318c": "98e4ffeb3089a228c976b1aaa797ba86",
".git/objects/92/31fc9c29be29beed5fdac9419695b8391ff555": "b3183bebe6380cefaa21a019a2f6077e",
".git/objects/9a/5f55d2cb5e7b855168c33c8a23acadbd0a045b": "58f8f7169e0d2beed7077c26b52eecc2",
".git/objects/a8/15f800736e139b3c31e32e9bb2005c6d014354": "6676ba57d610711668433f3ad341c3c9",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/aa/c0fd79c47c2e3328b3b55e9547699d8b826daa": "2e3c9cd5099cae63dceab438bb854e28",
".git/objects/af/d270b7201da1a25090c35347ae9edc7aa9b73f": "b6ff6f4ebafb9610b1064fd2bc661037",
".git/objects/b0/49286e919244a7d09837d6e8e440e4bfd77732": "e984b5381379238316a2267567b1953c",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bd/010925abbd22455e0557452339ca0465420028": "21c31efe09cb8d68d831f6e0cc2b800c",
".git/objects/c5/dcb4ce3d6885aa31dedbe83b762a93c90daaf6": "90c866e849c96109851f2471e39af015",
".git/objects/ca/a233dbbe9c5d589cf4f64cfccf8f93c4fd5241": "61d9916a3a351fb9988e36d92d72d8d1",
".git/objects/cb/85e3485f56eafbf9cb1d43c6addd213c0b0887": "b4ca8031ed243416a3d4545a309a41d5",
".git/objects/e0/178521ee4001d373a16f1943bb159fb56507a1": "9c59d7f8e48f3146056dc0d83da93686",
".git/objects/eb/09ffb00023dad3e8bb7bc3ac2d6d7bc7f3f19e": "689843a994864e417e01fc5e4e972b2d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f6/d1b7b2176feb266eb65dfe677ed0a2397fe088": "f604361ea7f64cdcb02883748e63aa3f",
".git/objects/f9/9be38cd925844a5c52d3421ad45a65db6207b4": "2062b0345a1c003ce1e8ba87dbbb0c6f",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/refs/heads/main": "f8a1666b963772d167f34e71a9c38000",
".git/refs/remotes/origin/main": "f8a1666b963772d167f34e71a9c38000",
"assets/AssetManifest.json": "55d3717ec5c6ee7d1a2b58cb447f3f4b",
"assets/assets/empty.png": "b33bb4fc8549d49a551de903548836dc",
"assets/assets/piece.png": "9a89fbcc9f1598ca1eb9e7a8a4b00d1c",
"assets/assets/piece_pivot.png": "d60ad197f38f1aadebf001d258e9f661",
"assets/assets/piece_selected.png": "93597a54817189b4d5860aac432b8087",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "5e9fc068aa256dcb0bf3eabee8903fc6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "734c7afa4a74979276290cce39e81c0a",
"/": "734c7afa4a74979276290cce39e81c0a",
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
