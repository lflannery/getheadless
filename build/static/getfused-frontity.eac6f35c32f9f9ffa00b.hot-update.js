webpackHotUpdate("getfused-frontity",{

/***/ "./packages/getfused-theme/src/components/footer.js":
/*!**********************************************************!*\
  !*** ./packages/getfused-theme/src/components/footer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link/index.tsx\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const Footer=({state})=>{const year=moment__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY');const footerMenuItems=state.source.get(`/menu/${state.theme.footerMenu}/`).items;const socialMenuItems=state.source.get(`/menu/${state.theme.socialMenu}/`).items;return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(FooterSection,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(\"div\",{className:\"credits\",children:[\"\\xA9 \",year,\" Getfused. All rights reserved.\"]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Menu,{children:footerMenuItems.map(item=>{return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{link:item.url,target:item.target,children:item.title},item.ID);})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Menu,{children:socialMenuItems.map(item=>{return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{link:item.url,target:item.target,children:item.title},item.ID);})})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Footer));const FooterSection=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"footer\", false?undefined:{target:\"e1n19gx51\",label:\"FooterSection\"})( false?undefined:{name:\"xmfb8o\",styles:\"background:#000;padding:4rem 1rem 3rem 1rem;display:flex;justify-content:space-between;color:#fff\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGZsYW5uZXJ5XFxEb2N1bWVudHNcXEdpdEh1YlxcZ2V0aGVhZGxlc3NcXHBhY2thZ2VzXFxnZXRmdXNlZC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxmb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNtQyIsImZpbGUiOiJDOlxcVXNlcnNcXGxmbGFubmVyeVxcRG9jdW1lbnRzXFxHaXRIdWJcXGdldGhlYWRsZXNzXFxwYWNrYWdlc1xcZ2V0ZnVzZWQtdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcZm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tICdmcm9udGl0eSdcclxuaW1wb3J0IExpbmsgZnJvbSAnQGZyb250aXR5L2NvbXBvbmVudHMvbGluaydcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcblxyXG5jb25zdCBGb290ZXIgPSAoeyBzdGF0ZSB9KSA9PiB7XHJcbiAgICBjb25zdCB5ZWFyID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZJyk7XHJcbiAgICBjb25zdCBmb290ZXJNZW51SXRlbXMgPSBzdGF0ZS5zb3VyY2UuZ2V0KGAvbWVudS8ke3N0YXRlLnRoZW1lLmZvb3Rlck1lbnV9L2ApLml0ZW1zO1xyXG4gICAgY29uc3Qgc29jaWFsTWVudUl0ZW1zID0gc3RhdGUuc291cmNlLmdldChgL21lbnUvJHtzdGF0ZS50aGVtZS5zb2NpYWxNZW51fS9gKS5pdGVtcztcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZvb3RlclNlY3Rpb24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWRpdHNcIj7CqSB7eWVhcn0gR2V0ZnVzZWQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9kaXY+XHJcbiAgICAgICAgICA8TWVudT5cclxuICAgICAgICAgIHtmb290ZXJNZW51SXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aXRlbS5JRH0gbGluaz17aXRlbS51cmx9IHRhcmdldD17aXRlbS50YXJnZXR9PntpdGVtLnRpdGxlfTwvTGluaz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgPE1lbnU+XHJcbiAgICAgICAgICAgIHtzb2NpYWxNZW51SXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtpdGVtLklEfSBsaW5rPXtpdGVtLnVybH0gdGFyZ2V0PXtpdGVtLnRhcmdldH0gPntpdGVtLnRpdGxlfTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L01lbnU+XHJcbiAgICAgIDwvRm9vdGVyU2VjdGlvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZvb3RlcilcclxuXHJcbmNvbnN0IEZvb3RlclNlY3Rpb24gPSBzdHlsZWQuZm9vdGVyYFxyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIHBhZGRpbmc6IDRyZW0gMXJlbSAzcmVtIDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbmBcclxuY29uc3QgTWVudSA9IHN0eWxlZC5uYXZgXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XHJcbiAgICB9ICAgIFxyXG5gIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const Menu=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"nav\", false?undefined:{target:\"e1n19gx50\",label:\"Menu\"})( false?undefined:{name:\"6mkxwd\",styles:\"a{color:#fff;font-weight:500;text-decoration:none;margin-right:4rem;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGZsYW5uZXJ5XFxEb2N1bWVudHNcXEdpdEh1YlxcZ2V0aGVhZGxlc3NcXHBhY2thZ2VzXFxnZXRmdXNlZC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxmb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0N1QiIsImZpbGUiOiJDOlxcVXNlcnNcXGxmbGFubmVyeVxcRG9jdW1lbnRzXFxHaXRIdWJcXGdldGhlYWRsZXNzXFxwYWNrYWdlc1xcZ2V0ZnVzZWQtdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcZm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tICdmcm9udGl0eSdcclxuaW1wb3J0IExpbmsgZnJvbSAnQGZyb250aXR5L2NvbXBvbmVudHMvbGluaydcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcblxyXG5jb25zdCBGb290ZXIgPSAoeyBzdGF0ZSB9KSA9PiB7XHJcbiAgICBjb25zdCB5ZWFyID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZJyk7XHJcbiAgICBjb25zdCBmb290ZXJNZW51SXRlbXMgPSBzdGF0ZS5zb3VyY2UuZ2V0KGAvbWVudS8ke3N0YXRlLnRoZW1lLmZvb3Rlck1lbnV9L2ApLml0ZW1zO1xyXG4gICAgY29uc3Qgc29jaWFsTWVudUl0ZW1zID0gc3RhdGUuc291cmNlLmdldChgL21lbnUvJHtzdGF0ZS50aGVtZS5zb2NpYWxNZW51fS9gKS5pdGVtcztcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZvb3RlclNlY3Rpb24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWRpdHNcIj7CqSB7eWVhcn0gR2V0ZnVzZWQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9kaXY+XHJcbiAgICAgICAgICA8TWVudT5cclxuICAgICAgICAgIHtmb290ZXJNZW51SXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aXRlbS5JRH0gbGluaz17aXRlbS51cmx9IHRhcmdldD17aXRlbS50YXJnZXR9PntpdGVtLnRpdGxlfTwvTGluaz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgPE1lbnU+XHJcbiAgICAgICAgICAgIHtzb2NpYWxNZW51SXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtpdGVtLklEfSBsaW5rPXtpdGVtLnVybH0gdGFyZ2V0PXtpdGVtLnRhcmdldH0gPntpdGVtLnRpdGxlfTwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L01lbnU+XHJcbiAgICAgIDwvRm9vdGVyU2VjdGlvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZvb3RlcilcclxuXHJcbmNvbnN0IEZvb3RlclNlY3Rpb24gPSBzdHlsZWQuZm9vdGVyYFxyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIHBhZGRpbmc6IDRyZW0gMXJlbSAzcmVtIDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbmBcclxuY29uc3QgTWVudSA9IHN0eWxlZC5uYXZgXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XHJcbiAgICB9ICAgIFxyXG5gIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9mb290ZXIuanM/Y2QxNyJdLCJuYW1lcyI6WyJGb290ZXIiLCJzdGF0ZSIsInllYXIiLCJtb21lbnQiLCJmb3JtYXQiLCJmb290ZXJNZW51SXRlbXMiLCJzb3VyY2UiLCJnZXQiLCJ0aGVtZSIsImZvb3Rlck1lbnUiLCJpdGVtcyIsInNvY2lhbE1lbnVJdGVtcyIsInNvY2lhbE1lbnUiLCJtYXAiLCJpdGVtIiwidXJsIiwidGFyZ2V0IiwidGl0bGUiLCJJRCIsImNvbm5lY3QiLCJGb290ZXJTZWN0aW9uIiwiTWVudSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3FSQUtBLEtBQU1BLE9BQU0sQ0FBRyxDQUFDLENBQUVDLEtBQUYsQ0FBRCxHQUFlLENBQzFCLEtBQU1DLEtBQUksQ0FBR0MsNkNBQU0sR0FBR0MsTUFBVCxDQUFnQixNQUFoQixDQUFiLENBQ0EsS0FBTUMsZ0JBQWUsQ0FBR0osS0FBSyxDQUFDSyxNQUFOLENBQWFDLEdBQWIsQ0FBa0IsU0FBUU4sS0FBSyxDQUFDTyxLQUFOLENBQVlDLFVBQVcsR0FBakQsRUFBcURDLEtBQTdFLENBQ0EsS0FBTUMsZ0JBQWUsQ0FBR1YsS0FBSyxDQUFDSyxNQUFOLENBQWFDLEdBQWIsQ0FBa0IsU0FBUU4sS0FBSyxDQUFDTyxLQUFOLENBQVlJLFVBQVcsR0FBakQsRUFBcURGLEtBQTdFLENBRUEsTUFDRSx5RUFBQyxhQUFELFlBQ0ksK0VBQUssU0FBUyxDQUFDLFNBQWYsbUJBQTRCUixJQUE1QixxQ0FESixDQUVJLHVFQUFDLElBQUQsV0FDQ0csZUFBZSxDQUFDUSxHQUFoQixDQUFxQkMsSUFBRCxFQUFVLENBQ3pCLE1BQ0ksd0VBQUMsaUVBQUQsRUFBb0IsSUFBSSxDQUFFQSxJQUFJLENBQUNDLEdBQS9CLENBQW9DLE1BQU0sQ0FBRUQsSUFBSSxDQUFDRSxNQUFqRCxVQUEwREYsSUFBSSxDQUFDRyxLQUEvRCxFQUFXSCxJQUFJLENBQUNJLEVBQWhCLENBREosQ0FHSCxDQUpGLENBREQsRUFGSixDQVNJLHVFQUFDLElBQUQsV0FDR1AsZUFBZSxDQUFDRSxHQUFoQixDQUFxQkMsSUFBRCxFQUFVLENBQ3ZCLE1BQ0ksd0VBQUMsaUVBQUQsRUFBb0IsSUFBSSxDQUFFQSxJQUFJLENBQUNDLEdBQS9CLENBQW9DLE1BQU0sQ0FBRUQsSUFBSSxDQUFDRSxNQUFqRCxVQUEyREYsSUFBSSxDQUFDRyxLQUFoRSxFQUFXSCxJQUFJLENBQUNJLEVBQWhCLENBREosQ0FHSCxDQUpKLENBREgsRUFUSixHQURGLENBbUJILENBeEJELENBMEJlQyx1SEFBTyxDQUFDbkIsTUFBRCxDQUF0QixFQUVBLEtBQU1vQixjQUFhLDJ3RkFBbkIsQ0FPQSxLQUFNQyxLQUFJLG11RkFBViIsImZpbGUiOiIuL3BhY2thZ2VzL2dldGZ1c2VkLXRoZW1lL3NyYy9jb21wb25lbnRzL2Zvb3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSAnZnJvbnRpdHknXHJcbmltcG9ydCBMaW5rIGZyb20gJ0Bmcm9udGl0eS9jb21wb25lbnRzL2xpbmsnXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5cclxuY29uc3QgRm9vdGVyID0gKHsgc3RhdGUgfSkgPT4ge1xyXG4gICAgY29uc3QgeWVhciA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWScpO1xyXG4gICAgY29uc3QgZm9vdGVyTWVudUl0ZW1zID0gc3RhdGUuc291cmNlLmdldChgL21lbnUvJHtzdGF0ZS50aGVtZS5mb290ZXJNZW51fS9gKS5pdGVtcztcclxuICAgIGNvbnN0IHNvY2lhbE1lbnVJdGVtcyA9IHN0YXRlLnNvdXJjZS5nZXQoYC9tZW51LyR7c3RhdGUudGhlbWUuc29jaWFsTWVudX0vYCkuaXRlbXM7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGb290ZXJTZWN0aW9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVkaXRzXCI+wqkge3llYXJ9IEdldGZ1c2VkLiBBbGwgcmlnaHRzIHJlc2VydmVkLjwvZGl2PlxyXG4gICAgICAgICAgPE1lbnU+XHJcbiAgICAgICAgICB7Zm9vdGVyTWVudUl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2l0ZW0uSUR9IGxpbms9e2l0ZW0udXJsfSB0YXJnZXQ9e2l0ZW0udGFyZ2V0fT57aXRlbS50aXRsZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgICB7c29jaWFsTWVudUl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aXRlbS5JRH0gbGluaz17aXRlbS51cmx9IHRhcmdldD17aXRlbS50YXJnZXR9ID57aXRlbS50aXRsZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9NZW51PlxyXG4gICAgICA8L0Zvb3RlclNlY3Rpb24+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGb290ZXIpXHJcblxyXG5jb25zdCBGb290ZXJTZWN0aW9uID0gc3R5bGVkLmZvb3RlcmBcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBwYWRkaW5nOiA0cmVtIDFyZW0gM3JlbSAxcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5gXHJcbmNvbnN0IE1lbnUgPSBzdHlsZWQubmF2YFxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xyXG4gICAgfSAgICBcclxuYCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/getfused-theme/src/components/footer.js\n");

/***/ })

})