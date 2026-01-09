// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
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
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

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
    }
  }
})({"3dtlh":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "4b8ea06834df32e0";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"gH3Lb":[function(require,module,exports,__globalThis) {
var _text = require("./components/text");
var _button = require("./components/button");
var _playerOptions = require("./components/player-options");
var _computerOptions = require("./components/computer-options");
var _counter = require("./components/counter");
var _score = require("./components/score");
var _welcome = require("./pages/welcome");
var _instructions = require("./pages/instructions");
var _move = require("./pages/move");
var _result = require("./pages/result");
var _router = require("./router");
var _state = require("./state");
(0, _state.state).init();
(0, _router.initRouter)();

},{"./router":"4wVP1","./pages/welcome":"cIpmw","./pages/instructions":"4eg7C","./pages/result":"BWeXA","./components/text":"e3Wbk","./components/button":"j53Vj","./components/player-options":"20dbn","./components/counter":"adarX","./pages/move":"jCZqs","./components/score":"cGHFb","./state":"dWXvP","./components/computer-options":"5UW7b"}],"4wVP1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "goTo", ()=>goTo);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
const routes = [
    {
        pathRegex: /^\/$/,
        tag: "welcome-page"
    },
    {
        pathRegex: /^\/instructions\/?$/,
        tag: "instructions-page"
    },
    {
        pathRegex: /^\/move\/?$/,
        tag: "move-page"
    },
    {
        pathRegex: /^\/result\/?$/,
        tag: "result-page"
    }
];
function getCleanPath() {
    const basePath = "/desafio-PPT";
    const fullPath = window.location.pathname;
    if (fullPath.startsWith(basePath)) return fullPath.slice(basePath.length) || "/";
    return fullPath || "/";
}
function renderPath() {
    const path = getCleanPath();
    const route = routes.find((r)=>r.pathRegex.test(path));
    if (!route) {
        console.warn("Ruta no encontrada:", path);
        return;
    }
    const root = document.querySelector(".root");
    if (!root) return;
    root.innerHTML = "";
    root.appendChild(document.createElement(route.tag));
}
function goTo(path) {
    const basePath = "/desafio-PPT";
    history.pushState({}, "", basePath + path);
    renderPath();
}
function initRouter() {
    renderPath();
    window.addEventListener("popstate", ()=>{
        renderPath();
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cIpmw":[function(require,module,exports,__globalThis) {
var _router = require("../../router");
class Welcome extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const variant = this.getAttribute("value") ?? "title-font";
        this.shadow.innerHTML = `
      <style>
        .container {          
          display: flex;
          height: 100vh;          
          flex-direction: column;
          align-items: center;          
          min-gap: 10px;
          }

         .custom-title{          
          text-align: left;          
          width: 308px;
          padding: 0px;
          }

          .start-button{
            margin: 0px;
          }



      </style>

      <div class="container">
        <custom-text class="custom-title" value="title-font">
         Piedra Papel <span class="muted">\xf3</span> Tijera
         </custom-text>

        <custom-button class="start-button">Empezar</custom-button>

        <player-options></player-options>
       </div>


    `;
        this.shadow.querySelector(".start-button")?.addEventListener("click", ()=>{
            (0, _router.goTo)("/instructions");
        });
    }
}
customElements.define("welcome-page", Welcome);

},{"../../router":"4wVP1"}],"4eg7C":[function(require,module,exports,__globalThis) {
var _router = require("../../router");
class InstructionsPage extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.shadow.innerHTML = `
      <style>
        .container {                    
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          height: 100vh;
        }
        .custom-title {
          text-align: center;
          width: 317px;
        }
      </style>

      <div class="container">
        <custom-text class="custom-title" value="players-font">
          Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.
        </custom-text>

        <custom-button class="move-button">\xa1Jugar!</custom-button>
        
        <player-options></player-options>
      </div>
    `;
        this.shadow.querySelector(".move-button")?.addEventListener("click", ()=>(0, _router.goTo)("/move"));
    }
}
customElements.define("instructions-page", InstructionsPage);

},{"../../router":"4wVP1"}],"BWeXA":[function(require,module,exports,__globalThis) {
var _state = require("../../state");
var _router = require("../../router");
const piedraImg = new URL(require("48b5d0c670f06501")).href;
const papelImg = new URL(require("49cea130d05d1284")).href;
const tijeraImg = new URL(require("32d5d4d8ef7edc1c")).href;
const winImg = new URL(require("385b4a8ede5f7023")).href;
const loseImg = new URL(require("45052c9555373746")).href;
const drawImg = new URL(require("e66feea1db7e0a42")).href;
class ResultPage extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        const game = (0, _state.state).getState().currentGame;
        if (!game) {
            this.shadow.innerHTML = `<p>No hay resultado</p>`;
            return;
        }
        const result = (0, _state.state).winner(game.myPlay, game.computerPlay);
        const resultImages = {
            ganaste: winImg,
            perdiste: loseImg,
            empataron: drawImg
        };
        const imageSrc = resultImages[result];
        const movesMap = {
            piedra: piedraImg,
            papel: papelImg,
            tijera: tijeraImg
        };
        const playerMove = movesMap[game.myPlay];
        const computerMove = movesMap[game.computerPlay];
        const backgroundColors = {
            ganaste: "rgba(0,255,0,0.3)",
            perdiste: "rgba(255,0,0,0.3)",
            empataron: "rgba(128,128,128,0.3)"
        };
        const bgColor = backgroundColors[result];
        this.shadow.innerHTML = `
  <style>
    :host {
      display: block;
      position: relative;
      height: 100vh;
      width: 100%;
      overflow: hidden;
    }

    
    .background {
      position: absolute;
      inset: 0;
      background-color: ${bgColor};
      opacity: 0.2;
      z-index: 0;
    }

    .background img {
      position: absolute;
      width: 150px;
      height: auto;
    }

    
    .background img.computer {
      top: 10px; 
      left: 50%;
      transform: translateX(-50%) rotate(180deg);
    }

    
    .background img.player {
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%) ;
    }

    
    .foreground {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding: 20px;
    }

    .foreground img.result-img {
      width: 200px;
    }
    
  </style>

  <div class="background">
    <img class="computer" src="${computerMove}" alt="Computer Move">
    <img class="player" src="${playerMove}" alt="Player Move">
  </div>

  <div class="foreground">
    <img class="result-img" src="${imageSrc}" alt="Resultado">
    <custom-score></custom-score>
    <custom-button class="again">Volver a jugar</custom-button>
  </div>
`;
        this.shadow.querySelector(".again")?.addEventListener("click", ()=>{
            (0, _router.goTo)("/move");
        });
    }
}
if (!customElements.get("result-page")) customElements.define("result-page", ResultPage);

},{"../../state":"dWXvP","../../router":"4wVP1","48b5d0c670f06501":"kZhT2","49cea130d05d1284":"6Wr1C","32d5d4d8ef7edc1c":"1cHKb","385b4a8ede5f7023":"fjATb","45052c9555373746":"hCV58","e66feea1db7e0a42":"fSrpX"}],"dWXvP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const initialState = {
    currentGame: null,
    history: [],
    score: {
        me: 0,
        computer: 0
    }
};
const state = {
    data: initialState,
    listeners: [],
    init () {
        const saved = localStorage.getItem("ppt-state");
        if (saved) this.data = JSON.parse(saved);
    },
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
        localStorage.setItem("ppt-state", JSON.stringify(newState));
        this.listeners.forEach((cb)=>cb(this.data));
    },
    subscribe (cb) {
        this.listeners.push(cb);
    },
    setMove (myPlay, computerPlay) {
        const newGame = {
            myPlay,
            computerPlay
        };
        const result = this.winner(newGame.myPlay, newGame.computerPlay);
        const newState = {
            ...this.data
        };
        newState.currentGame = newGame;
        newState.history = [
            ...newState.history,
            newGame
        ];
        if (result === "ganaste") newState.score.me += 1;
        if (result === "perdiste") newState.score.computer += 1;
        this.setState(newState);
    },
    randomPlay () {
        const plays = [
            "piedra",
            "papel",
            "tijera"
        ];
        const index = Math.floor(Math.random() * plays.length);
        return plays[index];
    },
    winner (myPlay, computerPlay) {
        if (myPlay === computerPlay) return "empataron";
        if (myPlay === "tijera" && computerPlay === "papel" || myPlay === "papel" && computerPlay === "piedra" || myPlay === "piedra" && computerPlay === "tijera") return "ganaste";
        return "perdiste";
    },
    resetScore () {
        const newState = {
            ...this.data
        };
        newState.score = {
            me: 0,
            computer: 0
        };
        this.setState(newState);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kZhT2":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("piedra.6971c55a.png") + "?" + Date.now();

},{}],"6Wr1C":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("papel.8a0e6fb2.png") + "?" + Date.now();

},{}],"1cHKb":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("tijera.5288942d.png") + "?" + Date.now();

},{}],"fjATb":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("win.168808eb.png") + "?" + Date.now();

},{}],"hCV58":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("lose.e50de111.png") + "?" + Date.now();

},{}],"fSrpX":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("draw.93f2cdc6.png") + "?" + Date.now();

},{}],"e3Wbk":[function(require,module,exports,__globalThis) {
class CustomTitle extends HTMLElement {
    static get observedAttributes() {
        return [
            "value"
        ];
    }
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    attributeChangedCallback() {
        this.render();
    }
    render() {
        const variant = this.getAttribute("value") ?? "title-font";
        this.shadow.innerHTML = `
    <style>
      .title-font {
        font-family: "AmericanTypewriter", serif;
        color: var(--color-principal);
        font-weight: 700;
        font-size: 80px;
      }

      .players-font {
        font-family: "AmericanTypewriter", serif;
        color: #000000;
        font-size: 32px;
      }

      ::slotted(.muted) {
        opacity: var(--muted-opacity);
      }
      
    </style>

    <h1 class="${variant}">
      <slot></slot>
    </h1>
  `;
    }
}
customElements.define("custom-text", CustomTitle);

},{}],"j53Vj":[function(require,module,exports,__globalThis) {
var _router = require("../../router");
const router = (0, _router.initRouter)();
class CustomButton extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        this.shadow.innerHTML = `
      <style>
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: auto;
          height: 87px;
          background-color: #006CFC;
          border: 10px solid #001997;
          border-radius: 10px;
          font-family: "AmericanTypewriter", serif;
          color: #D8FCFC;
          padding: 12px 24px;
          font-size: 45px;
          font-weight: 400;          
        }
      </style>

      <button>
        <slot></slot>
      </button>
    `;
        this.shadow.querySelector("button")?.addEventListener("click", ()=>{
            (0, _router.goTo)("/instructions");
        });
    }
}
customElements.define("custom-button", CustomButton);

},{"../../router":"4wVP1"}],"20dbn":[function(require,module,exports,__globalThis) {
class PlayerOptions extends HTMLElement {
    constructor(){
        super(), this.selectedOption = null;
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
        this.addListeners();
    }
    render() {
        const piedra = new URL(require("3493c98552e0b6d3")).href;
        const papel = new URL(require("1da233985c438953")).href;
        const tijera = new URL(require("14176d0d46adc752")).href;
        this.shadow.innerHTML = `
      <style>
        :host {
          display: block;
          position: absolute;
          bottom: 0;
          width: 100%;
        }

        .container {
          display: flex;
          justify-content: center;
          gap: 32px;
          height: 131px;
          overflow: hidden;
        }

        img {
          width: 100px;
          transform: translateY(40px);
          transition: transform 0.25s ease, opacity 0.25s ease;
          cursor: pointer;
        }

        img:hover {
          transform: translateY(0);
        }

        img.selected {
          transform: translateY(0);
          opacity: 1;
        }

        img.not-selected {
          opacity: 0.3;
        }

        img.hidden {
          opacity: 0;
          transform: translateY(120px);
          pointer-events: none;
        }

        :host(.locked) {
          display: flex;
          justify-content: center;
        }

        :host(.locked) .container {
          justify-content: center;
          gap: 0;
        }

        :host(.locked) img.selected {
          transform: translateY(0);
        }

      </style>

      <div class="container">
        <img data-option="piedra" src="${piedra}" />
        <img data-option="papel" src="${papel}" />
        <img data-option="tijera" src="${tijera}" />
      </div>
    `;
    }
    addListeners() {
        const images = this.shadow.querySelectorAll("img");
        images.forEach((img)=>{
            img.addEventListener("click", ()=>{
                if (this.selectedOption) return;
                const option = img.dataset.option;
                this.selectedOption = option;
                images.forEach((i)=>{
                    if (i.dataset.option === option) {
                        i.classList.add("selected");
                        i.classList.remove("not-selected");
                    } else i.classList.add("not-selected");
                });
                this.disable();
                this.dispatchEvent(new CustomEvent("select", {
                    detail: option,
                    bubbles: true,
                    composed: true
                }));
            });
        });
    }
    disable() {
        const images = this.shadow.querySelectorAll("img");
        images.forEach((img)=>{
            img.style.pointerEvents = "none";
        });
    }
    showOnly(option) {
        this.classList.add("locked");
        const images = this.shadow.querySelectorAll("img");
        images.forEach((img)=>{
            if (img.dataset.option === option) {
                img.classList.add("selected");
                img.classList.remove("not-selected", "hidden");
            } else {
                img.classList.add("hidden");
                img.classList.remove("selected", "not-selected");
            }
        });
    }
}
customElements.define("player-options", PlayerOptions);

},{"3493c98552e0b6d3":"kZhT2","1da233985c438953":"6Wr1C","14176d0d46adc752":"1cHKb"}],"adarX":[function(require,module,exports,__globalThis) {
class CounterCircle extends HTMLElement {
    constructor(){
        super(), this.total = 3, this.radius = 45, this.circumference = 2 * Math.PI * this.radius;
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        if (this.hasAttribute("seconds")) this.total = Number(this.getAttribute("seconds"));
        this.render();
        this.start();
    }
    start() {
        const circle = this.shadow.querySelector(".progress");
        let elapsed = 0;
        this.intervalId = window.setInterval(()=>{
            elapsed++;
            const offset = this.circumference - this.circumference * elapsed / this.total;
            circle.style.strokeDashoffset = String(offset);
            const text = this.shadow.querySelector(".number");
            if (text) text.textContent = String(this.total - elapsed);
            if (elapsed >= this.total) {
                clearInterval(this.intervalId);
                this.dispatchEvent(new CustomEvent("finish"));
            }
        }, 1000);
    }
    hide() {
        this.style.opacity = "0";
        this.style.pointerEvents = "none";
    }
    render() {
        this.shadow.innerHTML = `
      <style>
        :host {
          display: inline-block;
          width: 243px;
          height: 243px;
          position: relative;
        }

        img {
          display: none;  
          width: 100%;
          height: 100%;
          object-fit: contain;
          position: absolute;
          inset: 0;
        }

        svg {
          position: absolute;
          inset: 0;
          transform: rotate(-90deg);
        }

        .number {
          font-size: 28px;
          font-weight: bold;
          dominant-baseline: middle;
          text-anchor: middle;
        }

        .progress {
          fill: none;
          stroke: black;
          stroke-width: 8;
          stroke-dasharray: ${this.circumference};
          stroke-dashoffset: ${this.circumference};
          transition: stroke-dashoffset 1s linear;
        }
      </style>

      <img src="/assets/count.png" />

      <svg viewBox="0 0 120 120">
        <circle
          class="progress"
          cx="60"
          cy="60"
          r="${this.radius}"
        />
        <text
          class="number"
          x="60"
          y="60"
          transform="rotate(90 60 60)"
        >
          ${this.total}
        </text>
      </svg>
    `;
    }
}
customElements.define("counter-circle", CounterCircle);

},{}],"jCZqs":[function(require,module,exports,__globalThis) {
var _state = require("../../state");
var _router = require("../../router");
class Move extends HTMLElement {
    constructor(){
        super(), this.selectedMove = null;
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.render();
        const options = this.shadow.querySelector("player-options");
        const counter = this.shadow.querySelector("counter-circle");
        let selectedMove = null;
        this.shadow.addEventListener("select", (e)=>{
            selectedMove = e.detail;
        });
        counter?.addEventListener("finish", ()=>{
            const playerMove = selectedMove ?? (0, _state.state).randomPlay();
            const computerMove = (0, _state.state).randomPlay();
            counter.hide();
            options.showOnly(playerMove);
            const computerHand = this.shadow.querySelector("computer-option");
            computerHand.show(computerMove);
            (0, _state.state).setMove(playerMove, computerMove);
            setTimeout(()=>{
                (0, _router.goTo)("/result");
            }, 1000);
        });
    }
    render() {
        this.shadow.innerHTML = `
      <style>
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
        }
      </style>

      <div class="container">
        <computer-option></computer-option>
        <player-options></player-options>
        <counter-circle seconds="3"></counter-circle>
      </div>
    `;
    }
}
customElements.define("move-page", Move);

},{"../../state":"dWXvP","../../router":"4wVP1"}],"cGHFb":[function(require,module,exports,__globalThis) {
var _state = require("../../state");
class Score extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.render();
        (0, _state.state).subscribe(()=>{
            this.render();
        });
    }
    render() {
        const { score } = (0, _state.state).getState();
        const regularFont = new URL(require("19dd7449228a8a8a")).href;
        const boldFont = new URL(require("3149e70d228b0a57")).href;
        this.shadow.innerHTML = `
      <style>
        @font-face {
          font-family: "AmericanTypewriter";
          src: url("${regularFont}") format("truetype");
          font-weight: 400;
          font-style: normal;
        }

        @font-face {
          font-family: "AmericanTypewriter";
          src: url("${boldFont}") format("truetype");
          font-weight: 700;
          font-style: normal;
        }

        :host {
          font-family: "AmericanTypewriter", serif;
          display: block;
        }

        .score {
          border: 10px solid #000;
          border-radius: 10px;
          padding: 12px 16px;
          width: 220px;
          background-color: white;
          font-family: inherit;            
        }

        .title {
          text-align: center;
          font-size: 22px;
          margin-bottom: 10px;
          font-weight: 700;
          color: #000000;
        }

        .row {
          display: flex;
          justify-content: flex-end;
          gap: 20px;
          font-size: 18px;
          margin: 6px 0;
          font-weight: 400;
          color: #000000;
        }
      </style>

      <div class="score">
        <div class="title">Score</div>
        <div class="row">
          <span>Vos:</span>
          <span>${score.me}</span>
        </div>
        <div class="row">
          <span>Maquina:</span>
          <span>${score.computer}</span>
        </div>
      </div>
    `;
    }
}
if (!customElements.get("custom-score")) customElements.define("custom-score", Score);

},{"../../state":"dWXvP","19dd7449228a8a8a":"aTSLw","3149e70d228b0a57":"lPJwB"}],"aTSLw":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("American-Typewriter-Regular.7b65f622.ttf") + "?" + Date.now();

},{}],"lPJwB":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("American-Typewriter-Bold.6c9303eb.ttf") + "?" + Date.now();

},{}],"5UW7b":[function(require,module,exports,__globalThis) {
class ComputerOption extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        this.shadow.innerHTML = `
      <style>
        :host {
          position: absolute;
          top: 0;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        img {
          width: 120px;
          transform: rotate(180deg) translateY(40px);
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        img.visible {
          opacity: 1;
          transform: rotate(180deg) translateY(0);
        }
      </style>

      <img />
    `;
    }
    show(move) {
        const srcMap = {
            piedra: new URL(require("f8e075979303d693")).href,
            papel: new URL(require("1e1534657735da9f")).href,
            tijera: new URL(require("e561aa92033dbaa3")).href
        };
        const img = this.shadow.querySelector("img");
        img.src = srcMap[move];
        img.classList.add("visible");
    }
}
customElements.define("computer-option", ComputerOption);

},{"f8e075979303d693":"kZhT2","1e1534657735da9f":"6Wr1C","e561aa92033dbaa3":"1cHKb"}]},["3dtlh","gH3Lb"], "gH3Lb", "parcelRequirebd53", {}, "./", "/")

//# sourceMappingURL=desafio-PPT.34df32e0.js.map
