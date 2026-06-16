/**
 * Aspect Ratio + Canvas Position Fix
 *
 * 1. Patches Browser.clientWidth/clientHeight to return portrait-proportioned
 *    values (750:1334 ratio), fixing the WebGL framebuffer aspect ratio.
 *
 * 2. Patches _canvasTransform to account for the canvas's position in the
 *    viewport, fixing mouse/touch coordinate mapping when the game is not
 *    at viewport (0,0).
 *
 * This MUST run AFTER laya.js loads but BEFORE jump3d.max.js
 * calls new LayaAir3D().
 */
(function() {
    console.log('[fix-aspect] Waiting for Laya.Browser...');

    var DESIGN_W = 750;
    var DESIGN_H = 1334;
    var _canvasTransformPatched = false;

    // ---- Phase 1: Patch Browser dimensions for portrait aspect ratio ----
    function patchBrowser() {
        if (!window.Laya || !window.Laya.Browser) {
            setTimeout(patchBrowser, 10);
            return;
        }

        var Browser = window.Laya.Browser;

        Object.defineProperty(Browser, 'clientWidth', {
            get: function() {
                var vw = window.innerWidth;
                var vh = window.innerHeight;
                return Math.min(vw, vh * DESIGN_W / DESIGN_H);
            },
            configurable: true
        });

        Object.defineProperty(Browser, 'clientHeight', {
            get: function() {
                var vw = window.innerWidth;
                var vh = window.innerHeight;
                return Math.min(vh, vw * DESIGN_H / DESIGN_W);
            },
            configurable: true
        });

        console.log('[fix-aspect] Browser.clientWidth/Height patched');
        console.log('[fix-aspect]   inner=' + window.innerWidth + 'x' + window.innerHeight);
        console.log('[fix-aspect]   clientWidth=' + Browser.clientWidth + ' clientHeight=' + Browser.clientHeight);

        // Start phase 2
        patchCanvasTransform();
    }

    // ---- Phase 2: Patch _canvasTransform for canvas viewport offset ----
    function applyPatch(ct) {
        if (ct.__patched) return;
        var origInvert = ct.invertTransformPoint;

        ct.invertTransformPoint = function(point) {
            var canvas = (window.Laya && window.Laya.Render && window.Laya.Render._mainCanvas) ?
                window.Laya.Render._mainCanvas.source : null;
            if (!canvas) {
                canvas = document.querySelector('canvas');
            }
            if (canvas) {
                var rect = canvas.getBoundingClientRect();
                point.x -= rect.left;
                point.y -= rect.top;
            }
            return origInvert.call(this, point);
        };
        ct.__patched = true;
    }

    function patchCanvasTransform() {
        var stage = window.Laya.stage;
        if (!stage || !stage._canvasTransform) {
            setTimeout(patchCanvasTransform, 50);
            return;
        }

        var ct = stage._canvasTransform;
        if (!ct.__patched) {
            applyPatch(ct);
            _canvasTransformPatched = true;
            console.log('[fix-aspect] _canvasTransform.invertTransformPoint patched');
        }

        // Re-apply on resize in case the transform gets rebuilt
        window.addEventListener('resize', function() {
            var ct2 = window.Laya.stage && window.Laya.stage._canvasTransform;
            if (ct2 && !ct2.__patched) {
                applyPatch(ct2);
            }
        });
    }

    patchBrowser();
})();
