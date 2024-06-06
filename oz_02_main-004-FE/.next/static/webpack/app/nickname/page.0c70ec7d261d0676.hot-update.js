"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/nickname/page",{

/***/ "(app-pages-browser)/./src/app/nickname/page.tsx":
/*!***********************************!*\
  !*** ./src/app/nickname/page.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jotai */ \"(app-pages-browser)/./node_modules/jotai/esm/react.mjs\");\n/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms */ \"(app-pages-browser)/./src/app/atoms.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Nickname() {\n    _s();\n    const [nickName, setNickName] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_atoms__WEBPACK_IMPORTED_MODULE_2__.nickNameAtom);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const inputNickName = (e)=>{\n        setInputValue(e.target.value);\n    };\n    const saveNickname = ()=>{\n        setError(\"\");\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/check-nickname\", {\n            nickname: inputValue\n        }).then((response)=>{\n            const { isDuplicate } = response.data;\n            if (isDuplicate) {\n                setError(\"이미 사용 중인 닉네임입니다.\");\n            } else {\n                setNickName(inputValue);\n                console.log(inputValue);\n                axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"https://api.oz-02-main-04.xyz/api/v1/users/nickname\", {\n                    nickname: inputValue\n                }).then((response)=>{\n                    setNickName(inputValue);\n                }).catch((error)=>{\n                    console.error(\"Error submitting nickname:\", error);\n                });\n            }\n        }).catch((error)=>{\n            console.error(\"Error checking nickname:\", error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center h-screen mx-12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"w-full max-w-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xl font-bold mb-4\",\n                    children: \"닉네임을 입력해 주세요\"\n                }, void 0, false, {\n                    fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/nickname/page.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"border border-gray-300 rounded-md p-2 mb-2 focus:outline-none focus:border-blue-500 w-full\",\n                    type: \"text\",\n                    id: \"nickname\",\n                    onChange: (e)=>inputNickName(e)\n                }, void 0, false, {\n                    fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/nickname/page.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-red-500 mb-2\",\n                    children: error\n                }, void 0, false, {\n                    fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/nickname/page.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 19\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            href: \"/\",\n                            className: \"mr-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"건너뛰기\"\n                            }, void 0, false, {\n                                fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/nickname/page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/nickname/page.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: saveNickname,\n                            children: \"완료\"\n                        }, void 0, false, {\n                            fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/nickname/page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/nickname/page.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/nickname/page.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/youngmatias/Documents/GitHub/imexer.github.io/oz_02_main-004-FE/src/app/nickname/page.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(Nickname, \"f1nRpOF8iVOMyJRRayVvou0Wixo=\", false, function() {\n    return [\n        jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom\n    ];\n});\n_c = Nickname;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nickname);\nvar _c;\n$RefreshReg$(_c, \"Nickname\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbmlja25hbWUvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNpQztBQUNQO0FBQ007QUFDUTtBQUNYO0FBQ0g7QUFFMUIsU0FBU007O0lBQ1AsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLDhDQUFPQSxDQUFDQyxnREFBWUE7SUFDcEQsTUFBTSxDQUFDTSxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNYSxnQkFBZ0IsQ0FBQ0M7UUFDckJKLGNBQWNJLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUM5QjtJQUVBLE1BQU1DLGVBQWU7UUFDbkJMLFNBQVM7UUFFVFgsNkNBQUtBLENBQ0ZpQixJQUFJLENBQUMsdUJBQXVCO1lBQUVDLFVBQVVWO1FBQVcsR0FDbkRXLElBQUksQ0FBQ0MsQ0FBQUE7WUFDSixNQUFNLEVBQUVDLFdBQVcsRUFBRSxHQUFHRCxTQUFTRSxJQUFJO1lBQ3JDLElBQUlELGFBQWE7Z0JBQ2ZWLFNBQVM7WUFDWCxPQUFPO2dCQUNMSixZQUFZQztnQkFDWmUsUUFBUUMsR0FBRyxDQUFDaEI7Z0JBRVpSLDZDQUFLQSxDQUNGaUIsSUFBSSxDQUFDLHVEQUF1RDtvQkFBRUMsVUFBVVY7Z0JBQVcsR0FDbkZXLElBQUksQ0FBQ0MsQ0FBQUE7b0JBQ0piLFlBQVlDO2dCQUNkLEdBQ0NpQixLQUFLLENBQUNmLENBQUFBO29CQUNMYSxRQUFRYixLQUFLLENBQUMsOEJBQThCQTtnQkFDOUM7WUFDSjtRQUNGLEdBQ0NlLEtBQUssQ0FBQ2YsQ0FBQUE7WUFDTGEsUUFBUWIsS0FBSyxDQUFDLDRCQUE0QkE7UUFDNUM7SUFDSjtJQUVBLHFCQUNFLDhEQUFDZ0I7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBS0QsV0FBVTs7OEJBQ2QsOERBQUNFO29CQUFHRixXQUFVOzhCQUF5Qjs7Ozs7OzhCQUN2Qyw4REFBQ0c7b0JBQ0NILFdBQVU7b0JBQ1ZJLE1BQUs7b0JBQ0xDLElBQUc7b0JBQ0hDLFVBQVVwQixDQUFBQSxJQUFLRCxjQUFjQzs7Ozs7O2dCQUU5QkgsdUJBQVMsOERBQUN3QjtvQkFBRVAsV0FBVTs4QkFBcUJqQjs7Ozs7OzhCQUM1Qyw4REFBQ2dCO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ3hCLGlEQUFJQTs0QkFBQ2dDLE1BQUs7NEJBQUlSLFdBQVU7c0NBQ3ZCLDRFQUFDUzswQ0FBTzs7Ozs7Ozs7Ozs7c0NBR1YsOERBQUNBOzRCQUFPQyxTQUFTckI7c0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pDO0dBMURTWDs7UUFDeUJKLDBDQUFPQTs7O0tBRGhDSTtBQTREVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL25pY2tuYW1lL3BhZ2UudHN4PzBjNjEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlQXRvbSB9IGZyb20gJ2pvdGFpJztcbmltcG9ydCB7IG5pY2tOYW1lQXRvbSB9IGZyb20gJy4uL2F0b21zJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBOaWNrbmFtZSgpIHtcbiAgY29uc3QgW25pY2tOYW1lLCBzZXROaWNrTmFtZV0gPSB1c2VBdG9tKG5pY2tOYW1lQXRvbSk7XG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaW5wdXROaWNrTmFtZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IHNhdmVOaWNrbmFtZSA9ICgpID0+IHtcbiAgICBzZXRFcnJvcignJyk7XG5cbiAgICBheGlvc1xuICAgICAgLnBvc3QoJy9hcGkvY2hlY2stbmlja25hbWUnLCB7IG5pY2tuYW1lOiBpbnB1dFZhbHVlIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaXNEdXBsaWNhdGUgfSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIGlmIChpc0R1cGxpY2F0ZSkge1xuICAgICAgICAgIHNldEVycm9yKCfsnbTrr7gg7IKs7JqpIOykkeyduCDri4nrhKTsnoTsnoXri4jri6QuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0Tmlja05hbWUoaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgY29uc29sZS5sb2coaW5wdXRWYWx1ZSk7XG5cbiAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QoJ2h0dHBzOi8vYXBpLm96LTAyLW1haW4tMDQueHl6L2FwaS92MS91c2Vycy9uaWNrbmFtZScsIHsgbmlja25hbWU6IGlucHV0VmFsdWUgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgc2V0Tmlja05hbWUoaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc3VibWl0dGluZyBuaWNrbmFtZTonLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIG5pY2tuYW1lOicsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiBteC0xMlwiPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LW1kXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XCI+64uJ64Sk7J6E7J2EIOyeheugpe2VtCDso7zshLjsmpQ8L2gyPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcC0yIG1iLTIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMCB3LWZ1bGxcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBpZD1cIm5pY2tuYW1lXCJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBpbnB1dE5pY2tOYW1lKGUpfVxuICAgICAgICAvPlxuICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIG1iLTJcIj57ZXJyb3J9PC9wPn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJtci0yXCI+XG4gICAgICAgICAgICA8YnV0dG9uPuqxtOuEiOubsOq4sDwvYnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2F2ZU5pY2tuYW1lfT7smYTro4w8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5pY2tuYW1lO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VBdG9tIiwibmlja05hbWVBdG9tIiwiTGluayIsIlJlYWN0IiwiTmlja25hbWUiLCJuaWNrTmFtZSIsInNldE5pY2tOYW1lIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJlcnJvciIsInNldEVycm9yIiwiaW5wdXROaWNrTmFtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNhdmVOaWNrbmFtZSIsInBvc3QiLCJuaWNrbmFtZSIsInRoZW4iLCJyZXNwb25zZSIsImlzRHVwbGljYXRlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJoMiIsImlucHV0IiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJwIiwiaHJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/nickname/page.tsx\n"));

/***/ })

});