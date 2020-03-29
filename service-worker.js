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
    "url": "404.html",
    "revision": "e5cf0ad60a9937fe4f99cf83d4c5759b"
  },
  {
    "url": "assets/css/0.styles.a7c1ccb7.css",
    "revision": "02a0cdff8c18b7d0120be8aee6fcf10b"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.96706ba7.js",
    "revision": "5b222a8e29d31b45be2ff3efcbbf73b7"
  },
  {
    "url": "assets/js/11.9c479e9b.js",
    "revision": "f8ccd09385d021bdda99a552e7e58f6f"
  },
  {
    "url": "assets/js/12.5d9fc2f8.js",
    "revision": "ad2158434fb89a93427bb1f02a095584"
  },
  {
    "url": "assets/js/13.b277d387.js",
    "revision": "bc665a180de523bf04e8c0bac22a645f"
  },
  {
    "url": "assets/js/14.e4ec211f.js",
    "revision": "b9c69a169ec38bd450860fb737be0533"
  },
  {
    "url": "assets/js/15.ab6fe240.js",
    "revision": "eb53adc5416ac917a492149e7626532a"
  },
  {
    "url": "assets/js/16.8cbe5242.js",
    "revision": "032c013dbaaf958c5c09729acfce1373"
  },
  {
    "url": "assets/js/17.c076f36f.js",
    "revision": "66ce4c0ee0114ed134fb06365ed79394"
  },
  {
    "url": "assets/js/18.753aa5dc.js",
    "revision": "82620d0fb0804c03c89cc70f4f79b429"
  },
  {
    "url": "assets/js/19.1249ccc0.js",
    "revision": "939400963454b1f5099d08a3b8197e60"
  },
  {
    "url": "assets/js/20.c29711bf.js",
    "revision": "fe7baf877879db7601bd78dfbece7b13"
  },
  {
    "url": "assets/js/21.e85a1bad.js",
    "revision": "9a0806c5e62b71de1b479797094b0a56"
  },
  {
    "url": "assets/js/22.bd568f87.js",
    "revision": "4c18ed297dabe45b55ea0b27964277fa"
  },
  {
    "url": "assets/js/23.65c280f9.js",
    "revision": "7eed167adf881188ed148afb50a40e3c"
  },
  {
    "url": "assets/js/24.46947aec.js",
    "revision": "6f49ab1c34230da03eb4770b6e3d6d53"
  },
  {
    "url": "assets/js/25.d327b83a.js",
    "revision": "c0ad3f5f807f231e7464fcbe4899db32"
  },
  {
    "url": "assets/js/26.4bd7829a.js",
    "revision": "362a57aecb93495bd787da0100d1137c"
  },
  {
    "url": "assets/js/27.9e74fa80.js",
    "revision": "4c63d0e14d5365b84192a17f1c62e663"
  },
  {
    "url": "assets/js/28.db458359.js",
    "revision": "a4f436b7d554ad2b4f2b8af715a0a723"
  },
  {
    "url": "assets/js/29.7cf7cf7d.js",
    "revision": "85d21318de7e6cf8d5317000c0020772"
  },
  {
    "url": "assets/js/3.8eed32b7.js",
    "revision": "ff78f5ac518e1ea924b339393b89e18b"
  },
  {
    "url": "assets/js/30.3a16227c.js",
    "revision": "148ba067c274873352fc048d27c36bc1"
  },
  {
    "url": "assets/js/4.a0e75a3d.js",
    "revision": "b1930a3b89ce0a7f3b4734465641522d"
  },
  {
    "url": "assets/js/5.c4a8ee42.js",
    "revision": "ec850af706321bd26fc85ad096194a1f"
  },
  {
    "url": "assets/js/6.efbc9fd3.js",
    "revision": "c0488d6d506b37e2e1f468750604e8ea"
  },
  {
    "url": "assets/js/7.a091a6f6.js",
    "revision": "f3e1fb0250fc4d47681d1e3150493e8c"
  },
  {
    "url": "assets/js/8.c02ae17c.js",
    "revision": "62a0779f54a0476ee82b3074b73385da"
  },
  {
    "url": "assets/js/9.b88abad9.js",
    "revision": "4230236976990986d6736f9ffc4dfe8f"
  },
  {
    "url": "assets/js/app.05965553.js",
    "revision": "79d760c3ffb329430e9dd167d14c81a2"
  },
  {
    "url": "assets/js/vendors~notification.241402c3.js",
    "revision": "805674791258660334e65e8dacf35a0f"
  },
  {
    "url": "guide/alipay/extension.html",
    "revision": "d3dbf0af3093e77cb56c819e493ae0b0"
  },
  {
    "url": "guide/alipay/index.html",
    "revision": "3a0258fb9c609d6ed6ab10bbe059f290"
  },
  {
    "url": "guide/alipay/init.html",
    "revision": "d03a36c99b96eedb19ffd669cf0c8b56"
  },
  {
    "url": "guide/client/ios.html",
    "revision": "c7c69c97ab208eb0b1f319c662c4e93a"
  },
  {
    "url": "guide/client/jpay.html",
    "revision": "dad95effd49443180a85a4e1bee31f2b"
  },
  {
    "url": "guide/config/alipay_config.html",
    "revision": "7a672ce525c113fc65c21c9a92190d92"
  },
  {
    "url": "guide/config/weixinpay_config.html",
    "revision": "e5d2c5d6df69c5b642e792e399a6d393"
  },
  {
    "url": "guide/donate/index.html",
    "revision": "3fc4f9836638ece2766317c2e21688a3"
  },
  {
    "url": "guide/http.html",
    "revision": "2f40c3543bf792f06efadc892e49c519"
  },
  {
    "url": "guide/index.html",
    "revision": "c8bc09bac079b85642e61b9baf62e82c"
  },
  {
    "url": "guide/jdpay/index.html",
    "revision": "5fb9faef80e2803286cd0fa94d040a12"
  },
  {
    "url": "guide/maven.html",
    "revision": "fe35f8f96ead91238353db317bb015df"
  },
  {
    "url": "guide/qqpay/index.html",
    "revision": "5ff9d04edf171ffcaf065bf96ad9f6c7"
  },
  {
    "url": "guide/resource.html",
    "revision": "4e5251c89c7e133ab65cc999f9648ce5"
  },
  {
    "url": "guide/tools/frp/index.html",
    "revision": "301625db996e12bc0c21dbb06dd3f184"
  },
  {
    "url": "guide/unionpay/index.html",
    "revision": "d832460ab81ca3e8d657ecacee936a29"
  },
  {
    "url": "guide/weixin/tnwx.html",
    "revision": "f3f15b8da77e683993314961eabda22d"
  },
  {
    "url": "guide/weixin/weixin_guide.html",
    "revision": "c49d9190b9f074e0f0ef8f7a23a35b73"
  },
  {
    "url": "guide/wxpay/api-v3.html",
    "revision": "f8dbb30c130d9b2646187b452c638667"
  },
  {
    "url": "guide/wxpay/external.html",
    "revision": "2b06afbfba68e9c245cc22e78da08aa8"
  },
  {
    "url": "guide/wxpay/index.html",
    "revision": "3bb2e91ef042c2d682328ad3daf180c9"
  },
  {
    "url": "guide/wxpay/question.html",
    "revision": "941be21cdf14ce228e64011eaa14e91c"
  },
  {
    "url": "index.html",
    "revision": "3c902ca92471bf43a9bb205a3f3a72bd"
  },
  {
    "url": "wxpay.jpeg",
    "revision": "311a9f9b98f805954aeb9711c2b7959f"
  },
  {
    "url": "wxpay.png",
    "revision": "f8f237b08107f485bcb03b3937ec6a08"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
