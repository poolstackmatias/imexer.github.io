"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/login/page.tsx":
/*!********************************!*\
  !*** ./src/app/login/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nconst getCookieValue = (name)=>{\n    const value = \"; \".concat(document.cookie);\n    const parts = value.split(\"; \".concat(name, \"=\"));\n    if (parts.length === 2) return parts.pop().split(\";\").shift();\n};\nfunction deleteCookie(name, path, domain) {\n    if (getCookieValue(name)) {\n        document.cookie = name + \"=; Max-Age=-99999999;\" + (path ? \"; path=\" + path : \"\") + (domain ? \"; domain=\" + domain : \"\");\n    }\n}\nconst KakaoLogin = ()=>{\n    const handleKakaoLogin = ()=>{\n        const kakaoAuthUrl = \"https://api.oz-02-main-04.xyz/api/v1/users/kakao/\";\n        window.location.href = kakaoAuthUrl;\n    };\n    const cookieDelete = ()=>{\n        deleteCookie(\"access_token\", \"/\", \"localhost:3000\");\n        deleteCookie(\"refresh_token\", \"/\", \"localhost:3000\");\n        console.log(\"deleted\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleKakaoLogin,\n                children: \"로그인\"\n            }, void 0, false, {\n                fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/login/page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: cookieDelete,\n                children: \"cookie delete\"\n            }, void 0, false, {\n                fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/login/page.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/login/page.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_c = KakaoLogin;\n/* harmony default export */ __webpack_exports__[\"default\"] = (KakaoLogin);\nvar _c;\n$RefreshReg$(_c, \"KakaoLogin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsTUFBTUEsaUJBQWlCLENBQUNDO0lBQ3RCLE1BQU1DLFFBQVEsS0FBcUIsT0FBaEJDLFNBQVNDLE1BQU07SUFDbEMsTUFBTUMsUUFBUUgsTUFBTUksS0FBSyxDQUFDLEtBQVUsT0FBTEwsTUFBSztJQUNwQyxJQUFJSSxNQUFNRSxNQUFNLEtBQUssR0FBRyxPQUFPRixNQUFNRyxHQUFHLEdBQUlGLEtBQUssQ0FBQyxLQUFLRyxLQUFLO0FBQzlEO0FBQ0EsU0FBU0MsYUFBYVQsSUFBUyxFQUFFVSxJQUFTLEVBQUVDLE1BQVc7SUFDckQsSUFBSVosZUFBZUMsT0FBTztRQUN4QkUsU0FBU0MsTUFBTSxHQUNiSCxPQUFPLDBCQUEyQlUsQ0FBQUEsT0FBTyxZQUFZQSxPQUFPLEVBQUMsSUFBTUMsQ0FBQUEsU0FBUyxjQUFjQSxTQUFTLEVBQUM7SUFDeEc7QUFDRjtBQUNBLE1BQU1DLGFBQWE7SUFDakIsTUFBTUMsbUJBQW1CO1FBQ3ZCLE1BQU1DLGVBQWdCO1FBQ3RCQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBR0g7SUFDekI7SUFDQSxNQUFNSSxlQUFlO1FBQ25CVCxhQUFhLGdCQUFnQixLQUFLO1FBQ2xDQSxhQUFhLGlCQUFpQixLQUFLO1FBQ25DVSxRQUFRQyxHQUFHLENBQUM7SUFDZDtJQUNBLHFCQUNFLDhEQUFDQzs7WUFDRTswQkFDRCw4REFBQ0M7Z0JBQU9DLFNBQVNWOzBCQUFrQjs7Ozs7OzBCQUNuQyw4REFBQ1M7Z0JBQU9DLFNBQVNMOzBCQUFjOzs7Ozs7Ozs7Ozs7QUFHckM7S0FqQk1OO0FBbUJOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3g/ZmM2MyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5jb25zdCBnZXRDb29raWVWYWx1ZSA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgdmFsdWUgPSBgOyAke2RvY3VtZW50LmNvb2tpZX1gO1xuICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KGA7ICR7bmFtZX09YCk7XG4gIGlmIChwYXJ0cy5sZW5ndGggPT09IDIpIHJldHVybiBwYXJ0cy5wb3AoKSEuc3BsaXQoJzsnKS5zaGlmdCgpO1xufTtcbmZ1bmN0aW9uIGRlbGV0ZUNvb2tpZShuYW1lOiBhbnksIHBhdGg6IGFueSwgZG9tYWluOiBhbnkpIHtcbiAgaWYgKGdldENvb2tpZVZhbHVlKG5hbWUpKSB7XG4gICAgZG9jdW1lbnQuY29va2llID1cbiAgICAgIG5hbWUgKyAnPTsgTWF4LUFnZT0tOTk5OTk5OTk7JyArIChwYXRoID8gJzsgcGF0aD0nICsgcGF0aCA6ICcnKSArIChkb21haW4gPyAnOyBkb21haW49JyArIGRvbWFpbiA6ICcnKTtcbiAgfVxufVxuY29uc3QgS2FrYW9Mb2dpbiA9ICgpID0+IHtcbiAgY29uc3QgaGFuZGxlS2FrYW9Mb2dpbiA9ICgpID0+IHtcbiAgICBjb25zdCBrYWthb0F1dGhVcmwgPSBgaHR0cHM6Ly9hcGkub3otMDItbWFpbi0wNC54eXovYXBpL3YxL3VzZXJzL2tha2FvL2A7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBrYWthb0F1dGhVcmw7XG4gIH07XG4gIGNvbnN0IGNvb2tpZURlbGV0ZSA9ICgpID0+IHtcbiAgICBkZWxldGVDb29raWUoJ2FjY2Vzc190b2tlbicsICcvJywgJ2xvY2FsaG9zdDozMDAwJyk7XG4gICAgZGVsZXRlQ29va2llKCdyZWZyZXNoX3Rva2VuJywgJy8nLCAnbG9jYWxob3N0OjMwMDAnKTtcbiAgICBjb25zb2xlLmxvZygnZGVsZXRlZCcpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7JyAnfVxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVLYWthb0xvZ2lufT7roZzqt7jsnbg8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17Y29va2llRGVsZXRlfT5jb29raWUgZGVsZXRlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBLYWthb0xvZ2luO1xuIl0sIm5hbWVzIjpbImdldENvb2tpZVZhbHVlIiwibmFtZSIsInZhbHVlIiwiZG9jdW1lbnQiLCJjb29raWUiLCJwYXJ0cyIsInNwbGl0IiwibGVuZ3RoIiwicG9wIiwic2hpZnQiLCJkZWxldGVDb29raWUiLCJwYXRoIiwiZG9tYWluIiwiS2FrYW9Mb2dpbiIsImhhbmRsZUtha2FvTG9naW4iLCJrYWthb0F1dGhVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJjb29raWVEZWxldGUiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.tsx\n"));

/***/ })

});