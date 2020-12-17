/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproject_petgram"] = self["webpackChunkproject_petgram"] || []).push([["src_pages_Favs_js"],{

/***/ "./src/components/ListOfFavs/index.js":
/*!********************************************!*\
  !*** ./src/components/ListOfFavs/index.js ***!
  \********************************************/
/*! namespace exports */
/*! export ListOfFavs [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListOfFavs\": () => /* binding */ ListOfFavs\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/ListOfFavs/styles.js\");\n\n\n\nvar ListOfFavs = function ListOfFavs(_ref) {\n  var _ref$favs = _ref.favs,\n      favs = _ref$favs === void 0 ? [] : _ref$favs;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Grid, null, favs.map(function (fav) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Link, {\n      key: fav.id,\n      to: \"/detail/\".concat(fav.id)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Image, {\n      key: fav.id,\n      src: fav.src\n    }));\n  }));\n};\nListOfFavs.propTypes = {\n  //arrayOf -> podemos indicar la forma del array que debe recibir como props\n  favs: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf( //PropTypes.shape() -> usamos para indicar que es un array de objetos\n  prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({\n    //indicamos la forma o estructura del array y si es requerido\n    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),\n    src: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)\n  }))\n};\n\n//# sourceURL=webpack://project-petgram/./src/components/ListOfFavs/index.js?");

/***/ }),

/***/ "./src/components/ListOfFavs/styles.js":
/*!*********************************************!*\
  !*** ./src/components/ListOfFavs/styles.js ***!
  \*********************************************/
/*! namespace exports */
/*! export Grid [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Image [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Link [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Link\": () => /* binding */ Link,\n/* harmony export */   \"Grid\": () => /* binding */ Grid,\n/* harmony export */   \"Image\": () => /* binding */ Image\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reach/router */ \"./node_modules/@reach/router/es/index.js\");\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  object-fit: cover;\\n  height: 100%;\\n  width: 100%;\\n  position: absolute;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  padding-top: 32px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  border-radius: 8px;\\n  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);\\n  display: inline-block;\\n  margin: 1%;\\n  overflow: hidden;\\n  position: relative;\\n  width: 31.33%;\\n  &:after {\\n    content: \\\"\\\";\\n    display: block;\\n    padding-bottom: 100%;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar Link = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(_reach_router__WEBPACK_IMPORTED_MODULE_0__.Link)(_templateObject());\nvar Grid = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject2());\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.img(_templateObject3());\n\n//# sourceURL=webpack://project-petgram/./src/components/ListOfFavs/styles.js?");

/***/ }),

/***/ "./src/containers/GetFavorites.js":
/*!****************************************!*\
  !*** ./src/containers/GetFavorites.js ***!
  \****************************************/
/*! namespace exports */
/*! export FavsWithQuery [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FavsWithQuery\": () => /* binding */ FavsWithQuery\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ \"./node_modules/@apollo/react-components/lib/react-components.esm.js\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ListOfFavs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ListOfFavs */ \"./src/components/ListOfFavs/index.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  query getFavs {\\n    favs {\\n      id\\n      categoryId\\n      src\\n      likes\\n      userId\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\nvar GET_FAVS = apollo_boost__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject()); //Render props que le pasamos al componente query\n\nvar renderProp = function renderProp(_ref) {\n  var loading = _ref.loading,\n      error = _ref.error,\n      data = _ref.data;\n  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Loading...\");\n  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Error! \\u26D4\"); //recuperamos del objeto data del query getFavs todos los favoritos\n\n  var favs = data.favs;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ListOfFavs__WEBPACK_IMPORTED_MODULE_1__.ListOfFavs, {\n    favs: favs\n  });\n};\n\nvar FavsWithQuery = function FavsWithQuery() {\n  return (\n    /*#__PURE__*/\n\n    /**fetchPlicy=network-only no se va a confiar en el cache, sino que irá a la red y ejecutara la query para obtener favs */\n    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__.Query, {\n      query: GET_FAVS,\n      fetchPolicy: \"network-only\"\n    }, renderProp)\n  );\n};\n\n//# sourceURL=webpack://project-petgram/./src/containers/GetFavorites.js?");

/***/ }),

/***/ "./src/pages/Favs.js":
/*!***************************!*\
  !*** ./src/pages/Favs.js ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _containers_GetFavorites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/GetFavorites */ \"./src/containers/GetFavorites.js\");\n/* harmony import */ var _components_Layout_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/index.js */ \"./src/components/Layout/index.js\");\n\n\n //utilizamos export default de esta manera para permitir el React.lazy() de Favs\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {\n  var _ref$favs = _ref.favs,\n      favs = _ref$favs === void 0 ? [] : _ref$favs;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Layout_index_js__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n    title: \"tus favoritos\",\n    subtitle: \"Aqu\\xED puedes encontrar tus favoritos\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_containers_GetFavorites__WEBPACK_IMPORTED_MODULE_1__.FavsWithQuery, null));\n});\n/* export const Favs = ({ favs = [] }) => {\n  return (\n    <Layout\n      title=\"tus favoritos\"\n      subtitle=\"Aquí puedes encontrar tus favoritos\"\n    >\n      <FavsWithQuery />\n    </Layout>\n  );\n}; */\n\n//# sourceURL=webpack://project-petgram/./src/pages/Favs.js?");

/***/ })

}]);