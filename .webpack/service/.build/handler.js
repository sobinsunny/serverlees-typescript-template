(function (e, a) { for (var i in a)
    e[i] = a[i]; }(exports, /******/ (function (modules) {
    /******/ // The module cache
    /******/ var installedModules = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) {
            /******/ return installedModules[moduleId].exports;
            /******/ }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = installedModules[moduleId] = {
            /******/ i: moduleId,
            /******/ l: false,
            /******/ exports: {}
            /******/ 
        };
        /******/
        /******/ // Execute the module function
        /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/ module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports;
        /******/ 
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/ __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/ __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/ __webpack_require__.d = function (exports, name, getter) {
        /******/ if (!__webpack_require__.o(exports, name)) {
            /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
            /******/ }
        /******/ 
    };
    /******/
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
        /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/ }
        /******/ Object.defineProperty(exports, '__esModule', { value: true });
        /******/ 
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/ __webpack_require__.t = function (value, mode) {
        /******/ if (mode & 1)
            value = __webpack_require__(value);
        /******/ if (mode & 8)
            return value;
        /******/ if ((mode & 4) && typeof value === 'object' && value && value.__esModule)
            return value;
        /******/ var ns = Object.create(null);
        /******/ __webpack_require__.r(ns);
        /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/ if (mode & 2 && typeof value != 'string')
            for (var key in value)
                __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
        /******/ return ns;
        /******/ 
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function (module) {
        /******/ var getter = module && module.__esModule ?
            /******/ function getDefault() { return module['default']; } :
            /******/ function getModuleExports() { return module; };
        /******/ __webpack_require__.d(getter, 'a', getter);
        /******/ return getter;
        /******/ 
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/ __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ // __webpack_public_path__
    /******/ __webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/ return __webpack_require__(__webpack_require__.s = "./handler.ts");
    /******/ 
})({
    /***/ "./handler.ts": 
    /*!********************!*\
      !*** ./handler.ts ***!
      \********************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar awsAdapter_1 = __webpack_require__(/*! ./src/awsAdapter */ \"./src/awsAdapter.ts\");\nexports.hello = function (event, _context) { return __awaiter(void 0, void 0, void 0, function () {\n    var adapter;\n    return __generator(this, function (_a) {\n        adapter = new awsAdapter_1.default();\n        console.log(adapter.getconfig());\n        console.log(event);\n        return [2 /*return*/, {\n                statusCode: 200,\n                body: JSON.stringify({\n                    message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',\n                    input: event,\n                }, null, 2),\n            }];\n    });\n}); };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oYW5kbGVyLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaGFuZGxlci50cz8zNmI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBd3NBZGFwdGVyIGZyb20gJy4vc3JjL2F3c0FkYXB0ZXInO1xuXG5leHBvcnQgY29uc3QgaGVsbG8gPSBhc3luYyAoZXZlbnQsIF9jb250ZXh0KSA9PiB7XG5cbiAgY29uc3QgYWRhcHRlciA9IG5ldyBBd3NBZGFwdGVyKCk7XG5cbiAgY29uc29sZS5sb2coYWRhcHRlci5nZXRjb25maWcoKSlcbiAgY29uc29sZS5sb2coZXZlbnQpXG4gIHJldHVybiB7XG4gICAgc3RhdHVzQ29kZTogMjAwLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG1lc3NhZ2U6ICdHbyBTZXJ2ZXJsZXNzIFdlYnBhY2sgKFR5cGVzY3JpcHQpIHYxLjAhIFlvdXIgZnVuY3Rpb24gZXhlY3V0ZWQgc3VjY2Vzc2Z1bGx5IScsXG4gICAgICBpbnB1dDogZXZlbnQsXG4gICAgfSwgbnVsbCwgMiksXG4gIH07XG59XG4gICAgIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7OztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./handler.ts\n");
        /***/ 
    }),
    /***/ "./src/awsAdapter.ts": 
    /*!***************************!*\
      !*** ./src/awsAdapter.ts ***!
      \***************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar AwsAdapter = /** @class */ (function () {\n    function AwsAdapter() {\n    }\n    AwsAdapter.prototype.getconfig = function () {\n        var isDone = true;\n        console.log(\"==========>\", isDone);\n        return true;\n    };\n    return AwsAdapter;\n}());\nexports.default = AwsAdapter;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXdzQWRhcHRlci50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hd3NBZGFwdGVyLnRzP2M5MzIiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXdzQWRhcHRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIFxuICAgIH1cbiAgICBnZXRjb25maWcoKXtcbiAgICAgICAgY29uc3QgIGlzRG9uZTogYm9vbGVhbiA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT5cIixpc0RvbmUpXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBd3NBZGFwdGVyOyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/awsAdapter.ts\n");
        /***/ 
    })
    /******/ 
})));
//# sourceMappingURL=handler.js.map