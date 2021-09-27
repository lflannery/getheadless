webpackHotUpdate("getfused-frontity",{

/***/ "./packages/getfused-theme/src/components/footer.js":
/*!**********************************************************!*\
  !*** ./packages/getfused-theme/src/components/footer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link/index.tsx\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_Facebook_Negative_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/Facebook-Negative.svg */ \"./packages/getfused-theme/src/images/Facebook-Negative.svg\");\n/* harmony import */ var _images_LinkedIn_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/LinkedIn.svg */ \"./packages/getfused-theme/src/images/LinkedIn.svg\");\n/* harmony import */ var _images_Twitter_Negative_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/Twitter-Negative.svg */ \"./packages/getfused-theme/src/images/Twitter-Negative.svg\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const Footer=({state})=>{const year=moment__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY');const footerMenuItems=state.source.get(`/menu/${state.theme.footerMenu}/`).items;const socialMenuItems=state.source.get(`/menu/${state.theme.socialMenu}/`).items;const classes=socialMenuItems[0].classes;console.log(classes.stringify);return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(FooterSection,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxs\"])(\"div\",{className:\"credits\",children:[\"\\xA9 \",year,\" Getfused. All rights reserved.\"]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(Menu,{children:footerMenuItems.map(item=>{return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{link:item.url,target:item.target,children:item.title},item.ID);})}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(Menu,{children:socialMenuItems.map(item=>{return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{link:item.url,target:item.target,className:item.classes,children:item.title},item.ID);})})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Footer));const FooterSection=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"footer\", false?undefined:{target:\"e1n19gx51\",label:\"FooterSection\"})( false?undefined:{name:\"xmfb8o\",styles:\"background:#000;padding:4rem 1rem 3rem 1rem;display:flex;justify-content:space-between;color:#fff\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGZsYW5uZXJ5XFxEb2N1bWVudHNcXEdpdEh1YlxcZ2V0aGVhZGxlc3NcXHBhY2thZ2VzXFxnZXRmdXNlZC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxmb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNtQyIsImZpbGUiOiJDOlxcVXNlcnNcXGxmbGFubmVyeVxcRG9jdW1lbnRzXFxHaXRIdWJcXGdldGhlYWRsZXNzXFxwYWNrYWdlc1xcZ2V0ZnVzZWQtdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcZm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tICdmcm9udGl0eSdcclxuaW1wb3J0IExpbmsgZnJvbSAnQGZyb250aXR5L2NvbXBvbmVudHMvbGluaydcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmltcG9ydCBGYWNlYm9vayBmcm9tICcuLi9pbWFnZXMvRmFjZWJvb2stTmVnYXRpdmUuc3ZnJ1xyXG5pbXBvcnQgTGlua2VkSW4gZnJvbSAnLi4vaW1hZ2VzL0xpbmtlZEluLnN2ZydcclxuaW1wb3J0IFR3aXR0ZXIgZnJvbSAnLi4vaW1hZ2VzL1R3aXR0ZXItTmVnYXRpdmUuc3ZnJ1xyXG5cclxuY29uc3QgRm9vdGVyID0gKHsgc3RhdGUgfSkgPT4ge1xyXG4gICAgY29uc3QgeWVhciA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWScpO1xyXG4gICAgY29uc3QgZm9vdGVyTWVudUl0ZW1zID0gc3RhdGUuc291cmNlLmdldChgL21lbnUvJHtzdGF0ZS50aGVtZS5mb290ZXJNZW51fS9gKS5pdGVtcztcclxuICAgIGNvbnN0IHNvY2lhbE1lbnVJdGVtcyA9IHN0YXRlLnNvdXJjZS5nZXQoYC9tZW51LyR7c3RhdGUudGhlbWUuc29jaWFsTWVudX0vYCkuaXRlbXM7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gc29jaWFsTWVudUl0ZW1zWzBdLmNsYXNzZXNcclxuICAgIGNvbnNvbGUubG9nKGNsYXNzZXMuc3RyaW5naWZ5KVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Rm9vdGVyU2VjdGlvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlZGl0c1wiPsKpIHt5ZWFyfSBHZXRmdXNlZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC48L2Rpdj5cclxuICAgICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgICB7Zm9vdGVyTWVudUl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2l0ZW0uSUR9IGxpbms9e2l0ZW0udXJsfSB0YXJnZXQ9e2l0ZW0udGFyZ2V0fT57aXRlbS50aXRsZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgICB7c29jaWFsTWVudUl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aXRlbS5JRH0gbGluaz17aXRlbS51cmx9IHRhcmdldD17aXRlbS50YXJnZXR9IGNsYXNzTmFtZT17aXRlbS5jbGFzc2VzfSA+e2l0ZW0udGl0bGV9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L01lbnU+XHJcbiAgICAgIDwvRm9vdGVyU2VjdGlvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZvb3RlcilcclxuXHJcbmNvbnN0IEZvb3RlclNlY3Rpb24gPSBzdHlsZWQuZm9vdGVyYFxyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIHBhZGRpbmc6IDRyZW0gMXJlbSAzcmVtIDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbmBcclxuY29uc3QgTWVudSA9IHN0eWxlZC5uYXZgXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XHJcbiAgICB9ICAgXHJcbiAgICAuc29jaWFsIHtcclxuICAgICAgICBmb250LXNpemU6IDBweDtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICB3aWR0aDogMXJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5mYWNlYm9vayB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7RmFjZWJvb2t9O1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbmAiXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const Menu=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"styled\"])(\"nav\", false?undefined:{target:\"e1n19gx50\",label:\"Menu\"})(\"a{color:#fff;font-weight:500;text-decoration:none;margin-right:4rem;}.social{font-size:0px;&:before{content:'';width:1rem;height:1rem;display:block;}&.facebook{background:\",_images_Facebook_Negative_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\";}}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGZsYW5uZXJ5XFxEb2N1bWVudHNcXEdpdEh1YlxcZ2V0aGVhZGxlc3NcXHBhY2thZ2VzXFxnZXRmdXNlZC10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxmb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEN1QiIsImZpbGUiOiJDOlxcVXNlcnNcXGxmbGFubmVyeVxcRG9jdW1lbnRzXFxHaXRIdWJcXGdldGhlYWRsZXNzXFxwYWNrYWdlc1xcZ2V0ZnVzZWQtdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcZm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tICdmcm9udGl0eSdcclxuaW1wb3J0IExpbmsgZnJvbSAnQGZyb250aXR5L2NvbXBvbmVudHMvbGluaydcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmltcG9ydCBGYWNlYm9vayBmcm9tICcuLi9pbWFnZXMvRmFjZWJvb2stTmVnYXRpdmUuc3ZnJ1xyXG5pbXBvcnQgTGlua2VkSW4gZnJvbSAnLi4vaW1hZ2VzL0xpbmtlZEluLnN2ZydcclxuaW1wb3J0IFR3aXR0ZXIgZnJvbSAnLi4vaW1hZ2VzL1R3aXR0ZXItTmVnYXRpdmUuc3ZnJ1xyXG5cclxuY29uc3QgRm9vdGVyID0gKHsgc3RhdGUgfSkgPT4ge1xyXG4gICAgY29uc3QgeWVhciA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWScpO1xyXG4gICAgY29uc3QgZm9vdGVyTWVudUl0ZW1zID0gc3RhdGUuc291cmNlLmdldChgL21lbnUvJHtzdGF0ZS50aGVtZS5mb290ZXJNZW51fS9gKS5pdGVtcztcclxuICAgIGNvbnN0IHNvY2lhbE1lbnVJdGVtcyA9IHN0YXRlLnNvdXJjZS5nZXQoYC9tZW51LyR7c3RhdGUudGhlbWUuc29jaWFsTWVudX0vYCkuaXRlbXM7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gc29jaWFsTWVudUl0ZW1zWzBdLmNsYXNzZXNcclxuICAgIGNvbnNvbGUubG9nKGNsYXNzZXMuc3RyaW5naWZ5KVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Rm9vdGVyU2VjdGlvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlZGl0c1wiPsKpIHt5ZWFyfSBHZXRmdXNlZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC48L2Rpdj5cclxuICAgICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgICB7Zm9vdGVyTWVudUl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2l0ZW0uSUR9IGxpbms9e2l0ZW0udXJsfSB0YXJnZXQ9e2l0ZW0udGFyZ2V0fT57aXRlbS50aXRsZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgICB7c29jaWFsTWVudUl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aXRlbS5JRH0gbGluaz17aXRlbS51cmx9IHRhcmdldD17aXRlbS50YXJnZXR9IGNsYXNzTmFtZT17aXRlbS5jbGFzc2VzfSA+e2l0ZW0udGl0bGV9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L01lbnU+XHJcbiAgICAgIDwvRm9vdGVyU2VjdGlvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZvb3RlcilcclxuXHJcbmNvbnN0IEZvb3RlclNlY3Rpb24gPSBzdHlsZWQuZm9vdGVyYFxyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIHBhZGRpbmc6IDRyZW0gMXJlbSAzcmVtIDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbmBcclxuY29uc3QgTWVudSA9IHN0eWxlZC5uYXZgXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XHJcbiAgICB9ICAgXHJcbiAgICAuc29jaWFsIHtcclxuICAgICAgICBmb250LXNpemU6IDBweDtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICB3aWR0aDogMXJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5mYWNlYm9vayB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7RmFjZWJvb2t9O1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbmAiXX0= */\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9nZXRmdXNlZC10aGVtZS9zcmMvY29tcG9uZW50cy9mb290ZXIuanM/Y2QxNyJdLCJuYW1lcyI6WyJGb290ZXIiLCJzdGF0ZSIsInllYXIiLCJtb21lbnQiLCJmb3JtYXQiLCJmb290ZXJNZW51SXRlbXMiLCJzb3VyY2UiLCJnZXQiLCJ0aGVtZSIsImZvb3Rlck1lbnUiLCJpdGVtcyIsInNvY2lhbE1lbnVJdGVtcyIsInNvY2lhbE1lbnUiLCJjbGFzc2VzIiwiY29uc29sZSIsImxvZyIsInN0cmluZ2lmeSIsIm1hcCIsIml0ZW0iLCJ1cmwiLCJ0YXJnZXQiLCJ0aXRsZSIsIklEIiwiY29ubmVjdCIsIkZvb3RlclNlY3Rpb24iLCJNZW51IiwiRmFjZWJvb2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztxUkFRQSxLQUFNQSxPQUFNLENBQUcsQ0FBQyxDQUFFQyxLQUFGLENBQUQsR0FBZSxDQUMxQixLQUFNQyxLQUFJLENBQUdDLDZDQUFNLEdBQUdDLE1BQVQsQ0FBZ0IsTUFBaEIsQ0FBYixDQUNBLEtBQU1DLGdCQUFlLENBQUdKLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxHQUFiLENBQWtCLFNBQVFOLEtBQUssQ0FBQ08sS0FBTixDQUFZQyxVQUFXLEdBQWpELEVBQXFEQyxLQUE3RSxDQUNBLEtBQU1DLGdCQUFlLENBQUdWLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxHQUFiLENBQWtCLFNBQVFOLEtBQUssQ0FBQ08sS0FBTixDQUFZSSxVQUFXLEdBQWpELEVBQXFERixLQUE3RSxDQUNBLEtBQU1HLFFBQU8sQ0FBR0YsZUFBZSxDQUFDLENBQUQsQ0FBZixDQUFtQkUsT0FBbkMsQ0FDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQU8sQ0FBQ0csU0FBcEIsRUFFQSxNQUNFLHlFQUFDLGFBQUQsWUFDSSwrRUFBSyxTQUFTLENBQUMsU0FBZixtQkFBNEJkLElBQTVCLHFDQURKLENBRUksdUVBQUMsSUFBRCxXQUNHRyxlQUFlLENBQUNZLEdBQWhCLENBQXFCQyxJQUFELEVBQVUsQ0FDM0IsTUFDSSx3RUFBQyxpRUFBRCxFQUFvQixJQUFJLENBQUVBLElBQUksQ0FBQ0MsR0FBL0IsQ0FBb0MsTUFBTSxDQUFFRCxJQUFJLENBQUNFLE1BQWpELFVBQTBERixJQUFJLENBQUNHLEtBQS9ELEVBQVdILElBQUksQ0FBQ0ksRUFBaEIsQ0FESixDQUdILENBSkEsQ0FESCxFQUZKLENBU0ksdUVBQUMsSUFBRCxXQUNHWCxlQUFlLENBQUNNLEdBQWhCLENBQXFCQyxJQUFELEVBQVUsQ0FFM0IsTUFDSSx3RUFBQyxpRUFBRCxFQUFvQixJQUFJLENBQUVBLElBQUksQ0FBQ0MsR0FBL0IsQ0FBb0MsTUFBTSxDQUFFRCxJQUFJLENBQUNFLE1BQWpELENBQXlELFNBQVMsQ0FBRUYsSUFBSSxDQUFDTCxPQUF6RSxVQUFvRkssSUFBSSxDQUFDRyxLQUF6RixFQUFXSCxJQUFJLENBQUNJLEVBQWhCLENBREosQ0FHSCxDQUxBLENBREgsRUFUSixHQURGLENBb0JILENBM0JELENBNkJlQyx1SEFBTyxDQUFDdkIsTUFBRCxDQUF0QixFQUVBLEtBQU13QixjQUFhLDIvR0FBbkIsQ0FPQSxLQUFNQyxLQUFJLGlTQWdCZ0JDLHFFQWhCaEIsNHRHQUFWIiwiZmlsZSI6Ii4vcGFja2FnZXMvZ2V0ZnVzZWQtdGhlbWUvc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tICdmcm9udGl0eSdcclxuaW1wb3J0IExpbmsgZnJvbSAnQGZyb250aXR5L2NvbXBvbmVudHMvbGluaydcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmltcG9ydCBGYWNlYm9vayBmcm9tICcuLi9pbWFnZXMvRmFjZWJvb2stTmVnYXRpdmUuc3ZnJ1xyXG5pbXBvcnQgTGlua2VkSW4gZnJvbSAnLi4vaW1hZ2VzL0xpbmtlZEluLnN2ZydcclxuaW1wb3J0IFR3aXR0ZXIgZnJvbSAnLi4vaW1hZ2VzL1R3aXR0ZXItTmVnYXRpdmUuc3ZnJ1xyXG5cclxuY29uc3QgRm9vdGVyID0gKHsgc3RhdGUgfSkgPT4ge1xyXG4gICAgY29uc3QgeWVhciA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWScpO1xyXG4gICAgY29uc3QgZm9vdGVyTWVudUl0ZW1zID0gc3RhdGUuc291cmNlLmdldChgL21lbnUvJHtzdGF0ZS50aGVtZS5mb290ZXJNZW51fS9gKS5pdGVtcztcclxuICAgIGNvbnN0IHNvY2lhbE1lbnVJdGVtcyA9IHN0YXRlLnNvdXJjZS5nZXQoYC9tZW51LyR7c3RhdGUudGhlbWUuc29jaWFsTWVudX0vYCkuaXRlbXM7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gc29jaWFsTWVudUl0ZW1zWzBdLmNsYXNzZXNcclxuICAgIGNvbnNvbGUubG9nKGNsYXNzZXMuc3RyaW5naWZ5KVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Rm9vdGVyU2VjdGlvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlZGl0c1wiPsKpIHt5ZWFyfSBHZXRmdXNlZC4gQWxsIHJpZ2h0cyByZXNlcnZlZC48L2Rpdj5cclxuICAgICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgICB7Zm9vdGVyTWVudUl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2l0ZW0uSUR9IGxpbms9e2l0ZW0udXJsfSB0YXJnZXQ9e2l0ZW0udGFyZ2V0fT57aXRlbS50aXRsZX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgICB7c29jaWFsTWVudUl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17aXRlbS5JRH0gbGluaz17aXRlbS51cmx9IHRhcmdldD17aXRlbS50YXJnZXR9IGNsYXNzTmFtZT17aXRlbS5jbGFzc2VzfSA+e2l0ZW0udGl0bGV9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L01lbnU+XHJcbiAgICAgIDwvRm9vdGVyU2VjdGlvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZvb3RlcilcclxuXHJcbmNvbnN0IEZvb3RlclNlY3Rpb24gPSBzdHlsZWQuZm9vdGVyYFxyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIHBhZGRpbmc6IDRyZW0gMXJlbSAzcmVtIDFyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbmBcclxuY29uc3QgTWVudSA9IHN0eWxlZC5uYXZgXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XHJcbiAgICB9ICAgXHJcbiAgICAuc29jaWFsIHtcclxuICAgICAgICBmb250LXNpemU6IDBweDtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICB3aWR0aDogMXJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5mYWNlYm9vayB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7RmFjZWJvb2t9O1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbmAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/getfused-theme/src/components/footer.js\n");

/***/ })

})