'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "acd056d10a443e1eda6118418a5b1ce9",
"index.html": "4f0b39ab0cbb0f2f5a470f9ede9b1a0e",
"/": "4f0b39ab0cbb0f2f5a470f9ede9b1a0e",
"main.dart.js": "8ae762d8423c1c997f03f6fe470f63ad",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"README.md": "4349c8df7c35b8be06fc23be4340ce87",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "92c19a052ea1d0cca09866c98d535052",
".git/config": "7e99556288be98cbb370e7f300483dcc",
".git/objects/5a/f3de659dfb204f0915e9057bacdbe0c1d52344": "4cfa63c5a1e9061be948ccaf6a5d5176",
".git/objects/6c/2269167019e40bf9a27bb7ebf299482148e986": "1bc1e04546359a0305bcbaef33c6b917",
".git/objects/f6/0f5b8420b7d44369a77c54fa51397f945077e5": "7cf483028f4136040be2c1533840bdcf",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8b2af4c7b9c53d6419b69b7a1c43aba1",
".git/logs/refs/heads/main": "1be98d0dc1d12dd567600fc79ced1c6c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4d688624d88d0b7725bfe927a7c6ef08",
".git/index": "3ba2b405e8ecb81c9e8feb53cad5e1b9",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "dcb20af26947407a68fc9adb41bbe9d6",
"assets/NOTICES": "ca63366801eba4bca1ab3caf8c63e146",
"assets/FontManifest.json": "eadf7fa9fcc069d1d9e23238154534d7",
"assets/AssetManifest.bin.json": "624766d5184c23b63f0cbdcffedb59ad",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/google_places_flutter/images/location.json": "afa33acf2c340246c901718f4efdfccf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "386ee8ba8b1b4f2557acd8381f2db596",
"assets/fonts/MaterialIcons-Regular.otf": "cf3adafb2304ffe6ebe06346baa29192",
"assets/assets/menu_report.png": "4879ce54c5babb60472e28f4ba36496c",
"assets/assets/mail.png": "406f2ffcfb5478556df1eae81601e0c5",
"assets/assets/menu_order.png": "8d2b6073510603e21ed844aabdfd2c78",
"assets/assets/menu_calendar.png": "23acc0c8ff1da1a07370fe4b87f6d475",
"assets/assets/store.png": "275b004d8f492ec6c76e4d0e654331cc",
"assets/assets/qr_bg.jpeg": "5515cb693809110539f478a5af7f37cf",
"assets/assets/order.png": "a4df7c7a4ecd954d3f7b746e79e457a7",
"assets/assets/purchase.png": "1628e7da0303b3c7182f4e1338574c66",
"assets/assets/images/img_skirt_icon.svg": "50b43712b40df66800e7c2a2f6122fb8",
"assets/assets/images/img_notification_icon.svg": "5329e3f941f57ae4704571840f26b19c",
"assets/assets/images/img_vector_41.svg": "ca9767d25d77dc27538e9800d0f2d748",
"assets/assets/images/img_profile_picture_1.png": "5c987fbe4a1d6b3e91172fe244856775",
"assets/assets/images/img_product_picture01.png": "32a5447a016f22b1fc276db04e615112",
"assets/assets/images/img_profile_picture_72x72.png": "3a70bec7d8813398008ea23b5771d6a4",
"assets/assets/images/img_product_picture03.png": "7a72fa23324898aa9e2fa8f8057df3ff",
"assets/assets/images/img_nav_explore_primary.svg": "c8baf0ed54e4d5b5ca0e017c79dee64d",
"assets/assets/images/img_message_icon.svg": "8939c5894907cc28d277af3df92ca518",
"assets/assets/images/img_close_icon.svg": "c539e250466cf7d84500c1f4689676af",
"assets/assets/images/img_nav_cart_blue_gray_300.svg": "a6ed66358732ecb8953b06e79d036f4c",
"assets/assets/images/img_product_picture02.png": "87420bfb820c473fdf9d79aea6ad9555",
"assets/assets/images/no_products.png": "8e0dca81cedea36fada38c04d55c375e",
"assets/assets/images/img_lock.svg": "ee625c088f92bf7d7db58b780b775353",
"assets/assets/images/img_credit_card_icon.svg": "8f5ea9999c5e87b078c4a1980f7493a9",
"assets/assets/images/img_profile_picture_48x48.png": "900e773e28e94a3512f94e0b336f7515",
"assets/assets/images/img_transaction_icon.svg": "d6ec8d5252911ee3c92106fb205c3582",
"assets/assets/images/img_woman_pants_icon.svg": "69b07a7776e7b5e4a4a76ba6dc94308b",
"assets/assets/images/img_nav_cart_primary.svg": "638eb74d8cb43bc7f2bf3bced8cad251",
"assets/assets/images/img_lock_primary.svg": "604eae00e3ffbf4ea86af7c1a0e56917",
"assets/assets/images/img_man_work_equipment.svg": "aa70e41608dc18fb92d2e9e562e9dc4f",
"assets/assets/images/img_man_pants_icon.svg": "cbbc12df9c8b43636993a5d525ef71b1",
"assets/assets/images/img_product_image_109x109.png": "ccaafba95d93b7889cf8191fc609e099",
"assets/assets/images/offer_picture_1.png": "3d54c10d916cc3a92b0297c99072b17f",
"assets/assets/images/img_rewind.svg": "9c926f74f2a5ca2b795c2bc90433eadc",
"assets/assets/images/img_facebook_icon.svg": "b6f879631c8590cd4a92c94953ccdc98",
"assets/assets/images/img_email_icon.svg": "31400d5bc6e120c61fb3adc5933bc546",
"assets/assets/images/img_nav_account.svg": "86c6b3fb0183a7ca419194d41344ac88",
"assets/assets/images/img_woman_t_shirt_icon.svg": "cb26afd5884d61d23ee1ce4f3e82e90a",
"assets/assets/images/img_notification_icon_primary.svg": "9bf38b81d4408232386ea7c649659801",
"assets/assets/images/img_nav_offer_blue_gray_300.svg": "39a77d50c5e2c4f35b197a81a9c0f7cb",
"assets/assets/images/img_down_icon.svg": "12ba9c236ba19d31e74df010228a3d8b",
"assets/assets/images/img_dress_icon.svg": "63099fd1a4eec8e7d77ca5c672300abd",
"assets/assets/images/img_plus_icon.svg": "81d39bb7dad48b54664174d4a8e3e598",
"assets/assets/images/img_bank_icon.svg": "939045dd2e36f784f643dee0e1587685",
"assets/assets/images/img_list_icon.svg": "f4a2a0d9644b84a82ce793b3fb6f12f1",
"assets/assets/images/img_nav_offer.svg": "c1865994f9b56b0cd9e6a785e95f149d",
"assets/assets/images/img_man_underwear_icon.svg": "0d91e9cfc446fa70b1ba3203197bbf6f",
"assets/assets/images/img_date_icon.svg": "09ff69a22eef22d78d1184dec5245b4f",
"assets/assets/images/img_filter.svg": "e7b65ef70c53d961fe16cc8e69f5e193",
"assets/assets/images/img_user.svg": "c1bc748ebcd97aefa9e7288efd0a15a4",
"assets/assets/images/img_promotion_image.png": "082c61d46e8a768f5d871c52d7288aa7",
"assets/assets/images/img_paypal_icon.svg": "864091dad361b6bfc2d8f38cf8f140a2",
"assets/assets/images/img_right_icon.svg": "b4974636d3cef54db1d4dcf3ee45a6c4",
"assets/assets/images/img_close_onprimarycontainer.svg": "645d5a3e007cc2f8fed261fa5c132b8f",
"assets/assets/images/img_nav_home.svg": "4e6c7083721cea40c9d7d4a6144e66c6",
"assets/assets/images/img_love_icon_pink_300.svg": "746ee0ab9efce1e6b9b70789b2d6dea4",
"assets/assets/images/img_close_pink_300.svg": "20051e18d0fac779d52ad6289fb17455",
"assets/assets/images/img_clear_icon.svg": "f4a42ad3f424d1eb1fe1db19d6b1ac06",
"assets/assets/images/img_bikini_icon.svg": "579e0fb80e2153cd9fa231b3ffe03fe3",
"assets/assets/images/img_close.svg": "b76a52f9f2743d35f120c09db4a50286",
"assets/assets/images/img_man_t_shirt_icon.svg": "9062c5f9a6aa686dc8c799a1e538506d",
"assets/assets/images/img_woman_bag_icon.svg": "656c81f8be723670e428cddbe313e9d1",
"assets/assets/images/img_short_icon.svg": "8a85d826a8a343de017f5e921a405ecc",
"assets/assets/images/img_trash_icon.svg": "091b03dbf61be706f3a005ac390d9263",
"assets/assets/images/img_love_icon.svg": "710e325a39eea9e1cd8b2ab2e158aa2e",
"assets/assets/images/img_bag_icon.svg": "ee53ae680459826c392353cbb0a78c5e",
"assets/assets/images/img_sort.svg": "f85662cb7bfbefbf23433ab6d0f3906d",
"assets/assets/images/img_more_icon.svg": "873fd3f4484ff6fefc73cec2e0715532",
"assets/assets/images/img_user_blue_50.svg": "d23fd987d86de43782ba2f41f05779e1",
"assets/assets/images/img_high_heels_icon.svg": "f9185404f9c673da34c303bf53261021",
"assets/assets/images/img_nav_cart.svg": "1d87d011c7f5213555a80c79df7bc63d",
"assets/assets/images/img_checkmark.svg": "059b5f7157ae6cbdb1f79553d3b34f43",
"assets/assets/images/img_arrow_left.svg": "a7c374aad6f4b033b8421b6208f602bd",
"assets/assets/images/img_product_image_3.png": "e3ceb8addb38b61fb05d50ff99f5368b",
"assets/assets/images/img_product_image_2.png": "f230740a302af91e14fab2f890f0ee9e",
"assets/assets/images/img_mic_icon.svg": "518e4af95622af83b252119bf704861c",
"assets/assets/images/img_nav_explore.svg": "22ba7e6d1f814b8a0e9cbbb58ec04213",
"assets/assets/images/img_trophy.svg": "e0486ac87c36fb086f3a9eb4f9b249c4",
"assets/assets/images/img_product_image.png": "e9dc2535ef2fafbbb5b56cbc83a30354",
"assets/assets/images/img_gender_icon.svg": "89cdd3a3deda54d4096fc85cf3eae7d8",
"assets/assets/images/image_not_found.png": "a88029aaad6e6ea7596096c7c451840b",
"assets/assets/images/img_google_icon.svg": "80ee4234dddce7950e74c5be6c03510b",
"assets/assets/images/img_product_image_1.png": "9410cac30565c8eb9de62e762ae0b8d2",
"assets/assets/images/img_checkmark_blue_50.svg": "a9fc1870277ca932febcbd454533b496",
"assets/assets/images/img_image_product.png": "4e693488399a6dc73df3d19a0de56abd",
"assets/assets/images/img_arrow_right.svg": "35b60ea1d4920ad981bcdbe16d568659",
"assets/assets/images/img_location.svg": "e75c96a6fd845025b4b59f631b0411e5",
"assets/assets/images/img_product_image_4.png": "ebd078573d4c92ab973a34ada1a89810",
"assets/assets/images/img_man_shoes_icon.svg": "eb5ae22c1b2fcdcbabec8b3e864a1bad",
"assets/assets/images/img_product_image_133x133.png": "6fd033003ed31cbd17d2111e1cd81592",
"assets/assets/images/img_linkedin.svg": "27fe0c71d54e583dd5946db586fa9bcf",
"assets/assets/images/img_product_image_238x375.png": "8a114e2887230116068ca6e2d1797adb",
"assets/assets/images/img_recomended_product.png": "4608c28a4e75eecfc4eb08e30423ead4",
"assets/assets/images/img_group_475.svg": "d54fb9dfe51ace5878870c9bcaacdea1",
"assets/assets/images/img_profile_picture.png": "fa8fd04c27c853dd1945a46154ca2fed",
"assets/assets/images/img_nav_home_blue_gray_300.svg": "747938f77c649c1b0de2a3ce6727bb0a",
"assets/assets/images/img_logo.png": "e04e0e4de520eb6e03ff77ffbdc6c184",
"assets/assets/delivery.png": "2ef3098a2dc2288d69b848d759b4ab0d",
"assets/assets/service.png": "fcd92137ab3fa68318829cba9d5d7c9d",
"assets/assets/stock.png": "ada04a45d1c3e7bf42c7162a134940de",
"assets/assets/menu_home.png": "ab32dc0c5e2c6111a8a52bf7adf9655d",
"assets/assets/logout.png": "35264b1deabd8e5cdc0027fd684e692d",
"assets/assets/shopping.jpg": "1af90873a9dd1dcffa2020e29839b917",
"assets/assets/restaurant.png": "1e5dde243fa4d67a55de2827ee482bdb",
"assets/assets/sidebar_image.png": "254a7b607b593f00b011883a1e8ea4ff",
"assets/assets/home_ol.png": "1fd72a0b4ab396a013402e6f5a5bccd6",
"assets/assets/list.png": "03790461b90995caae075e1ea4a513af",
"assets/assets/search.png": "cacefd7d9d9dae0977ff022243433e8d",
"assets/assets/waiter.png": "7ac56e3daa0d29764dd84f4a43faf4ec",
"assets/assets/user1.jpg": "eb029339e3ec9e799f1f2afa2fd5c592",
"assets/assets/logo.png": "63fe6a08a3ef7867a7ae80809d4c99d1",
"assets/assets/manager.png": "10f11ff9f0736704f987a45d78ccf336",
"assets/assets/notification_image.png": "0d291870bd273d45bfc2811cddf7c107",
"assets/assets/qr_code.png": "a12e8645e7e977f6b022b28a8f44e195",
"assets/assets/menu_settings.png": "35c279ef9c74ceccda6a819f54a32969",
"assets/assets/lottie/not-found.json": "8eb6f0ac6614e38cf2cb8f66627ea08b",
"assets/assets/lottie/pin.json": "da97d19b9e7b840787c904544a9e9fed",
"assets/assets/lottie/refresh.json": "fe2c00d6c256e6e252be3a0d1c180767",
"assets/assets/lottie/restart.json": "6bd4fcf15f9a2a0eda4da9707071c0e6",
"assets/assets/phone.png": "0ae2f66e3ecf9b2e87b2a9aeb1a86422",
"assets/assets/hello_man.png": "7e8bb52baef069746801e93e34ad145f",
"assets/assets/categories.png": "5172786c0462c4cc407ac7bd647ed5a2",
"assets/assets/more.png": "48872501243cd173e89b04d1693ae5f2",
"assets/assets/fonts/Rajdhani/Rajdhani-SemiBold.ttf": "f63c2b055b95c371055b21296cbfef59",
"assets/assets/fonts/Rajdhani/Rajdhani-Light.ttf": "d81f6a473fc85da9e69f0737619596f0",
"assets/assets/fonts/Rajdhani/Rajdhani-Bold.ttf": "3d57d256f052ae2212fe1e0a50713adc",
"assets/assets/fonts/Rajdhani/Rajdhani-Regular.ttf": "fb987593d286bb6bd93d3de8457c5eb4",
"assets/assets/fonts/AppMaterialIcons.ttf": "a652200e4fa2836092e5a9bbb43062a3",
"assets/assets/fonts/LootdaIcons.ttf": "01b2905b09e96928558e7cfcdd9ebc50",
"assets/assets/fonts/montserrat/Montserrat-Light.ttf": "b9b6d65673dfc64d82318f5aa424c172",
"assets/assets/fonts/montserrat/Montserrat-SemiBold.ttf": "554de18f3ad743da92a97847ee89de78",
"assets/assets/fonts/montserrat/Montserrat-Regular.ttf": "9c46095118380d38f12e67c916b427f9",
"assets/assets/fonts/HellowcityIcons.ttf": "87b319cd5def425256d780cc1b86129d",
"assets/assets/round_logo.png": "07f37416cbde7e6997df4251170ef915",
"assets/assets/round_logo.jpg": "4697033a67537e033d4625751926e4f2",
"assets/assets/notification.png": "5aa78b73ecb35e0a3dcbd090163308dd",
"assets/assets/table.png": "167c7d1134033b71f2fc503905b01cb4",
"assets/assets/send.png": "1df0d1a089c1bee052ae276e864ccc06",
"assets/assets/people.png": "61d1794424b32d4d267e08a61b20a85a",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
