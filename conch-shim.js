/**
 * Conch/LayaNative Compatibility Shim for Web
 *
 * The LayaAir engine was wrapped in LayaNative (Conch) for the Android APK.
 * On web, we bypass the native runtime entirely. This shim provides minimal
 * stubs for any Conch APIs that the engine might call without proper guards.
 *
 * Key design choice: we deliberately leave window.conch as UNDEFINED.
 * This causes all `if (conch)` / `if (window.conch)` guards to fail,
 * making the engine use its standard WebGL rendering path.
 *
 * We only stub what might be accessed without a guard.
 */

(function() {
    console.log('[conch-shim] Setting up web compatibility layer');

    // ============================================================
    // CRITICAL: Do NOT set ConchRenderType to a value that has bit 0x04.
    // The game's native config.js sets ConchRenderType = 6 (0b0110),
    // which makes Render.isConchApp = true. On web we want isConchApp = false
    // so the engine uses standard WebGL, not the Conch rendering backend.
    //
    // By NOT setting this at all, (undefined & 4) = 0, so isConchApp = false.
    // ============================================================

    // Provide a minimal conchConfig for any unguarded access.
    // In the engine, most conchConfig accesses are guarded by
    // `Browser.window.conch &&` or `window.conch ?`, but we provide
    // stubs just in case.
    window.conchConfig = {
        getOS: function() {
            return 'Conch-web';
        },
        getRuntimeVersion: function() {
            return '2.1.3.1-web';
        },
        getIsPlug: function() {
            return false;
        },
        // localizable: when false, the game loads from the network.
        // When true, it tries to use local assets via the DCC system.
        // For web, we want local assets to work without the DCC cache.
        localizable: true,
        setScreenOrientation: function(orientation) {
            // No-op on web — orientation is handled by CSS/viewport meta
            console.log('[conch-shim] setScreenOrientation(' + orientation + ') — ignored');
        },
        setLimitFPS: function() {},
        setSlowFrame: function() {},
        setMouseFrame: function() {}
    };

    // The game's bootstrapper (index.js in the APK's assets/scripts/)
    // calls various Conch APIs. On web, we skip that bootstrapper entirely.
    // But we provide a minimal AppCache stub in case the game code references it.

    // Some game code checks for localStorage — provide a polyfill for
    // the Conch-specific LocalStorage that wraps standard localStorage.
    // (LayaAir's LocalStorage already uses window.localStorage on web,
    // so this should be handled by the engine.)

    // The game code calls GameSDK.init() which references:
    //   Browser.onAndroid — engine provides this via user agent detection
    //   PlatformClass.createClass("demo.MainActivity") — only on Android
    // These calls are guarded by `if (Browser.onAndroid)`, so on web
    // they're skipped automatically.

    // Stub the PlatformClass in case it's referenced without Android guard
    window.PlatformClass = {
        createClass: function(className) {
            console.warn('[conch-shim] PlatformClass.createClass("' + className + '") called on web — returning stub');
            return {
                call: function() {
                    console.warn('[conch-shim] PlatformClass.call("' +
                        Array.prototype.join.call(arguments, '", "') + '") — ignored on web');
                }
            };
        }
    };

    // Filesystem stubs — the engine's font initialization code in the native
    // bootstrapper calls these. On web, font loading uses CSS @font-face.
    window.fs_exists = function(path) {
        console.warn('[conch-shim] fs_exists("' + path + '") — returning false');
        return false;
    };
    window.fs_mkdir = function(path) {
        console.warn('[conch-shim] fs_mkdir("' + path + '") — ignored');
    };
    window.fs_writeFileSync = function(path, data) {
        console.warn('[conch-shim] fs_writeFileSync("' + path + '") — ignored');
    };

    // The native bootstrapper stores version info here
    window._conchInfo = { version: '2.1.3.1' };

    // Stub for conch.presetUrl — if this is falsy, the native bootstrapper
    // uses a default Layabox URL. On web we skip the bootstrapper, so this
    // shouldn't matter, but stub it anyway.
    // window.conch is intentionally left undefined so that all
    // `if (window.conch)` checks fail.

    console.log('[conch-shim] Web compatibility layer ready');
    console.log('[conch-shim] Render.isConchApp will be false → engine uses WebGL');
    console.log('[conch-shim] Browser.onAndroid will be false → SDK calls skipped');
})();
