// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aUdVe":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7d32f203cf23a97f";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"gCRej":[function(require,module,exports) {
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */ !function(t, e) {
    module.exports = e();
}(this, function() {
    "use strict";
    const t1 = "transitionend", e1 = (t)=>{
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let i = t.getAttribute("href");
            if (!i || !i.includes("#") && !i.startsWith(".")) return null;
            i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null;
        }
        return e;
    }, i1 = (t)=>{
        const i = e1(t);
        return i && document.querySelector(i) ? i : null;
    }, n1 = (t)=>{
        const i = e1(t);
        return i ? document.querySelector(i) : null;
    }, s1 = (e)=>{
        e.dispatchEvent(new Event(t1));
    }, o1 = (t)=>!(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType), r1 = (t)=>o1(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null, a1 = (t, e, i)=>{
        Object.keys(i).forEach((n)=>{
            const s = i[n], r = e[n], a = r && o1(r) ? "element" : null == (l = r) ? `${l}` : ({}).toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
            var l;
            if (!new RegExp(s).test(a)) throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`);
        });
    }, l1 = (t)=>!(!o1(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility"), c1 = (t)=>!t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")), h1 = (t)=>{
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null;
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? h1(t.parentNode) : null;
    }, d1 = ()=>{}, u1 = (t)=>{
        t.offsetHeight;
    }, f1 = ()=>{
        const { jQuery: t  } = window;
        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
    }, p1 = [], m1 = ()=>"rtl" === document.documentElement.dir, g1 = (t2)=>{
        var e2;
        e2 = ()=>{
            const e = f1();
            if (e) {
                const i = t2.NAME, n = e.fn[i];
                e.fn[i] = t2.jQueryInterface, e.fn[i].Constructor = t2, e.fn[i].noConflict = ()=>(e.fn[i] = n, t2.jQueryInterface);
            }
        }, "loading" === document.readyState ? (p1.length || document.addEventListener("DOMContentLoaded", ()=>{
            p1.forEach((t)=>t());
        }), p1.push(e2)) : e2();
    }, _1 = (t)=>{
        "function" == typeof t && t();
    }, b1 = (e3, i2, n2 = !0)=>{
        if (!n2) return void _1(e3);
        const o = ((t)=>{
            if (!t) return 0;
            let { transitionDuration: e , transitionDelay: i  } = window.getComputedStyle(t);
            const n = Number.parseFloat(e), s = Number.parseFloat(i);
            return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
        })(i2) + 5;
        let r = !1;
        const a = ({ target: n  })=>{
            n === i2 && (r = !0, i2.removeEventListener(t1, a), _1(e3));
        };
        i2.addEventListener(t1, a), setTimeout(()=>{
            r || s1(i2);
        }, o);
    }, v1 = (t, e, i, n)=>{
        let s = t.indexOf(e);
        if (-1 === s) return t[!i && n ? t.length - 1 : 0];
        const o = t.length;
        return s += i ? 1 : -1, n && (s = (s + o) % o), t[Math.max(0, Math.min(s, o - 1))];
    }, y1 = /[^.]*(?=\..*)\.|.*/, w1 = /\..*/, E1 = /::\d+$/, A1 = {};
    let T1 = 1;
    const O1 = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, C1 = /^(mouseenter|mouseleave)/i, k1 = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll"
    ]);
    function L1(t, e) {
        return e && `${e}::${T1++}` || t.uidEvent || T1++;
    }
    function x1(t) {
        const e = L1(t);
        return t.uidEvent = e, A1[e] = A1[e] || {}, A1[e];
    }
    function D1(t, e, i = null) {
        const n = Object.keys(t);
        for(let s = 0, o = n.length; s < o; s++){
            const o = t[n[s]];
            if (o.originalHandler === e && o.delegationSelector === i) return o;
        }
        return null;
    }
    function S1(t, e, i) {
        const n = "string" == typeof e, s = n ? i : e;
        let o = P1(t);
        return k1.has(o) || (o = t), [
            n,
            s,
            o
        ];
    }
    function N1(t4, e4, i3, n3, s2) {
        if ("string" != typeof e4 || !t4) return;
        if (i3 || (i3 = n3, n3 = null), C1.test(e4)) {
            const t3 = (t)=>function(e) {
                    if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
                };
            n3 ? n3 = t3(n3) : i3 = t3(i3);
        }
        const [o2, r2, a2] = S1(e4, i3, n3), l = x1(t4), c = l[a2] || (l[a2] = {}), h = D1(c, r2, o2 ? i3 : null);
        if (h) return void (h.oneOff = h.oneOff && s2);
        const d = L1(r2, e4.replace(y1, "")), u = o2 ? function(t, e, i) {
            return function n(s) {
                const o = t.querySelectorAll(e);
                for(let { target: r  } = s; r && r !== this; r = r.parentNode)for(let a = o.length; a--;)if (o[a] === r) return s.delegateTarget = r, n.oneOff && j1.off(t, s.type, e, i), i.apply(r, [
                    s
                ]);
                return null;
            };
        }(t4, i3, n3) : function(t, e) {
            return function i(n) {
                return n.delegateTarget = t, i.oneOff && j1.off(t, n.type, e), e.apply(t, [
                    n
                ]);
            };
        }(t4, i3);
        u.delegationSelector = o2 ? i3 : null, u.originalHandler = r2, u.oneOff = s2, u.uidEvent = d, c[d] = u, t4.addEventListener(a2, u, o2);
    }
    function I1(t, e, i, n, s) {
        const o = D1(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
    }
    function P1(t) {
        return t = t.replace(w1, ""), O1[t] || t;
    }
    const j1 = {
        on (t, e, i, n) {
            N1(t, e, i, n, !1);
        },
        one (t, e, i, n) {
            N1(t, e, i, n, !0);
        },
        off (t5, e5, i4, n4) {
            if ("string" != typeof e5 || !t5) return;
            const [s3, o3, r] = S1(e5, i4, n4), a = r !== e5, l = x1(t5), c = e5.startsWith(".");
            if (void 0 !== o3) {
                if (!l || !l[r]) return;
                return void I1(t5, l, r, o3, s3 ? i4 : null);
            }
            c && Object.keys(l).forEach((i5)=>{
                !function(t, e, i, n5) {
                    const s = e[i] || {};
                    Object.keys(s).forEach((o)=>{
                        if (o.includes(n5)) {
                            const n = s[o];
                            I1(t, e, i, n.originalHandler, n.delegationSelector);
                        }
                    });
                }(t5, l, i5, e5.slice(1));
            });
            const h = l[r] || {};
            Object.keys(h).forEach((i)=>{
                const n = i.replace(E1, "");
                if (!a || e5.includes(n)) {
                    const e = h[i];
                    I1(t5, l, r, e.originalHandler, e.delegationSelector);
                }
            });
        },
        trigger (t6, e, i) {
            if ("string" != typeof e || !t6) return null;
            const n = f1(), s = P1(e), o = e !== s, r = k1.has(s);
            let a, l = !0, c = !0, h = !1, d = null;
            return o && n && (a = n.Event(e, i), n(t6).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(s, l, !0)) : d = new CustomEvent(e, {
                bubbles: l,
                cancelable: !0
            }), void 0 !== i && Object.keys(i).forEach((t)=>{
                Object.defineProperty(d, t, {
                    get: ()=>i[t]
                });
            }), h && d.preventDefault(), c && t6.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d;
        }
    }, M1 = new Map, H1 = {
        set (t, e, i) {
            M1.has(t) || M1.set(t, new Map);
            const n = M1.get(t);
            n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);
        },
        get: (t, e)=>M1.has(t) && M1.get(t).get(e) || null,
        remove (t, e) {
            if (!M1.has(t)) return;
            const i = M1.get(t);
            i.delete(e), 0 === i.size && M1.delete(t);
        }
    };
    class B1 {
        constructor(t){
            (t = r1(t)) && (this._element = t, H1.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            H1.remove(this._element, this.constructor.DATA_KEY), j1.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t)=>{
                this[t] = null;
            });
        }
        _queueCallback(t, e, i = !0) {
            b1(t, e, i);
        }
        static getInstance(t) {
            return H1.get(r1(t), this.DATA_KEY);
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null);
        }
        static get VERSION() {
            return "5.1.3";
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
        }
    }
    const R1 = (t, e = "hide")=>{
        const i6 = `click.dismiss${t.EVENT_KEY}`, s = t.NAME;
        j1.on(document, i6, `[data-bs-dismiss="${s}"]`, function(i) {
            if ([
                "A",
                "AREA"
            ].includes(this.tagName) && i.preventDefault(), c1(this)) return;
            const o = n1(this) || this.closest(`.${s}`);
            t.getOrCreateInstance(o)[e]();
        });
    };
    class W1 extends B1 {
        static get NAME() {
            return "alert";
        }
        close() {
            if (j1.trigger(this._element, "close.bs.alert").defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback(()=>this._destroyElement(), this._element, t);
        }
        _destroyElement() {
            this._element.remove(), j1.trigger(this._element, "closed.bs.alert"), this.dispose();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = W1.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    R1(W1, "close"), g1(W1);
    const $1 = '[data-bs-toggle="button"]';
    class z1 extends B1 {
        static get NAME() {
            return "button";
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = z1.getOrCreateInstance(this);
                "toggle" === t && e[t]();
            });
        }
    }
    function q1(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
    }
    function F1(t7) {
        return t7.replace(/[A-Z]/g, (t)=>`-${t.toLowerCase()}`);
    }
    j1.on(document, "click.bs.button.data-api", $1, (t)=>{
        t.preventDefault();
        const e = t.target.closest($1);
        z1.getOrCreateInstance(e).toggle();
    }), g1(z1);
    const U1 = {
        setDataAttribute (t, e, i) {
            t.setAttribute(`data-bs-${F1(e)}`, i);
        },
        removeDataAttribute (t, e) {
            t.removeAttribute(`data-bs-${F1(e)}`);
        },
        getDataAttributes (t8) {
            if (!t8) return {};
            const e = {};
            return Object.keys(t8.dataset).filter((t)=>t.startsWith("bs")).forEach((i)=>{
                let n = i.replace(/^bs/, "");
                n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = q1(t8.dataset[i]);
            }), e;
        },
        getDataAttribute: (t, e)=>q1(t.getAttribute(`data-bs-${F1(e)}`)),
        offset (t) {
            const e = t.getBoundingClientRect();
            return {
                top: e.top + window.pageYOffset,
                left: e.left + window.pageXOffset
            };
        },
        position: (t)=>({
                top: t.offsetTop,
                left: t.offsetLeft
            })
    }, V1 = {
        find: (t, e = document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t, e = document.documentElement)=>Element.prototype.querySelector.call(e, t),
        children: (t9, e)=>[].concat(...t9.children).filter((t)=>t.matches(e)),
        parents (t, e) {
            const i = [];
            let n = t.parentNode;
            for(; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;)n.matches(e) && i.push(n), n = n.parentNode;
            return i;
        },
        prev (t, e) {
            let i = t.previousElementSibling;
            for(; i;){
                if (i.matches(e)) return [
                    i
                ];
                i = i.previousElementSibling;
            }
            return [];
        },
        next (t, e) {
            let i = t.nextElementSibling;
            for(; i;){
                if (i.matches(e)) return [
                    i
                ];
                i = i.nextElementSibling;
            }
            return [];
        },
        focusableChildren (t10) {
            const e = [
                "a",
                "button",
                "input",
                "textarea",
                "select",
                "details",
                "[tabindex]",
                '[contenteditable="true"]'
            ].map((t)=>`${t}:not([tabindex^="-"])`).join(", ");
            return this.find(e, t10).filter((t)=>!c1(t) && l1(t));
        }
    }, K1 = "carousel", X1 = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }, Y1 = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }, Q1 = "next", G1 = "prev", Z1 = "left", J1 = "right", tt1 = {
        ArrowLeft: J1,
        ArrowRight: Z1
    }, et1 = "slid.bs.carousel", it = "active", nt = ".active.carousel-item";
    class st extends B1 {
        constructor(t, e){
            super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = V1.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners();
        }
        static get Default() {
            return X1;
        }
        static get NAME() {
            return K1;
        }
        next() {
            this._slide(Q1);
        }
        nextWhenVisible() {
            !document.hidden && l1(this._element) && this.next();
        }
        prev() {
            this._slide(G1);
        }
        pause(t) {
            t || (this._isPaused = !0), V1.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (s1(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
        }
        cycle(t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
        }
        to(t) {
            this._activeElement = V1.findOne(nt, this._element);
            const e = this._getItemIndex(this._activeElement);
            if (t > this._items.length - 1 || t < 0) return;
            if (this._isSliding) return void j1.one(this._element, et1, ()=>this.to(t));
            if (e === t) return this.pause(), void this.cycle();
            const i = t > e ? Q1 : G1;
            this._slide(i, this._items[t]);
        }
        _getConfig(t) {
            return t = {
                ...X1,
                ...U1.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            }, a1(K1, t, Y1), t;
        }
        _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= 40) return;
            const e = t / this.touchDeltaX;
            this.touchDeltaX = 0, e && this._slide(e > 0 ? J1 : Z1);
        }
        _addEventListeners() {
            this._config.keyboard && j1.on(this._element, "keydown.bs.carousel", (t)=>this._keydown(t)), "hover" === this._config.pause && (j1.on(this._element, "mouseenter.bs.carousel", (t)=>this.pause(t)), j1.on(this._element, "mouseleave.bs.carousel", (t)=>this.cycle(t))), this._config.touch && this._touchSupported && this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            const t11 = (t)=>this._pointerEvent && ("pen" === t.pointerType || "touch" === t.pointerType), e6 = (e)=>{
                t11(e) ? this.touchStartX = e.clientX : this._pointerEvent || (this.touchStartX = e.touches[0].clientX);
            }, i = (t)=>{
                this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX;
            }, n = (e)=>{
                t11(e) && (this.touchDeltaX = e.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((t)=>this.cycle(t), 500 + this._config.interval));
            };
            V1.find(".carousel-item img", this._element).forEach((t12)=>{
                j1.on(t12, "dragstart.bs.carousel", (t)=>t.preventDefault());
            }), this._pointerEvent ? (j1.on(this._element, "pointerdown.bs.carousel", (t)=>e6(t)), j1.on(this._element, "pointerup.bs.carousel", (t)=>n(t)), this._element.classList.add("pointer-event")) : (j1.on(this._element, "touchstart.bs.carousel", (t)=>e6(t)), j1.on(this._element, "touchmove.bs.carousel", (t)=>i(t)), j1.on(this._element, "touchend.bs.carousel", (t)=>n(t)));
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = tt1[t.key];
            e && (t.preventDefault(), this._slide(e));
        }
        _getItemIndex(t) {
            return this._items = t && t.parentNode ? V1.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t);
        }
        _getItemByOrder(t, e) {
            const i = t === Q1;
            return v1(this._items, e, i, this._config.wrap);
        }
        _triggerSlideEvent(t, e) {
            const i = this._getItemIndex(t), n = this._getItemIndex(V1.findOne(nt, this._element));
            return j1.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: t,
                direction: e,
                from: n,
                to: i
            });
        }
        _setActiveIndicatorElement(t) {
            if (this._indicatorsElement) {
                const e = V1.findOne(".active", this._indicatorsElement);
                e.classList.remove(it), e.removeAttribute("aria-current");
                const i = V1.find("[data-bs-target]", this._indicatorsElement);
                for(let e7 = 0; e7 < i.length; e7++)if (Number.parseInt(i[e7].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                    i[e7].classList.add(it), i[e7].setAttribute("aria-current", "true");
                    break;
                }
            }
        }
        _updateInterval() {
            const t = this._activeElement || V1.findOne(nt, this._element);
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
        }
        _slide(t, e) {
            const i = this._directionToOrder(t), n = V1.findOne(nt, this._element), s = this._getItemIndex(n), o = e || this._getItemByOrder(i, n), r = this._getItemIndex(o), a = Boolean(this._interval), l = i === Q1, c = l ? "carousel-item-start" : "carousel-item-end", h = l ? "carousel-item-next" : "carousel-item-prev", d = this._orderToDirection(i);
            if (o && o.classList.contains(it)) return void (this._isSliding = !1);
            if (this._isSliding) return;
            if (this._triggerSlideEvent(o, d).defaultPrevented) return;
            if (!n || !o) return;
            this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;
            const f = ()=>{
                j1.trigger(this._element, et1, {
                    relatedTarget: o,
                    direction: d,
                    from: s,
                    to: r
                });
            };
            if (this._element.classList.contains("slide")) {
                o.classList.add(h), u1(o), n.classList.add(c), o.classList.add(c);
                const t = ()=>{
                    o.classList.remove(c, h), o.classList.add(it), n.classList.remove(it, h, c), this._isSliding = !1, setTimeout(f, 0);
                };
                this._queueCallback(t, n, !0);
            } else n.classList.remove(it), o.classList.add(it), this._isSliding = !1, f();
            a && this.cycle();
        }
        _directionToOrder(t) {
            return [
                J1,
                Z1
            ].includes(t) ? m1() ? t === Z1 ? G1 : Q1 : t === Z1 ? Q1 : G1 : t;
        }
        _orderToDirection(t) {
            return [
                Q1,
                G1
            ].includes(t) ? m1() ? t === G1 ? Z1 : J1 : t === G1 ? J1 : Z1 : t;
        }
        static carouselInterface(t, e) {
            const i = st.getOrCreateInstance(t, e);
            let { _config: n  } = i;
            "object" == typeof e && (n = {
                ...n,
                ...e
            });
            const s = "string" == typeof e ? e : n.slide;
            if ("number" == typeof e) i.to(e);
            else if ("string" == typeof s) {
                if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
                i[s]();
            } else n.interval && n.ride && (i.pause(), i.cycle());
        }
        static jQueryInterface(t) {
            return this.each(function() {
                st.carouselInterface(this, t);
            });
        }
        static dataApiClickHandler(t) {
            const e = n1(this);
            if (!e || !e.classList.contains("carousel")) return;
            const i = {
                ...U1.getDataAttributes(e),
                ...U1.getDataAttributes(this)
            }, s = this.getAttribute("data-bs-slide-to");
            s && (i.interval = !1), st.carouselInterface(e, i), s && st.getInstance(e).to(s), t.preventDefault();
        }
    }
    j1.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", st.dataApiClickHandler), j1.on(window, "load.bs.carousel.data-api", ()=>{
        const t = V1.find('[data-bs-ride="carousel"]');
        for(let e = 0, i = t.length; e < i; e++)st.carouselInterface(t[e], st.getInstance(t[e]));
    }), g1(st);
    const ot = "collapse", rt = {
        toggle: !0,
        parent: null
    }, at = {
        toggle: "boolean",
        parent: "(null|element)"
    }, lt = "show", ct = "collapse", ht = "collapsing", dt = "collapsed", ut = ":scope .collapse .collapse", ft = '[data-bs-toggle="collapse"]';
    class pt extends B1 {
        constructor(t14, e){
            super(t14), this._isTransitioning = !1, this._config = this._getConfig(e), this._triggerArray = [];
            const n = V1.find(ft);
            for(let t13 = 0, e8 = n.length; t13 < e8; t13++){
                const e = n[t13], s = i1(e), o = V1.find(s).filter((t)=>t === this._element);
                null !== s && o.length && (this._selector = s, this._triggerArray.push(e));
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
        }
        static get Default() {
            return rt;
        }
        static get NAME() {
            return ot;
        }
        toggle() {
            this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t15, e9 = [];
            if (this._config.parent) {
                const t = V1.find(ut, this._config.parent);
                e9 = V1.find(".collapse.show, .collapse.collapsing", this._config.parent).filter((e)=>!t.includes(e));
            }
            const i = V1.findOne(this._selector);
            if (e9.length) {
                const n = e9.find((t)=>i !== t);
                if (t15 = n ? pt.getInstance(n) : null, t15 && t15._isTransitioning) return;
            }
            if (j1.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            e9.forEach((e)=>{
                i !== e && pt.getOrCreateInstance(e, {
                    toggle: !1
                }).hide(), t15 || H1.set(e, "bs.collapse", null);
            });
            const n = this._getDimension();
            this._element.classList.remove(ct), this._element.classList.add(ht), this._element.style[n] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const s = `scroll${n[0].toUpperCase() + n.slice(1)}`;
            this._queueCallback(()=>{
                this._isTransitioning = !1, this._element.classList.remove(ht), this._element.classList.add(ct, lt), this._element.style[n] = "", j1.trigger(this._element, "shown.bs.collapse");
            }, this._element, !0), this._element.style[n] = `${this._element[s]}px`;
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (j1.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, u1(this._element), this._element.classList.add(ht), this._element.classList.remove(ct, lt);
            const e = this._triggerArray.length;
            for(let t16 = 0; t16 < e; t16++){
                const e = this._triggerArray[t16], i = n1(e);
                i && !this._isShown(i) && this._addAriaAndCollapsedClass([
                    e
                ], !1);
            }
            this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(()=>{
                this._isTransitioning = !1, this._element.classList.remove(ht), this._element.classList.add(ct), j1.trigger(this._element, "hidden.bs.collapse");
            }, this._element, !0);
        }
        _isShown(t = this._element) {
            return t.classList.contains(lt);
        }
        _getConfig(t) {
            return (t = {
                ...rt,
                ...U1.getDataAttributes(this._element),
                ...t
            }).toggle = Boolean(t.toggle), t.parent = r1(t.parent), a1(ot, t, at), t;
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t17 = V1.find(ut, this._config.parent);
            V1.find(ft, this._config.parent).filter((e)=>!t17.includes(e)).forEach((t)=>{
                const e = n1(t);
                e && this._addAriaAndCollapsedClass([
                    t
                ], this._isShown(e));
            });
        }
        _addAriaAndCollapsedClass(t18, e) {
            t18.length && t18.forEach((t)=>{
                e ? t.classList.remove(dt) : t.classList.add(dt), t.setAttribute("aria-expanded", e);
            });
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = {};
                "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
                const i = pt.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t]();
                }
            });
        }
    }
    j1.on(document, "click.bs.collapse.data-api", ft, function(t19) {
        ("A" === t19.target.tagName || t19.delegateTarget && "A" === t19.delegateTarget.tagName) && t19.preventDefault();
        const e = i1(this);
        V1.find(e).forEach((t)=>{
            pt.getOrCreateInstance(t, {
                toggle: !1
            }).toggle();
        });
    }), g1(pt);
    var mt = "top", gt = "bottom", _t = "right", bt = "left", vt = "auto", yt = [
        mt,
        gt,
        _t,
        bt
    ], wt = "start", Et = "end", At = "clippingParents", Tt = "viewport", Ot = "popper", Ct = "reference", kt = yt.reduce(function(t, e) {
        return t.concat([
            e + "-" + wt,
            e + "-" + Et
        ]);
    }, []), Lt = [].concat(yt, [
        vt
    ]).reduce(function(t, e) {
        return t.concat([
            e,
            e + "-" + wt,
            e + "-" + Et
        ]);
    }, []), xt = "beforeRead", Dt = "read", St = "afterRead", Nt = "beforeMain", It = "main", Pt = "afterMain", jt = "beforeWrite", Mt = "write", Ht = "afterWrite", Bt = [
        xt,
        Dt,
        St,
        Nt,
        It,
        Pt,
        jt,
        Mt,
        Ht
    ];
    function Rt(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
    }
    function Wt(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window;
        }
        return t;
    }
    function $t(t) {
        return t instanceof Wt(t).Element || t instanceof Element;
    }
    function zt(t) {
        return t instanceof Wt(t).HTMLElement || t instanceof HTMLElement;
    }
    function qt(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof Wt(t).ShadowRoot || t instanceof ShadowRoot);
    }
    const Ft = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t20) {
            var e10 = t20.state;
            Object.keys(e10.elements).forEach(function(t21) {
                var i = e10.styles[t21] || {}, n = e10.attributes[t21] || {}, s = e10.elements[t21];
                zt(s) && Rt(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function(t) {
                    var e = n[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
                }));
            });
        },
        effect: function(t22) {
            var e11 = t22.state, i = {
                popper: {
                    position: e11.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(e11.elements.popper.style, i.popper), e11.styles = i, e11.elements.arrow && Object.assign(e11.elements.arrow.style, i.arrow), function() {
                Object.keys(e11.elements).forEach(function(t23) {
                    var n = e11.elements[t23], s = e11.attributes[t23] || {}, o = Object.keys(e11.styles.hasOwnProperty(t23) ? e11.styles[t23] : i[t23]).reduce(function(t, e) {
                        return t[e] = "", t;
                    }, {});
                    zt(n) && Rt(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function(t) {
                        n.removeAttribute(t);
                    }));
                });
            };
        },
        requires: [
            "computeStyles"
        ]
    };
    function Ut(t) {
        return t.split("-")[0];
    }
    function Vt(t, e) {
        var i = t.getBoundingClientRect();
        return {
            width: i.width / 1,
            height: i.height / 1,
            top: i.top / 1,
            right: i.right / 1,
            bottom: i.bottom / 1,
            left: i.left / 1,
            x: i.left / 1,
            y: i.top / 1
        };
    }
    function Kt(t) {
        var e = Vt(t), i = t.offsetWidth, n = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: n
        };
    }
    function Xt(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && qt(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host;
            }while (n);
        }
        return !1;
    }
    function Yt(t) {
        return Wt(t).getComputedStyle(t);
    }
    function Qt(t) {
        return [
            "table",
            "td",
            "th"
        ].indexOf(Rt(t)) >= 0;
    }
    function Gt(t) {
        return (($t(t) ? t.ownerDocument : t.document) || window.document).documentElement;
    }
    function Zt(t) {
        return "html" === Rt(t) ? t : t.assignedSlot || t.parentNode || (qt(t) ? t.host : null) || Gt(t);
    }
    function Jt(t) {
        return zt(t) && "fixed" !== Yt(t).position ? t.offsetParent : null;
    }
    function te(t24) {
        for(var e12 = Wt(t24), i7 = Jt(t24); i7 && Qt(i7) && "static" === Yt(i7).position;)i7 = Jt(i7);
        return i7 && ("html" === Rt(i7) || "body" === Rt(i7) && "static" === Yt(i7).position) ? e12 : i7 || function(t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (-1 !== navigator.userAgent.indexOf("Trident") && zt(t) && "fixed" === Yt(t).position) return null;
            for(var i = Zt(t); zt(i) && [
                "html",
                "body"
            ].indexOf(Rt(i)) < 0;){
                var n = Yt(i);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== [
                    "transform",
                    "perspective"
                ].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                i = i.parentNode;
            }
            return null;
        }(t24) || e12;
    }
    function ee(t) {
        return [
            "top",
            "bottom"
        ].indexOf(t) >= 0 ? "x" : "y";
    }
    var ie = Math.max, ne = Math.min, se = Math.round;
    function oe(t, e, i) {
        return ie(t, ne(e, i));
    }
    function re(t) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t);
    }
    function ae(t, e13) {
        return e13.reduce(function(e, i) {
            return e[i] = t, e;
        }, {});
    }
    const le = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t25) {
            var e14, i = t25.state, n = t25.name, s = t25.options, o = i.elements.arrow, r = i.modifiersData.popperOffsets, a = Ut(i.placement), l = ee(a), c = [
                bt,
                _t
            ].indexOf(a) >= 0 ? "height" : "width";
            if (o && r) {
                var h = function(t, e) {
                    return re("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                        placement: e.placement
                    })) : t) ? t : ae(t, yt));
                }(s.padding, i), d = Kt(o), u = "y" === l ? mt : bt, f = "y" === l ? gt : _t, p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c], m = r[l] - i.rects.reference[l], g = te(o), _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0, b = p / 2 - m / 2, v = h[u], y = _ - d[c] - h[f], w = _ / 2 - d[c] / 2 + b, E = oe(v, w, y), A = l;
                i.modifiersData[n] = ((e14 = {})[A] = E, e14.centerOffset = E - w, e14);
            }
        },
        effect: function(t) {
            var e = t.state, i = t.options.element, n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Xt(e.elements.popper, n) && (e.elements.arrow = n);
        },
        requires: [
            "popperOffsets"
        ],
        requiresIfExists: [
            "preventOverflow"
        ]
    };
    function ce(t) {
        return t.split("-")[1];
    }
    var he = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function de(t26) {
        var e15, i8 = t26.popper, n6 = t26.popperRect, s = t26.placement, o = t26.variation, r = t26.offsets, a = t26.position, l = t26.gpuAcceleration, c = t26.adaptive, h = t26.roundOffsets, d = !0 === h ? function(t) {
            var e = t.x, i = t.y, n = window.devicePixelRatio || 1;
            return {
                x: se(se(e * n) / n) || 0,
                y: se(se(i * n) / n) || 0
            };
        }(r) : "function" == typeof h ? h(r) : r, u = d.x, f = void 0 === u ? 0 : u, p = d.y, m = void 0 === p ? 0 : p, g = r.hasOwnProperty("x"), _ = r.hasOwnProperty("y"), b = bt, v = mt, y = window;
        if (c) {
            var w = te(i8), E = "clientHeight", A = "clientWidth";
            w === Wt(i8) && "static" !== Yt(w = Gt(i8)).position && "absolute" === a && (E = "scrollHeight", A = "scrollWidth"), w, s !== mt && (s !== bt && s !== _t || o !== Et) || (v = gt, m -= w[E] - n6.height, m *= l ? 1 : -1), s !== bt && (s !== mt && s !== gt || o !== Et) || (b = _t, f -= w[A] - n6.width, f *= l ? 1 : -1);
        }
        var T, O = Object.assign({
            position: a
        }, c && he);
        return l ? Object.assign({}, O, ((T = {})[v] = _ ? "0" : "", T[b] = g ? "0" : "", T.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", T)) : Object.assign({}, O, ((e15 = {})[v] = _ ? m + "px" : "", e15[b] = g ? f + "px" : "", e15.transform = "", e15));
    }
    const ue = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state, i = t.options, n = i.gpuAcceleration, s = void 0 === n || n, o = i.adaptive, r = void 0 === o || o, a = i.roundOffsets, l = void 0 === a || a, c = {
                placement: Ut(e.placement),
                variation: ce(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: s
            };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, de(Object.assign({}, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: l
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, de(Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement
            });
        },
        data: {}
    };
    var fe = {
        passive: !0
    };
    const pe = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(t27) {
            var e = t27.state, i = t27.instance, n = t27.options, s = n.scroll, o = void 0 === s || s, r = n.resize, a = void 0 === r || r, l = Wt(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return o && c.forEach(function(t) {
                t.addEventListener("scroll", i.update, fe);
            }), a && l.addEventListener("resize", i.update, fe), function() {
                o && c.forEach(function(t) {
                    t.removeEventListener("scroll", i.update, fe);
                }), a && l.removeEventListener("resize", i.update, fe);
            };
        },
        data: {}
    };
    var me = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function ge(t28) {
        return t28.replace(/left|right|bottom|top/g, function(t) {
            return me[t];
        });
    }
    var _e = {
        start: "end",
        end: "start"
    };
    function be(t29) {
        return t29.replace(/start|end/g, function(t) {
            return _e[t];
        });
    }
    function ve(t) {
        var e = Wt(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        };
    }
    function ye(t) {
        return Vt(Gt(t)).left + ve(t).scrollLeft;
    }
    function we(t) {
        var e = Yt(t), i = e.overflow, n = e.overflowX, s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n);
    }
    function Ee(t) {
        return [
            "html",
            "body",
            "#document"
        ].indexOf(Rt(t)) >= 0 ? t.ownerDocument.body : zt(t) && we(t) ? t : Ee(Zt(t));
    }
    function Ae(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = Ee(t), s = n === (null == (i = t.ownerDocument) ? void 0 : i.body), o = Wt(n), r = s ? [
            o
        ].concat(o.visualViewport || [], we(n) ? n : []) : n, a = e.concat(r);
        return s ? a : a.concat(Ae(Zt(r)));
    }
    function Te(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        });
    }
    function Oe(t30, e16) {
        return e16 === Tt ? Te(function(t) {
            var e = Wt(t), i = Gt(t), n = e.visualViewport, s = i.clientWidth, o = i.clientHeight, r = 0, a = 0;
            return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
                width: s,
                height: o,
                x: r + ye(t),
                y: a
            };
        }(t30)) : zt(e16) ? function(t) {
            var e = Vt(t);
            return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
        }(e16) : Te(function(t) {
            var e, i = Gt(t), n = ve(t), s = null == (e = t.ownerDocument) ? void 0 : e.body, o = ie(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), r = ie(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -n.scrollLeft + ye(t), l = -n.scrollTop;
            return "rtl" === Yt(s || i).direction && (a += ie(i.clientWidth, s ? s.clientWidth : 0) - o), {
                width: o,
                height: r,
                x: a,
                y: l
            };
        }(Gt(t30)));
    }
    function Ce(t) {
        var e, i = t.reference, n = t.element, s = t.placement, o = s ? Ut(s) : null, r = s ? ce(s) : null, a = i.x + i.width / 2 - n.width / 2, l = i.y + i.height / 2 - n.height / 2;
        switch(o){
            case mt:
                e = {
                    x: a,
                    y: i.y - n.height
                };
                break;
            case gt:
                e = {
                    x: a,
                    y: i.y + i.height
                };
                break;
            case _t:
                e = {
                    x: i.x + i.width,
                    y: l
                };
                break;
            case bt:
                e = {
                    x: i.x - n.width,
                    y: l
                };
                break;
            default:
                e = {
                    x: i.x,
                    y: i.y
                };
        }
        var c = o ? ee(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch(r){
                case wt:
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case Et:
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2);
            }
        }
        return e;
    }
    function ke(t31, e17) {
        void 0 === e17 && (e17 = {});
        var i9 = e17, n7 = i9.placement, s4 = void 0 === n7 ? t31.placement : n7, o4 = i9.boundary, r3 = void 0 === o4 ? At : o4, a = i9.rootBoundary, l = void 0 === a ? Tt : a, c = i9.elementContext, h = void 0 === c ? Ot : c, d = i9.altBoundary, u = void 0 !== d && d, f = i9.padding, p = void 0 === f ? 0 : f, m = re("number" != typeof p ? p : ae(p, yt)), g = h === Ot ? Ct : Ot, _ = t31.rects.popper, b = t31.elements[u ? g : h], v = function(t32, e18, i10) {
            var n8 = "clippingParents" === e18 ? function(t33) {
                var e = Ae(Zt(t33)), i = [
                    "absolute",
                    "fixed"
                ].indexOf(Yt(t33).position) >= 0 && zt(t33) ? te(t33) : t33;
                return $t(i) ? e.filter(function(t) {
                    return $t(t) && Xt(t, i) && "body" !== Rt(t);
                }) : [];
            }(t32) : [].concat(e18), s = [].concat(n8, [
                i10
            ]), o = s[0], r = s.reduce(function(e, i) {
                var n = Oe(t32, i);
                return e.top = ie(n.top, e.top), e.right = ne(n.right, e.right), e.bottom = ne(n.bottom, e.bottom), e.left = ie(n.left, e.left), e;
            }, Oe(t32, o));
            return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
        }($t(b) ? b : b.contextElement || Gt(t31.elements.popper), r3, l), y = Vt(t31.elements.reference), w = Ce({
            reference: y,
            element: _,
            strategy: "absolute",
            placement: s4
        }), E = Te(Object.assign({}, _, w)), A = h === Ot ? E : y, T = {
            top: v.top - A.top + m.top,
            bottom: A.bottom - v.bottom + m.bottom,
            left: v.left - A.left + m.left,
            right: A.right - v.right + m.right
        }, O = t31.modifiersData.offset;
        if (h === Ot && O) {
            var C = O[s4];
            Object.keys(T).forEach(function(t) {
                var e = [
                    _t,
                    gt
                ].indexOf(t) >= 0 ? 1 : -1, i = [
                    mt,
                    gt
                ].indexOf(t) >= 0 ? "y" : "x";
                T[t] += C[i] * e;
            });
        }
        return T;
    }
    function Le(t34, e19) {
        void 0 === e19 && (e19 = {});
        var i11 = e19, n = i11.placement, s = i11.boundary, o = i11.rootBoundary, r = i11.padding, a = i11.flipVariations, l = i11.allowedAutoPlacements, c = void 0 === l ? Lt : l, h = ce(n), d = h ? a ? kt : kt.filter(function(t) {
            return ce(t) === h;
        }) : yt, u = d.filter(function(t) {
            return c.indexOf(t) >= 0;
        });
        0 === u.length && (u = d);
        var f = u.reduce(function(e, i) {
            return e[i] = ke(t34, {
                placement: i,
                boundary: s,
                rootBoundary: o,
                padding: r
            })[Ut(i)], e;
        }, {});
        return Object.keys(f).sort(function(t, e) {
            return f[t] - f[e];
        });
    }
    const xe = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t35) {
            var e20 = t35.state, i12 = t35.options, n = t35.name;
            if (!e20.modifiersData[n]._skip) {
                for(var s = i12.mainAxis, o = void 0 === s || s, r = i12.altAxis, a = void 0 === r || r, l = i12.fallbackPlacements, c = i12.padding, h = i12.boundary, d = i12.rootBoundary, u = i12.altBoundary, f = i12.flipVariations, p = void 0 === f || f, m = i12.allowedAutoPlacements, g = e20.options.placement, _ = Ut(g), b = l || (_ !== g && p ? function(t) {
                    if (Ut(t) === vt) return [];
                    var e = ge(t);
                    return [
                        be(t),
                        e,
                        be(e)
                    ];
                }(g) : [
                    ge(g)
                ]), v = [
                    g
                ].concat(b).reduce(function(t, i) {
                    return t.concat(Ut(i) === vt ? Le(e20, {
                        placement: i,
                        boundary: h,
                        rootBoundary: d,
                        padding: c,
                        flipVariations: p,
                        allowedAutoPlacements: m
                    }) : i);
                }, []), y = e20.rects.reference, w = e20.rects.popper, E = new Map, A = !0, T = v[0], O = 0; O < v.length; O++){
                    var C = v[O], k = Ut(C), L = ce(C) === wt, x = [
                        mt,
                        gt
                    ].indexOf(k) >= 0, D = x ? "width" : "height", S = ke(e20, {
                        placement: C,
                        boundary: h,
                        rootBoundary: d,
                        altBoundary: u,
                        padding: c
                    }), N = x ? L ? _t : bt : L ? gt : mt;
                    y[D] > w[D] && (N = ge(N));
                    var I = ge(N), P = [];
                    if (o && P.push(S[k] <= 0), a && P.push(S[N] <= 0, S[I] <= 0), P.every(function(t) {
                        return t;
                    })) {
                        T = C, A = !1;
                        break;
                    }
                    E.set(C, P);
                }
                if (A) for(var j = function(t36) {
                    var e21 = v.find(function(e) {
                        var i = E.get(e);
                        if (i) return i.slice(0, t36).every(function(t) {
                            return t;
                        });
                    });
                    if (e21) return T = e21, "break";
                }, M = p ? 3 : 1; M > 0 && "break" !== j(M); M--);
                e20.placement !== T && (e20.modifiersData[n]._skip = !0, e20.placement = T, e20.reset = !0);
            }
        },
        requiresIfExists: [
            "offset"
        ],
        data: {
            _skip: !1
        }
    };
    function De(t, e, i) {
        return void 0 === i && (i = {
            x: 0,
            y: 0
        }), {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        };
    }
    function Se(t) {
        return [
            mt,
            _t,
            gt,
            bt
        ].some(function(e) {
            return t[e] >= 0;
        });
    }
    const Ne = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: [
            "preventOverflow"
        ],
        fn: function(t) {
            var e = t.state, i = t.name, n = e.rects.reference, s = e.rects.popper, o = e.modifiersData.preventOverflow, r = ke(e, {
                elementContext: "reference"
            }), a = ke(e, {
                altBoundary: !0
            }), l = De(r, n), c = De(a, s, o), h = Se(l), d = Se(c);
            e.modifiersData[i] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: h,
                hasPopperEscaped: d
            }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": h,
                "data-popper-escaped": d
            });
        }
    }, Ie = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: [
            "popperOffsets"
        ],
        fn: function(t37) {
            var e22 = t37.state, i13 = t37.options, n9 = t37.name, s5 = i13.offset, o5 = void 0 === s5 ? [
                0,
                0
            ] : s5, r4 = Lt.reduce(function(t38, i14) {
                return t38[i14] = function(t, e, i) {
                    var n = Ut(t), s = [
                        bt,
                        mt
                    ].indexOf(n) >= 0 ? -1 : 1, o = "function" == typeof i ? i(Object.assign({}, e, {
                        placement: t
                    })) : i, r = o[0], a = o[1];
                    return r = r || 0, a = (a || 0) * s, [
                        bt,
                        _t
                    ].indexOf(n) >= 0 ? {
                        x: a,
                        y: r
                    } : {
                        x: r,
                        y: a
                    };
                }(i14, e22.rects, o5), t38;
            }, {}), a3 = r4[e22.placement], l = a3.x, c = a3.y;
            null != e22.modifiersData.popperOffsets && (e22.modifiersData.popperOffsets.x += l, e22.modifiersData.popperOffsets.y += c), e22.modifiersData[n9] = r4;
        }
    }, Pe = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(t) {
            var e = t.state, i = t.name;
            e.modifiersData[i] = Ce({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            });
        },
        data: {}
    }, je = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state, i = t.options, n = t.name, s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 !== r && r, l = i.boundary, c = i.rootBoundary, h = i.altBoundary, d = i.padding, u = i.tether, f = void 0 === u || u, p = i.tetherOffset, m = void 0 === p ? 0 : p, g = ke(e, {
                boundary: l,
                rootBoundary: c,
                padding: d,
                altBoundary: h
            }), _ = Ut(e.placement), b = ce(e.placement), v = !b, y = ee(_), w = "x" === y ? "y" : "x", E = e.modifiersData.popperOffsets, A = e.rects.reference, T = e.rects.popper, O = "function" == typeof m ? m(Object.assign({}, e.rects, {
                placement: e.placement
            })) : m, C = {
                x: 0,
                y: 0
            };
            if (E) {
                if (o || a) {
                    var k = "y" === y ? mt : bt, L = "y" === y ? gt : _t, x = "y" === y ? "height" : "width", D = E[y], S = E[y] + g[k], N = E[y] - g[L], I = f ? -T[x] / 2 : 0, P = b === wt ? A[x] : T[x], j = b === wt ? -T[x] : -A[x], M = e.elements.arrow, H = f && M ? Kt(M) : {
                        width: 0,
                        height: 0
                    }, B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, R = B[k], W = B[L], $ = oe(0, A[x], H[x]), z = v ? A[x] / 2 - I - $ - R - O : P - $ - R - O, q = v ? -A[x] / 2 + I + $ + W + O : j + $ + W + O, F = e.elements.arrow && te(e.elements.arrow), U = F ? "y" === y ? F.clientTop || 0 : F.clientLeft || 0 : 0, V = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0, K = E[y] + z - V - U, X = E[y] + q - V;
                    if (o) {
                        var Y = oe(f ? ne(S, K) : S, D, f ? ie(N, X) : N);
                        E[y] = Y, C[y] = Y - D;
                    }
                    if (a) {
                        var Q = "x" === y ? mt : bt, G = "x" === y ? gt : _t, Z = E[w], J = Z + g[Q], tt = Z - g[G], et = oe(f ? ne(J, K) : J, Z, f ? ie(tt, X) : tt);
                        E[w] = et, C[w] = et - Z;
                    }
                }
                e.modifiersData[n] = C;
            }
        },
        requiresIfExists: [
            "offset"
        ]
    };
    function Me(t39, e23, i) {
        void 0 === i && (i = !1);
        var n = zt(e23);
        zt(e23) && function(t) {
            var e = t.getBoundingClientRect();
            e.width, t.offsetWidth, e.height, t.offsetHeight;
        }(e23);
        var s, o, r = Gt(e23), a = Vt(t39), l = {
            scrollLeft: 0,
            scrollTop: 0
        }, c = {
            x: 0,
            y: 0
        };
        return (n || !n && !i) && (("body" !== Rt(e23) || we(r)) && (l = (s = e23) !== Wt(s) && zt(s) ? {
            scrollLeft: (o = s).scrollLeft,
            scrollTop: o.scrollTop
        } : ve(s)), zt(e23) ? ((c = Vt(e23)).x += e23.clientLeft, c.y += e23.clientTop) : r && (c.x = ye(r))), {
            x: a.left + l.scrollLeft - c.x,
            y: a.top + l.scrollTop - c.y,
            width: a.width,
            height: a.height
        };
    }
    function He(t40) {
        var e = new Map, i = new Set, n10 = [];
        function s(t41) {
            i.add(t41.name), [].concat(t41.requires || [], t41.requiresIfExists || []).forEach(function(t) {
                if (!i.has(t)) {
                    var n = e.get(t);
                    n && s(n);
                }
            }), n10.push(t41);
        }
        return t40.forEach(function(t) {
            e.set(t.name, t);
        }), t40.forEach(function(t) {
            i.has(t.name) || s(t);
        }), n10;
    }
    var Be = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function Re() {
        for(var t42 = arguments.length, e = new Array(t42), i = 0; i < t42; i++)e[i] = arguments[i];
        return !e.some(function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect);
        });
    }
    function We(t43) {
        void 0 === t43 && (t43 = {});
        var e24 = t43, i15 = e24.defaultModifiers, n11 = void 0 === i15 ? [] : i15, s6 = e24.defaultOptions, o6 = void 0 === s6 ? Be : s6;
        return function(t44, e25, i16) {
            void 0 === i16 && (i16 = o6);
            var s7, r5, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, Be, o6),
                modifiersData: {},
                elements: {
                    reference: t44,
                    popper: e25
                },
                attributes: {},
                styles: {}
            }, l2 = [], c2 = !1, h = {
                state: a,
                setOptions: function(i17) {
                    var s8 = "function" == typeof i17 ? i17(a.options) : i17;
                    d2(), a.options = Object.assign({}, o6, a.options, s8), a.scrollParents = {
                        reference: $t(t44) ? Ae(t44) : t44.contextElement ? Ae(t44.contextElement) : [],
                        popper: Ae(e25)
                    };
                    var r, c, u = function(t45) {
                        var e = He(t45);
                        return Bt.reduce(function(t46, i) {
                            return t46.concat(e.filter(function(t) {
                                return t.phase === i;
                            }));
                        }, []);
                    }((r = [].concat(n11, a.options.modifiers), c = r.reduce(function(t, e) {
                        var i = t[e.name];
                        return t[e.name] = i ? Object.assign({}, i, e, {
                            options: Object.assign({}, i.options, e.options),
                            data: Object.assign({}, i.data, e.data)
                        }) : e, t;
                    }, {}), Object.keys(c).map(function(t) {
                        return c[t];
                    })));
                    return a.orderedModifiers = u.filter(function(t) {
                        return t.enabled;
                    }), a.orderedModifiers.forEach(function(t) {
                        var e = t.name, i = t.options, n = void 0 === i ? {} : i, s = t.effect;
                        if ("function" == typeof s) {
                            var o = s({
                                state: a,
                                name: e,
                                instance: h,
                                options: n
                            });
                            l2.push(o || function() {});
                        }
                    }), h.update();
                },
                forceUpdate: function() {
                    if (!c2) {
                        var t47 = a.elements, e = t47.reference, i = t47.popper;
                        if (Re(e, i)) {
                            a.rects = {
                                reference: Me(e, te(i), "fixed" === a.options.strategy),
                                popper: Kt(i)
                            }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function(t) {
                                return a.modifiersData[t.name] = Object.assign({}, t.data);
                            });
                            for(var n = 0; n < a.orderedModifiers.length; n++)if (!0 !== a.reset) {
                                var s = a.orderedModifiers[n], o = s.fn, r = s.options, l = void 0 === r ? {} : r, d = s.name;
                                "function" == typeof o && (a = o({
                                    state: a,
                                    options: l,
                                    name: d,
                                    instance: h
                                }) || a);
                            } else a.reset = !1, n = -1;
                        }
                    }
                },
                update: (s7 = function() {
                    return new Promise(function(t) {
                        h.forceUpdate(), t(a);
                    });
                }, function() {
                    return r5 || (r5 = new Promise(function(t) {
                        Promise.resolve().then(function() {
                            r5 = void 0, t(s7());
                        });
                    })), r5;
                }),
                destroy: function() {
                    d2(), c2 = !0;
                }
            };
            if (!Re(t44, e25)) return h;
            function d2() {
                l2.forEach(function(t) {
                    return t();
                }), l2 = [];
            }
            return h.setOptions(i16).then(function(t) {
                !c2 && i16.onFirstUpdate && i16.onFirstUpdate(t);
            }), h;
        };
    }
    var $e = We(), ze = We({
        defaultModifiers: [
            pe,
            Pe,
            ue,
            Ft
        ]
    }), qe = We({
        defaultModifiers: [
            pe,
            Pe,
            ue,
            Ft,
            Ie,
            xe,
            je,
            le,
            Ne
        ]
    });
    const Fe = Object.freeze({
        __proto__: null,
        popperGenerator: We,
        detectOverflow: ke,
        createPopperBase: $e,
        createPopper: qe,
        createPopperLite: ze,
        top: mt,
        bottom: gt,
        right: _t,
        left: bt,
        auto: vt,
        basePlacements: yt,
        start: wt,
        end: Et,
        clippingParents: At,
        viewport: Tt,
        popper: Ot,
        reference: Ct,
        variationPlacements: kt,
        placements: Lt,
        beforeRead: xt,
        read: Dt,
        afterRead: St,
        beforeMain: Nt,
        main: It,
        afterMain: Pt,
        beforeWrite: jt,
        write: Mt,
        afterWrite: Ht,
        modifierPhases: Bt,
        applyStyles: Ft,
        arrow: le,
        computeStyles: ue,
        eventListeners: pe,
        flip: xe,
        hide: Ne,
        offset: Ie,
        popperOffsets: Pe,
        preventOverflow: je
    }), Ue = "dropdown", Ve = "Escape", Ke = "Space", Xe = "ArrowUp", Ye = "ArrowDown", Qe = new RegExp("ArrowUp|ArrowDown|Escape"), Ge = "click.bs.dropdown.data-api", Ze = "keydown.bs.dropdown.data-api", Je = "show", ti = '[data-bs-toggle="dropdown"]', ei = ".dropdown-menu", ii = m1() ? "top-end" : "top-start", ni = m1() ? "top-start" : "top-end", si = m1() ? "bottom-end" : "bottom-start", oi = m1() ? "bottom-start" : "bottom-end", ri = m1() ? "left-start" : "right-start", ai = m1() ? "right-start" : "left-start", li = {
        offset: [
            0,
            2
        ],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
        autoClose: !0
    }, ci = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
        autoClose: "(boolean|string)"
    };
    class hi extends B1 {
        constructor(t, e){
            super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar();
        }
        static get Default() {
            return li;
        }
        static get DefaultType() {
            return ci;
        }
        static get NAME() {
            return Ue;
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (c1(this._element) || this._isShown(this._menu)) return;
            const t49 = {
                relatedTarget: this._element
            };
            if (j1.trigger(this._element, "show.bs.dropdown", t49).defaultPrevented) return;
            const e = hi.getParentFromElement(this._element);
            this._inNavbar ? U1.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e), "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && [].concat(...document.body.children).forEach((t)=>j1.on(t, "mouseover", d1)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Je), this._element.classList.add(Je), j1.trigger(this._element, "shown.bs.dropdown", t49);
        }
        hide() {
            if (c1(this._element) || !this._isShown(this._menu)) return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t);
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
        }
        _completeHide(t50) {
            j1.trigger(this._element, "hide.bs.dropdown", t50).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t)=>j1.off(t, "mouseover", d1)), this._popper && this._popper.destroy(), this._menu.classList.remove(Je), this._element.classList.remove(Je), this._element.setAttribute("aria-expanded", "false"), U1.removeDataAttribute(this._menu, "popper"), j1.trigger(this._element, "hidden.bs.dropdown", t50));
        }
        _getConfig(t) {
            if (t = {
                ...this.constructor.Default,
                ...U1.getDataAttributes(this._element),
                ...t
            }, a1(Ue, t, this.constructor.DefaultType), "object" == typeof t.reference && !o1(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${Ue.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t;
        }
        _createPopper(t51) {
            if (void 0 === Fe) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e = this._element;
            "parent" === this._config.reference ? e = t51 : o1(this._config.reference) ? e = r1(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
            const i = this._getPopperConfig(), n = i.modifiers.find((t)=>"applyStyles" === t.name && !1 === t.enabled);
            this._popper = qe(e, this._menu, i), n && U1.setDataAttribute(this._menu, "popper", "static");
        }
        _isShown(t = this._element) {
            return t.classList.contains(Je);
        }
        _getMenuElement() {
            return V1.next(this._element, ei)[0];
        }
        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains("dropend")) return ri;
            if (t.classList.contains("dropstart")) return ai;
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? ni : ii : e ? oi : si;
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar");
        }
        _getOffset() {
            const { offset: t52  } = this._config;
            return "string" == typeof t52 ? t52.split(",").map((t)=>Number.parseInt(t, 10)) : "function" == typeof t52 ? (e)=>t52(e, this._element) : t52;
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }
                ]
            };
            return "static" === this._config.display && (t.modifiers = [
                {
                    name: "applyStyles",
                    enabled: !1
                }
            ]), {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            };
        }
        _selectMenuItem({ key: t , target: e  }) {
            const i = V1.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(l1);
            i.length && v1(i, e, t === Ye, !i.includes(e)).focus();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = hi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
        static clearMenus(t) {
            if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return;
            const e = V1.find(ti);
            for(let i = 0, n = e.length; i < n; i++){
                const n = hi.getInstance(e[i]);
                if (!n || !1 === n._config.autoClose) continue;
                if (!n._isShown()) continue;
                const s = {
                    relatedTarget: n._element
                };
                if (t) {
                    const e = t.composedPath(), i = e.includes(n._menu);
                    if (e.includes(n._element) || "inside" === n._config.autoClose && !i || "outside" === n._config.autoClose && i) continue;
                    if (n._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                    "click" === t.type && (s.clickEvent = t);
                }
                n._completeHide(s);
            }
        }
        static getParentFromElement(t) {
            return n1(t) || t.parentNode;
        }
        static dataApiKeydownHandler(t) {
            if (/input|textarea/i.test(t.target.tagName) ? t.key === Ke || t.key !== Ve && (t.key !== Ye && t.key !== Xe || t.target.closest(ei)) : !Qe.test(t.key)) return;
            const e = this.classList.contains(Je);
            if (!e && t.key === Ve) return;
            if (t.preventDefault(), t.stopPropagation(), c1(this)) return;
            const i = this.matches(ti) ? this : V1.prev(this, ti)[0], n = hi.getOrCreateInstance(i);
            if (t.key !== Ve) return t.key === Xe || t.key === Ye ? (e || n.show(), void n._selectMenuItem(t)) : void (e && t.key !== Ke || hi.clearMenus());
            n.hide();
        }
    }
    j1.on(document, Ze, ti, hi.dataApiKeydownHandler), j1.on(document, Ze, ei, hi.dataApiKeydownHandler), j1.on(document, Ge, hi.clearMenus), j1.on(document, "keyup.bs.dropdown.data-api", hi.clearMenus), j1.on(document, Ge, ti, function(t) {
        t.preventDefault(), hi.getOrCreateInstance(this).toggle();
    }), g1(hi);
    const di = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", ui = ".sticky-top";
    class fi {
        constructor(){
            this._element = document.body;
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t);
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (e)=>e + t), this._setElementAttributes(di, "paddingRight", (e)=>e + t), this._setElementAttributes(ui, "marginRight", (e)=>e - t);
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
        }
        _setElementAttributes(t53, e, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(t53, (t)=>{
                if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t)[e];
                t.style[e] = `${i(Number.parseFloat(s))}px`;
            });
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(di, "paddingRight"), this._resetElementAttributes(ui, "marginRight");
        }
        _saveInitialAttribute(t, e) {
            const i = t.style[e];
            i && U1.setDataAttribute(t, e, i);
        }
        _resetElementAttributes(t54, e) {
            this._applyManipulationCallback(t54, (t)=>{
                const i = U1.getDataAttribute(t, e);
                void 0 === i ? t.style.removeProperty(e) : (U1.removeDataAttribute(t, e), t.style[e] = i);
            });
        }
        _applyManipulationCallback(t, e) {
            o1(t) ? e(t) : V1.find(t, this._element).forEach(e);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
    }
    const pi = {
        className: "modal-backdrop",
        isVisible: !0,
        isAnimated: !1,
        rootElement: "body",
        clickCallback: null
    }, mi = {
        className: "string",
        isVisible: "boolean",
        isAnimated: "boolean",
        rootElement: "(element|string)",
        clickCallback: "(function|null)"
    }, gi = "show", _i = "mousedown.bs.backdrop";
    class bi {
        constructor(t){
            this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
        }
        show(t) {
            this._config.isVisible ? (this._append(), this._config.isAnimated && u1(this._getElement()), this._getElement().classList.add(gi), this._emulateAnimation(()=>{
                _1(t);
            })) : _1(t);
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(gi), this._emulateAnimation(()=>{
                this.dispose(), _1(t);
            })) : _1(t);
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t;
            }
            return this._element;
        }
        _getConfig(t) {
            return (t = {
                ...pi,
                ..."object" == typeof t ? t : {}
            }).rootElement = r1(t.rootElement), a1("backdrop", t, mi), t;
        }
        _append() {
            this._isAppended || (this._config.rootElement.append(this._getElement()), j1.on(this._getElement(), _i, ()=>{
                _1(this._config.clickCallback);
            }), this._isAppended = !0);
        }
        dispose() {
            this._isAppended && (j1.off(this._element, _i), this._element.remove(), this._isAppended = !1);
        }
        _emulateAnimation(t) {
            b1(t, this._getElement(), this._config.isAnimated);
        }
    }
    const vi = {
        trapElement: null,
        autofocus: !0
    }, yi = {
        trapElement: "element",
        autofocus: "boolean"
    }, wi = ".bs.focustrap", Ei = "backward";
    class Ai {
        constructor(t){
            this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
        }
        activate() {
            const { trapElement: t55 , autofocus: e  } = this._config;
            this._isActive || (e && t55.focus(), j1.off(document, wi), j1.on(document, "focusin.bs.focustrap", (t)=>this._handleFocusin(t)), j1.on(document, "keydown.tab.bs.focustrap", (t)=>this._handleKeydown(t)), this._isActive = !0);
        }
        deactivate() {
            this._isActive && (this._isActive = !1, j1.off(document, wi));
        }
        _handleFocusin(t) {
            const { target: e  } = t, { trapElement: i  } = this._config;
            if (e === document || e === i || i.contains(e)) return;
            const n = V1.focusableChildren(i);
            0 === n.length ? i.focus() : this._lastTabNavDirection === Ei ? n[n.length - 1].focus() : n[0].focus();
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Ei : "forward");
        }
        _getConfig(t) {
            return t = {
                ...vi,
                ..."object" == typeof t ? t : {}
            }, a1("focustrap", t, yi), t;
        }
    }
    const Ti = "modal", Oi = "Escape", Ci = {
        backdrop: !0,
        keyboard: !0,
        focus: !0
    }, ki = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
    }, Li = "hidden.bs.modal", xi = "show.bs.modal", Di = "resize.bs.modal", Si = "click.dismiss.bs.modal", Ni = "keydown.dismiss.bs.modal", Ii = "mousedown.dismiss.bs.modal", Pi = "modal-open", ji = "show", Mi = "modal-static";
    class Hi extends B1 {
        constructor(t, e){
            super(t), this._config = this._getConfig(e), this._dialog = V1.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new fi;
        }
        static get Default() {
            return Ci;
        }
        static get NAME() {
            return Ti;
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t56) {
            this._isShown || this._isTransitioning || j1.trigger(this._element, xi, {
                relatedTarget: t56
            }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(Pi), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), j1.on(this._dialog, Ii, ()=>{
                j1.one(this._element, "mouseup.dismiss.bs.modal", (t)=>{
                    t.target === this._element && (this._ignoreBackdropClick = !0);
                });
            }), this._showBackdrop(()=>this._showElement(t56)));
        }
        hide() {
            if (!this._isShown || this._isTransitioning) return;
            if (j1.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
            this._isShown = !1;
            const t = this._isAnimated();
            t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(ji), j1.off(this._element, Si), j1.off(this._dialog, Ii), this._queueCallback(()=>this._hideModal(), this._element, t);
        }
        dispose() {
            [
                window,
                this._dialog
            ].forEach((t)=>j1.off(t, ".bs.modal")), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new bi({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            });
        }
        _initializeFocusTrap() {
            return new Ai({
                trapElement: this._element
            });
        }
        _getConfig(t) {
            return t = {
                ...Ci,
                ...U1.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            }, a1(Ti, t, ki), t;
        }
        _showElement(t) {
            const e = this._isAnimated(), i = V1.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && u1(this._element), this._element.classList.add(ji), this._queueCallback(()=>{
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, j1.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: t
                });
            }, this._dialog, e);
        }
        _setEscapeEvent() {
            this._isShown ? j1.on(this._element, Ni, (t)=>{
                this._config.keyboard && t.key === Oi ? (t.preventDefault(), this.hide()) : this._config.keyboard || t.key !== Oi || this._triggerBackdropTransition();
            }) : j1.off(this._element, Ni);
        }
        _setResizeEvent() {
            this._isShown ? j1.on(window, Di, ()=>this._adjustDialog()) : j1.off(window, Di);
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(()=>{
                document.body.classList.remove(Pi), this._resetAdjustments(), this._scrollBar.reset(), j1.trigger(this._element, Li);
            });
        }
        _showBackdrop(t57) {
            j1.on(this._element, Si, (t)=>{
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition());
            }), this._backdrop.show(t57);
        }
        _isAnimated() {
            return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
            if (j1.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            const { classList: t , scrollHeight: e , style: i  } = this._element, n = e > document.documentElement.clientHeight;
            !n && "hidden" === i.overflowY || t.contains(Mi) || (n || (i.overflowY = "hidden"), t.add(Mi), this._queueCallback(()=>{
                t.remove(Mi), n || this._queueCallback(()=>{
                    i.overflowY = "";
                }, this._dialog);
            }, this._dialog), this._element.focus());
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), i = e > 0;
            (!i && t && !m1() || i && !t && m1()) && (this._element.style.paddingLeft = `${e}px`), (i && !t && !m1() || !i && t && m1()) && (this._element.style.paddingRight = `${e}px`);
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }
        static jQueryInterface(t, e) {
            return this.each(function() {
                const i = Hi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e);
                }
            });
        }
    }
    j1.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(t58) {
        const e = n1(this);
        [
            "A",
            "AREA"
        ].includes(this.tagName) && t58.preventDefault(), j1.one(e, xi, (t)=>{
            t.defaultPrevented || j1.one(e, Li, ()=>{
                l1(this) && this.focus();
            });
        });
        const i = V1.findOne(".modal.show");
        i && Hi.getInstance(i).hide(), Hi.getOrCreateInstance(e).toggle(this);
    }), R1(Hi), g1(Hi);
    const Bi = "offcanvas", Ri = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }, Wi = {
        backdrop: "boolean",
        keyboard: "boolean",
        scroll: "boolean"
    }, $i = "show", zi = ".offcanvas.show", qi = "hidden.bs.offcanvas";
    class Fi extends B1 {
        constructor(t, e){
            super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
        }
        static get NAME() {
            return Bi;
        }
        static get Default() {
            return Ri;
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown || j1.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new fi).hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add($i), this._queueCallback(()=>{
                this._config.scroll || this._focustrap.activate(), j1.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t
                });
            }, this._element, !0));
        }
        hide() {
            this._isShown && (j1.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove($i), this._backdrop.hide(), this._queueCallback(()=>{
                this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new fi).reset(), j1.trigger(this._element, qi);
            }, this._element, !0)));
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        _getConfig(t) {
            return t = {
                ...Ri,
                ...U1.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            }, a1(Bi, t, Wi), t;
        }
        _initializeBackDrop() {
            return new bi({
                className: "offcanvas-backdrop",
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: ()=>this.hide()
            });
        }
        _initializeFocusTrap() {
            return new Ai({
                trapElement: this._element
            });
        }
        _addEventListeners() {
            j1.on(this._element, "keydown.dismiss.bs.offcanvas", (t)=>{
                this._config.keyboard && "Escape" === t.key && this.hide();
            });
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Fi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    j1.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(t) {
        const e = n1(this);
        if ([
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), c1(this)) return;
        j1.one(e, qi, ()=>{
            l1(this) && this.focus();
        });
        const i = V1.findOne(zi);
        i && i !== e && Fi.getInstance(i).hide(), Fi.getOrCreateInstance(e).toggle(this);
    }), j1.on(window, "load.bs.offcanvas.data-api", ()=>V1.find(zi).forEach((t)=>Fi.getOrCreateInstance(t).show())), R1(Fi), g1(Fi);
    const Ui = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href"
    ]), Vi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, Ki = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, Xi = (t60, e)=>{
        const i = t60.nodeName.toLowerCase();
        if (e.includes(i)) return !Ui.has(i) || Boolean(Vi.test(t60.nodeValue) || Ki.test(t60.nodeValue));
        const n = e.filter((t)=>t instanceof RegExp);
        for(let t59 = 0, e26 = n.length; t59 < e26; t59++)if (n[t59].test(i)) return !0;
        return !1;
    };
    function Yi(t62, e, i) {
        if (!t62.length) return t62;
        if (i && "function" == typeof i) return i(t62);
        const n = (new window.DOMParser).parseFromString(t62, "text/html"), s = [].concat(...n.body.querySelectorAll("*"));
        for(let t61 = 0, i18 = s.length; t61 < i18; t61++){
            const i = s[t61], n = i.nodeName.toLowerCase();
            if (!Object.keys(e).includes(n)) {
                i.remove();
                continue;
            }
            const o = [].concat(...i.attributes), r = [].concat(e["*"] || [], e[n] || []);
            o.forEach((t)=>{
                Xi(t, r) || i.removeAttribute(t.nodeName);
            });
        }
        return n.body.innerHTML;
    }
    const Qi = "tooltip", Gi = new Set([
        "sanitize",
        "allowList",
        "sanitizeFn"
    ]), Zi = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)"
    }, Ji = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: m1() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: m1() ? "right" : "left"
    }, tn = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [
            0,
            0
        ],
        container: !1,
        fallbackPlacements: [
            "top",
            "right",
            "bottom",
            "left"
        ],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: {
            "*": [
                "class",
                "dir",
                "id",
                "lang",
                "role",
                /^aria-[\w-]*$/i
            ],
            a: [
                "target",
                "href",
                "title",
                "rel"
            ],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: [
                "src",
                "srcset",
                "alt",
                "title",
                "width",
                "height"
            ],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        popperConfig: null
    }, en = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    }, nn = "fade", sn = "show", on = "show", rn = "out", an = ".tooltip-inner", ln = ".modal", cn = "hide.bs.modal", hn = "hover", dn = "focus";
    class un extends B1 {
        constructor(t, e){
            if (void 0 === Fe) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners();
        }
        static get Default() {
            return tn;
        }
        static get NAME() {
            return Qi;
        }
        static get Event() {
            return en;
        }
        static get DefaultType() {
            return Zi;
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle(t) {
            if (this._isEnabled) {
                if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
                } else {
                    if (this.getTipElement().classList.contains(sn)) return void this._leave(null, this);
                    this._enter(null, this);
                }
            }
        }
        dispose() {
            clearTimeout(this._timeout), j1.off(this._element.closest(ln), cn, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose();
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled) return;
            const t63 = j1.trigger(this._element, this.constructor.Event.SHOW), e = h1(this._element), i = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
            if (t63.defaultPrevented || !i) return;
            "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(an).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
            const n = this.getTipElement(), s = ((t)=>{
                do t += Math.floor(1e6 * Math.random());
                while (document.getElementById(t));
                return t;
            })(this.constructor.NAME);
            n.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this._config.animation && n.classList.add(nn);
            const o = "function" == typeof this._config.placement ? this._config.placement.call(this, n, this._element) : this._config.placement, r = this._getAttachment(o);
            this._addAttachmentClass(r);
            const { container: a  } = this._config;
            H1.set(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(n), j1.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = qe(this._element, n, this._getPopperConfig(r)), n.classList.add(sn);
            const l = this._resolvePossibleFunction(this._config.customClass);
            l && n.classList.add(...l.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t)=>{
                j1.on(t, "mouseover", d1);
            });
            const c = this.tip.classList.contains(nn);
            this._queueCallback(()=>{
                const t = this._hoverState;
                this._hoverState = null, j1.trigger(this._element, this.constructor.Event.SHOWN), t === rn && this._leave(null, this);
            }, this.tip, c);
        }
        hide() {
            if (!this._popper) return;
            const t64 = this.getTipElement();
            if (j1.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
            t64.classList.remove(sn), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t)=>j1.off(t, "mouseover", d1)), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
            const e = this.tip.classList.contains(nn);
            this._queueCallback(()=>{
                this._isWithActiveTrigger() || (this._hoverState !== on && t64.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), j1.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper());
            }, this.tip, e), this._hoverState = "";
        }
        update() {
            null !== this._popper && this._popper.update();
        }
        isWithContent() {
            return Boolean(this.getTitle());
        }
        getTipElement() {
            if (this.tip) return this.tip;
            const t = document.createElement("div");
            t.innerHTML = this._config.template;
            const e = t.children[0];
            return this.setContent(e), e.classList.remove(nn, sn), this.tip = e, this.tip;
        }
        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), an);
        }
        _sanitizeAndSetContent(t, e, i) {
            const n = V1.findOne(i, t);
            e || !n ? this.setElementContent(n, e) : n.remove();
        }
        setElementContent(t, e) {
            if (null !== t) return o1(e) ? (e = r1(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = Yi(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
        }
        getTitle() {
            const t = this._element.getAttribute("data-bs-original-title") || this._config.title;
            return this._resolvePossibleFunction(t);
        }
        updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t;
        }
        _initializeOnDelegatedTarget(t, e) {
            return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
        }
        _getOffset() {
            const { offset: t65  } = this._config;
            return "string" == typeof t65 ? t65.split(",").map((t)=>Number.parseInt(t, 10)) : "function" == typeof t65 ? (e)=>t65(e, this._element) : t65;
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t;
        }
        _getPopperConfig(t66) {
            const e = {
                placement: t66,
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    },
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "arrow",
                        options: {
                            element: `.${this.constructor.NAME}-arrow`
                        }
                    },
                    {
                        name: "onChange",
                        enabled: !0,
                        phase: "afterWrite",
                        fn: (t)=>this._handlePopperPlacementChange(t)
                    }
                ],
                onFirstUpdate: (t)=>{
                    t.options.placement !== t.placement && this._handlePopperPlacementChange(t);
                }
            };
            return {
                ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            };
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`);
        }
        _getAttachment(t) {
            return Ji[t.toUpperCase()];
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach((t67)=>{
                if ("click" === t67) j1.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t)=>this.toggle(t));
                else if ("manual" !== t67) {
                    const e = t67 === hn ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, i = t67 === hn ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    j1.on(this._element, e, this._config.selector, (t)=>this._enter(t)), j1.on(this._element, i, this._config.selector, (t)=>this._leave(t));
                }
            }), this._hideModalHandler = ()=>{
                this._element && this.hide();
            }, j1.on(this._element.closest(ln), cn, this._hideModalHandler), this._config.selector ? this._config = {
                ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle();
        }
        _fixTitle() {
            const t = this._element.getAttribute("title"), e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
        }
        _enter(t, e) {
            e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? dn : hn] = !0), e.getTipElement().classList.contains(sn) || e._hoverState === on ? e._hoverState = on : (clearTimeout(e._timeout), e._hoverState = on, e._config.delay && e._config.delay.show ? e._timeout = setTimeout(()=>{
                e._hoverState === on && e.show();
            }, e._config.delay.show) : e.show());
        }
        _leave(t, e) {
            e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? dn : hn] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = rn, e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(()=>{
                e._hoverState === rn && e.hide();
            }, e._config.delay.hide) : e.hide());
        }
        _isWithActiveTrigger() {
            for(const t in this._activeTrigger)if (this._activeTrigger[t]) return !0;
            return !1;
        }
        _getConfig(t68) {
            const e = U1.getDataAttributes(this._element);
            return Object.keys(e).forEach((t)=>{
                Gi.has(t) && delete e[t];
            }), (t68 = {
                ...this.constructor.Default,
                ...e,
                ..."object" == typeof t68 && t68 ? t68 : {}
            }).container = !1 === t68.container ? document.body : r1(t68.container), "number" == typeof t68.delay && (t68.delay = {
                show: t68.delay,
                hide: t68.delay
            }), "number" == typeof t68.title && (t68.title = t68.title.toString()), "number" == typeof t68.content && (t68.content = t68.content.toString()), a1(Qi, t68, this.constructor.DefaultType), t68.sanitize && (t68.template = Yi(t68.template, t68.allowList, t68.sanitizeFn)), t68;
        }
        _getDelegateConfig() {
            const t = {};
            for(const e in this._config)this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t;
        }
        _cleanTipClass() {
            const t69 = this.getTipElement(), e27 = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"), i = t69.getAttribute("class").match(e27);
            null !== i && i.length > 0 && i.map((t)=>t.trim()).forEach((e)=>t69.classList.remove(e));
        }
        _getBasicClassPrefix() {
            return "bs-tooltip";
        }
        _handlePopperPlacementChange(t) {
            const { state: e  } = t;
            e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = un.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    g1(un);
    const fn = {
        ...un.Default,
        placement: "right",
        offset: [
            0,
            8
        ],
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }, pn = {
        ...un.DefaultType,
        content: "(string|element|function)"
    }, mn = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    };
    class gn extends un {
        static get Default() {
            return fn;
        }
        static get NAME() {
            return "popover";
        }
        static get Event() {
            return mn;
        }
        static get DefaultType() {
            return pn;
        }
        isWithContent() {
            return this.getTitle() || this._getContent();
        }
        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t, this._getContent(), ".popover-body");
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content);
        }
        _getBasicClassPrefix() {
            return "bs-popover";
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = gn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    g1(gn);
    const _n = "scrollspy", bn = {
        offset: 10,
        method: "auto",
        target: ""
    }, vn = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }, yn = "active", wn = ".nav-link, .list-group-item, .dropdown-item", En = "position";
    class An extends B1 {
        constructor(t, e){
            super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, j1.on(this._scrollElement, "scroll.bs.scrollspy", ()=>this._process()), this.refresh(), this._process();
        }
        static get Default() {
            return bn;
        }
        static get NAME() {
            return _n;
        }
        refresh() {
            const t70 = this._scrollElement === this._scrollElement.window ? "offset" : En, e28 = "auto" === this._config.method ? t70 : this._config.method, n = e28 === En ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), V1.find(wn, this._config.target).map((t)=>{
                const s = i1(t), o = s ? V1.findOne(s) : null;
                if (o) {
                    const t = o.getBoundingClientRect();
                    if (t.width || t.height) return [
                        U1[e28](o).top + n,
                        s
                    ];
                }
                return null;
            }).filter((t)=>t).sort((t, e)=>t[0] - e[0]).forEach((t)=>{
                this._offsets.push(t[0]), this._targets.push(t[1]);
            });
        }
        dispose() {
            j1.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
        }
        _getConfig(t) {
            return (t = {
                ...bn,
                ...U1.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            }).target = r1(t.target) || document.documentElement, a1(_n, t, vn), t;
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
        }
        _process() {
            const t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), i = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(), t >= i) {
                const t = this._targets[this._targets.length - 1];
                this._activeTarget !== t && this._activate(t);
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                for(let e = this._offsets.length; e--;)this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e]);
            }
        }
        _activate(t71) {
            this._activeTarget = t71, this._clear();
            const e29 = wn.split(",").map((e)=>`${e}[data-bs-target="${t71}"],${e}[href="${t71}"]`), i = V1.findOne(e29.join(","), this._config.target);
            i.classList.add(yn), i.classList.contains("dropdown-item") ? V1.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(yn) : V1.parents(i, ".nav, .list-group").forEach((t72)=>{
                V1.prev(t72, ".nav-link, .list-group-item").forEach((t)=>t.classList.add(yn)), V1.prev(t72, ".nav-item").forEach((t73)=>{
                    V1.children(t73, ".nav-link").forEach((t)=>t.classList.add(yn));
                });
            }), j1.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: t71
            });
        }
        _clear() {
            V1.find(wn, this._config.target).filter((t)=>t.classList.contains(yn)).forEach((t)=>t.classList.remove(yn));
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = An.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    j1.on(window, "load.bs.scrollspy.data-api", ()=>{
        V1.find('[data-bs-spy="scroll"]').forEach((t)=>new An(t));
    }), g1(An);
    const Tn = "active", On = "fade", Cn = "show", kn = ".active", Ln = ":scope > li > .active";
    class xn extends B1 {
        static get NAME() {
            return "tab";
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Tn)) return;
            let t;
            const e = n1(this._element), i = this._element.closest(".nav, .list-group");
            if (i) {
                const e = "UL" === i.nodeName || "OL" === i.nodeName ? Ln : kn;
                t = V1.find(e, i), t = t[t.length - 1];
            }
            const s = t ? j1.trigger(t, "hide.bs.tab", {
                relatedTarget: this._element
            }) : null;
            if (j1.trigger(this._element, "show.bs.tab", {
                relatedTarget: t
            }).defaultPrevented || null !== s && s.defaultPrevented) return;
            this._activate(this._element, i);
            const o = ()=>{
                j1.trigger(t, "hidden.bs.tab", {
                    relatedTarget: this._element
                }), j1.trigger(this._element, "shown.bs.tab", {
                    relatedTarget: t
                });
            };
            e ? this._activate(e, e.parentNode, o) : o();
        }
        _activate(t, e, i) {
            const n = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? V1.children(e, kn) : V1.find(Ln, e))[0], s = i && n && n.classList.contains(On), o = ()=>this._transitionComplete(t, n, i);
            n && s ? (n.classList.remove(Cn), this._queueCallback(o, t, !0)) : o();
        }
        _transitionComplete(t74, e, i) {
            if (e) {
                e.classList.remove(Tn);
                const t = V1.findOne(":scope > .dropdown-menu .active", e.parentNode);
                t && t.classList.remove(Tn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
            }
            t74.classList.add(Tn), "tab" === t74.getAttribute("role") && t74.setAttribute("aria-selected", !0), u1(t74), t74.classList.contains(On) && t74.classList.add(Cn);
            let n = t74.parentNode;
            if (n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains("dropdown-menu")) {
                const e = t74.closest(".dropdown");
                e && V1.find(".dropdown-toggle", e).forEach((t)=>t.classList.add(Tn)), t74.setAttribute("aria-expanded", !0);
            }
            i && i();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = xn.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    j1.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function(t) {
        [
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), c1(this) || xn.getOrCreateInstance(this).show();
    }), g1(xn);
    const Dn = "toast", Sn = "hide", Nn = "show", In = "showing", Pn = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }, jn = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class Mn extends B1 {
        constructor(t, e){
            super(t), this._config = this._getConfig(e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
        }
        static get DefaultType() {
            return Pn;
        }
        static get Default() {
            return jn;
        }
        static get NAME() {
            return Dn;
        }
        show() {
            j1.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Sn), u1(this._element), this._element.classList.add(Nn), this._element.classList.add(In), this._queueCallback(()=>{
                this._element.classList.remove(In), j1.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
            }, this._element, this._config.animation));
        }
        hide() {
            this._element.classList.contains(Nn) && (j1.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(In), this._queueCallback(()=>{
                this._element.classList.add(Sn), this._element.classList.remove(In), this._element.classList.remove(Nn), j1.trigger(this._element, "hidden.bs.toast");
            }, this._element, this._config.animation)));
        }
        dispose() {
            this._clearTimeout(), this._element.classList.contains(Nn) && this._element.classList.remove(Nn), super.dispose();
        }
        _getConfig(t) {
            return t = {
                ...jn,
                ...U1.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            }, a1(Dn, t, this.constructor.DefaultType), t;
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(()=>{
                this.hide();
            }, this._config.delay)));
        }
        _onInteraction(t, e) {
            switch(t.type){
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e;
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide();
        }
        _setListeners() {
            j1.on(this._element, "mouseover.bs.toast", (t)=>this._onInteraction(t, !0)), j1.on(this._element, "mouseout.bs.toast", (t)=>this._onInteraction(t, !1)), j1.on(this._element, "focusin.bs.toast", (t)=>this._onInteraction(t, !0)), j1.on(this._element, "focusout.bs.toast", (t)=>this._onInteraction(t, !1));
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Mn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    return R1(Mn), g1(Mn), {
        Alert: W1,
        Button: z1,
        Carousel: st,
        Collapse: pt,
        Dropdown: hi,
        Modal: Hi,
        Offcanvas: Fi,
        Popover: gn,
        ScrollSpy: An,
        Tab: xn,
        Toast: Mn,
        Tooltip: un
    };
});

},{}]},["aUdVe","gCRej"], "gCRej", "parcelRequire61b1")

//# sourceMappingURL=index.cf23a97f.js.map
