/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/background.png */ "./assets/background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #e8ecf4;
  background: #1a1d29;
}

a {
  color: inherit;
}

.stripe {
  padding: 5rem 0;
}
.stripe .container {
  width: min(100% - 2rem, 1400px);
  margin-inline: auto;
  text-align: center;
}
.stripe h2 {
  font-size: clamp(1.6rem, 1.5rem + 1vw, 2.2rem);
  margin: 0 0 1rem;
}
.stripe p {
  color: #8b95a8;
  line-height: 1.7;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: saturate(120%) blur(8px);
  border-bottom: 1px solid rgba(99, 102, 241, 0.3);
}

.nav {
  width: min(100% - 2rem, 1400px);
  margin-inline: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 120px;
  transition: height 0.25s ease, padding 0.25s ease;
}
.nav.shrink {
  height: 80px;
}

.nav .nav-links .nav-link {
  transition: all 0.3s ease;
}

.nav.shrink .nav-links .nav-link {
  font-size: clamp(0.8rem, .7rem + .2vw, 1rem);
  padding: 0.4rem 0.7rem;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
}
.nav-links .nav-link {
  text-decoration: none;
  padding: 0.5rem 0.8rem;
  border-radius: 4px;
  font-size: clamp(0.9rem, 0.8rem + .2vw, 1.1rem);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  color: #ffffff;
  white-space: nowrap;
  transition: all 0.3s ease;
}
.nav-links .nav-link:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
.nav-links .nav-link.active {
  color: #ffffff;
  background: rgba(99, 102, 241, 0.25);
  box-shadow: 0 1px 4px rgba(99, 102, 241, 0.3);
}

.intro {
  min-height: calc(100vh - 120px);
  display: grid;
  place-items: center;
  background: #1a1d29;
}

.intro-inner {
  width: min(100% - 2rem, 950px);
  text-align: center;
}

.intro-title {
  margin: 0 0 0.5rem;
  font-size: clamp(2rem, 1.5rem + 3vw, 3.2rem);
  line-height: 1.15;
}

.intro-subtitle {
  color: #8b95a8;
  margin-bottom: 2rem;
}

.intro-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.9rem 1.1rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s ease;
}
.btn:active {
  transform: translateY(1px);
}

.btn.primary {
  background: #6365f8;
  color: #ffffff;
}
.btn.primary:hover {
  background: #9495fa;
}

.btn.ghost {
  border-color: rgba(255, 255, 255, 0.2);
  color: #e8ecf4;
}
.btn.ghost:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* ABOUT — minimal two lines over background image */
.about.hero-bg {
  padding: 0;
  min-height: 52vh;
  display: grid;
  place-items: center;
  text-align: center;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.about.hero-bg .about-overlay {
  padding: 3rem 1rem;
  width: min(100% - 2rem, 900px);
  background: rgba(0, 0, 0, 0.45);
  border-radius: 14px;
}
.about.hero-bg .about-line {
  margin: 0;
  font-size: clamp(1rem, 1rem + 1.0vw, 2.0rem);
  line-height: 1.2;
  color: #fff;
}
.about.hero-bg .about-subline {
  margin: 0.75rem 0 0;
  font-size: clamp(0.6rem, .7rem + .5vw, 1.1rem);
  color: rgba(231, 236, 245, 0.9);
}

@media (max-width: 720px) {
  .about.hero-bg {
    background-attachment: scroll;
    min-height: 46vh;
  }
}
/* ===== EXPERIENCE GALLERY (logos) ===== */
.experience .grid.logos {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  justify-items: center;
}
.experience .tile {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  padding: 2rem 1.5rem;
  cursor: pointer;
  transition: all 0.25s ease;
  width: 100%;
  max-width: 320px;
  text-align: center;
}
.experience .tile img {
  width: 160px;
  height: auto;
  display: block;
  margin: 0 auto;
  transition: transform 0.25s ease;
}
.experience .tile figcaption {
  margin-top: 1rem;
  display: grid;
  gap: 0.25rem;
}
.experience .tile figcaption .company {
  font-weight: 800;
  font-size: 1.15rem;
}
.experience .tile figcaption .role {
  color: #8b95a8;
}
.experience .tile figcaption .dates {
  color: #8b95a8;
  font-size: 0.9rem;
}
.experience .tile:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.15);
}
.experience .tile:hover img {
  transform: scale(1.05);
}
@media (max-width: 900px) {
  .experience .grid.logos {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .experience .grid.logos {
    grid-template-columns: 1fr;
  }
  .experience .tile img {
    width: 180px;
  }
}

/* Optional: modal meta text */
.modal .meta {
  color: #8b95a8;
  margin: 0.2rem 0 0.6rem;
}

.projects .carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
}
.projects .carousel-wrapper {
  flex: 1;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}
.projects .carousel-slides {
  display: flex;
  transition: transform 0.5s ease;
  width: 300%;
}
.projects .slide {
  width: 33.333%;
  padding: 3rem 2.5rem;
  text-align: center;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}
.projects .slide h3 {
  font-size: 1.6rem;
  font-weight: 600;
  margin: 0;
  color: #e8ecf4;
}
.projects .slide p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #8b95a8;
  max-width: 500px;
  margin: 0;
}
.projects .slide.slide-1 {
  background: rgba(99, 102, 241, 0.05);
}
.projects .slide.slide-2 {
  background: rgba(139, 92, 246, 0.05);
}
.projects .slide.slide-3 {
  background: rgba(16, 185, 129, 0.05);
}
.projects .carousel-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #e8ecf4;
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.projects .carousel-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.05);
}

.capabilities {
  background: #252a3a;
  padding: 4rem 0;
}
.capabilities .capabilities-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #8b95a8;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.capabilities .capabilities-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}
.capabilities .capability-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.3s ease;
}
.capabilities .capability-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
}
.capabilities .capability-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}
.capabilities h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #e8ecf4;
  margin-bottom: 1rem;
}
.capabilities p {
  color: #8b95a8;
  line-height: 1.6;
  font-size: 1rem;
  margin: 0;
}
@media (max-width: 1024px) {
  .capabilities .capabilities-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .capabilities .capability-card {
    padding: 2rem 1.5rem;
  }
}
@media (max-width: 720px) {
  .capabilities {
    padding: 3rem 0;
  }
  .capabilities .capabilities-subtitle {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  .capabilities .capability-card {
    padding: 1.5rem 1rem;
  }
  .capabilities .capability-icon {
    font-size: 2rem;
  }
  .capabilities h3 {
    font-size: 1.2rem;
  }
}

.video-section video {
  width: 100%;
  max-width: 900px;
  border-radius: 12px;
  outline: 1px solid rgba(255, 255, 255, 0.12);
}

/* ===== CONTACT ===== */
.contact-min {
  background: #252a3a;
}
.contact-min .lead {
  font-size: clamp(0.8rem, 1rem + 0.5vw, 1.2rem);
  margin: 0.25rem 0 1rem;
  color: #8b95a8;
}
.contact-min .contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin-top: 0.5rem;
}
.contact-min .contact-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.7rem 1rem;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-decoration: none;
  color: #e8ecf4;
  font-weight: 600;
  transition: all 0.2s ease;
}
.contact-min .contact-chip .icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
}
.contact-min .contact-chip .x-icon {
  width: 20px;
  height: 20px;
  position: relative;
  flex-shrink: 0;
}
.contact-min .contact-chip .x-icon::before, .contact-min .contact-chip .x-icon::after {
  content: "";
  position: absolute;
  background: currentColor;
  border-radius: 1px;
}
.contact-min .contact-chip .x-icon::before {
  width: 2px;
  height: 16px;
  top: 2px;
  left: 9px;
  transform: rotate(45deg);
}
.contact-min .contact-chip .x-icon::after {
  width: 2px;
  height: 16px;
  top: 2px;
  left: 9px;
  transform: rotate(-45deg);
}
.contact-min .contact-chip:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.08);
}
@media (max-width: 600px) {
  .contact-min .contact-chip {
    width: 100%;
    justify-content: center;
  }
}

.site-footer {
  padding: 2rem 0;
}
.site-footer .container {
  width: min(100% - 2rem, 1400px);
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
.site-footer .to-top {
  text-decoration: none;
  background: rgba(255, 255, 255, 0.08);
  padding: 0.4rem 0.6rem;
  border-radius: 4px;
}

.modal {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.55);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.modal .modal-dialog {
  width: min(100% - 2rem, 720px);
  background: #252a3a;
  color: #e8ecf4;
  border-radius: 4px;
  padding: 1.5rem 1.25rem;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
  transform: translateY(10px);
  transition: transform 0.2s ease;
}
.modal.open {
  opacity: 1;
  pointer-events: auto;
}
.modal.open .modal-dialog {
  transform: translateY(0);
}
.modal .modal-close {
  position: absolute;
  top: 10px;
  right: 18px;
  font-size: 1.6rem;
  background: transparent;
  color: #8b95a8;
  border: none;
  cursor: pointer;
}
.modal .modal-close:hover {
  color: #e8ecf4;
}

@media (max-width: 1024px) {
  .capabilities .capabilities-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 720px) {
  .nav {
    height: 80px;
  }

  .nav-links {
    justify-content: center;
    flex-wrap: wrap;
  }

  .intro {
    min-height: calc(100vh - 80px);
  }

  .capabilities .capabilities-grid {
    grid-template-columns: 1fr;
  }
}`, "",{"version":3,"sources":["webpack://./css/main.scss"],"names":[],"mappings":"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","sourcesContent":["// ===== Variables =====\n$bg: #1a1d29;\n$surface: #252a3a;\n$muted: #8b95a8;\n$text: #e8ecf4;\n$accent: #6365f8;\n\n$maxw: 1400px;\n$nav-large: 120px;\n$nav-small: 80px;\n\n@mixin container {\n  width: min(100% - 2rem, #{$maxw});\n  margin-inline: auto;\n}\n\n@mixin button {\n  display: inline-flex; align-items: center; justify-content: center;\n  gap: .5rem; padding: .9rem 1.1rem; border-radius: 4px;\n  font-weight: 600; text-decoration: none; cursor: pointer;\n  border: 1px solid transparent;\n  transition: all .2s ease;\n  &:active { transform: translateY(1px); }\n}\n\n// ===== Global =====\n* { box-sizing: border-box; }\nhtml { scroll-behavior: smooth; }\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: $text;\n  background: $bg;\n}\na { color: inherit; }\n\n.stripe {\n  padding: 5rem 0;\n  .container { @include container; text-align: center; }\n  h2 { font-size: clamp(1.6rem, 1.5rem + 1vw, 2.2rem); margin: 0 0 1rem; }\n  p { color: $muted; line-height: 1.7; }\n}\n\n// Navbar\n.site-header { \n    position: sticky; \n    top: 0; \n    z-index: 1000; \n    background: rgba(0, 0, 0, 0.9);\n    backdrop-filter: saturate(120%) blur(8px);\n    border-bottom: 1px solid rgba(99, 102, 241, 0.3);\n}\n.nav {\n  @include container;\n  position: relative;\n  display: flex; \n  justify-content: center;\n  align-items: center; \n  gap: 1rem;\n  height: $nav-large; \n  transition: height .25s ease, padding .25s ease;\n  &.shrink { height: $nav-small; }\n}\n.nav .nav-links .nav-link { transition: all .3s ease; }\n.nav.shrink .nav-links .nav-link { \n  font-size: clamp(0.8rem, .7rem + .2vw, 1rem); \n  padding: .4rem .7rem; \n}\n  \n.nav-links {\n  list-style: none; margin: 0; padding: 0;\n  display: flex; justify-content: center; gap: 0.5rem; align-items: center;\n  flex-wrap: wrap;\n  .nav-link {\n    text-decoration: none; padding: .5rem .8rem; border-radius: 4px;\n    font-size: clamp(0.9rem, 0.8rem + .2vw, 1.1rem); \n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 0.3px;\n    color: #ffffff;\n    white-space: nowrap;\n    transition: all .3s ease;\n    &:hover { \n      color: #ffffff; \n      background: rgba(255,255,255,.15); \n      transform: translateY(-1px);\n      box-shadow: 0 2px 8px rgba(0,0,0,.2);\n    }\n    &.active { \n      color: #ffffff; \n      background: rgba(99, 102, 241, .25); \n      box-shadow: 0 1px 4px rgba(99, 102, 241, .3);\n    }\n  }\n}\n\n// ===== Hero Section =====\n.intro {\n  min-height: calc(100vh - #{$nav-large});\n  display: grid; place-items: center;\n  background: $bg;\n}\n.intro-inner { \n    width: min(100% - 2rem, 950px); \n    text-align: center; \n}\n.intro-title { \n    margin: 0 0 .5rem; \n    font-size: clamp(2rem, 1.5rem + 3vw, 3.2rem); \n    line-height: 1.15;\n}\n.intro-subtitle { \n    color: $muted;\n    margin-bottom: 2rem; \n}\n.intro-cta { \n    display: flex; \n    gap: 1rem; \n    justify-content: center; \n}\n\n.btn { @include button; }\n.btn.primary { \n    background: $accent; \n    color: #ffffff; \n    &:hover { background: lighten($accent, 10%); } \n}\n.btn.ghost { \n    border-color: rgba(255,255,255,.2); \n    color: $text; \n    &:hover { background: rgba(255,255,255,.1); } \n}\n\n\n\n/* ABOUT — minimal two lines over background image */\n.about.hero-bg {\n    padding: 0;\n    min-height: 52vh;\n    display: grid;\n    place-items: center;\n    text-align: center;\n    background-image:\n      url(\"../assets/background.png\");\n    background-size: cover;\n    background-position: center;\n    background-attachment: fixed;\n  \n    .about-overlay {\n      padding: 3rem 1rem;\n      width: min(100% - 2rem, 900px);\n      background: rgba(0, 0, 0, 0.45); \n      border-radius: 14px;\n    //   backdrop-filter: blur(8px); // Optional: adds a nice blur effect\n    }\n  \n    .about-line {\n      margin: 0;\n      font-size: clamp(1rem, 1rem + 1.0vw, 2.0rem);\n      line-height: 1.2;\n      color: #fff;\n    }\n  \n    .about-subline {\n      margin: .75rem 0 0;\n      font-size: clamp(0.6rem, .7rem + .5vw, 1.1rem);\n      color: rgba(231, 236, 245, 0.9);\n    }\n  }\n\n  @media (max-width: 720px) {\n    .about.hero-bg {\n      background-attachment: scroll;\n      min-height: 46vh;\n    }\n  }\n  \n\n/* ===== EXPERIENCE GALLERY (logos) ===== */\n.experience {\n    .grid.logos {\n      display: grid;\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n      gap: 2rem;\n      justify-items: center;    // center tiles themselves\n    }\n  \n    .tile {\n      background: rgba(255,255,255,.04);\n      border: 1px solid rgba(255,255,255,.08);\n      border-radius: 4px;\n      padding: 2rem 1.5rem;\n      cursor: pointer;\n      transition: all .25s ease;\n      width: 100%;\n      max-width: 320px;\n      text-align: center;\n  \n      img {\n        width: 160px;\n        height: auto;\n        display: block;\n        margin: 0 auto;\n        transition: transform .25s ease;\n      }\n  \n      figcaption {\n        margin-top: 1rem;\n        display: grid;\n        gap: .25rem;\n  \n        .company { font-weight: 800; font-size: 1.15rem; }\n        .role    { color: $muted; }\n        .dates   { color: $muted; font-size: .9rem; }\n      }\n  \n      &:hover {\n        transform: translateY(-4px);\n        box-shadow: 0 8px 24px rgba(0,0,0,.2);\n        border-color: rgba(255,255,255,.15);\n  \n        img {\n          transform: scale(1.05);\n        }\n      }\n    }\n  \n    @media (max-width: 900px) {\n      .grid.logos { grid-template-columns: repeat(2, 1fr); }\n    }\n    @media (max-width: 600px) {\n      .grid.logos { grid-template-columns: 1fr; }\n      .tile img { width: 180px; }\n    }\n  }\n  \n  \n  \n  /* Optional: modal meta text */\n  .modal .meta {\n    color: $muted;\n    margin: .2rem 0 .6rem;\n  }\n  \n  \n  \n// ===== Work (carousel) =====\n.projects {\n  .carousel-container {\n    position: relative;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    max-width: 1000px;\n    margin: 0 auto;\n  }\n\n  .carousel-wrapper {\n    flex: 1;\n    overflow: hidden;\n    border-radius: 8px;\n    border: 1px solid rgba(255, 255, 255, 0.08);\n  }\n\n  .carousel-slides {\n    display: flex;\n    transition: transform 0.5s ease;\n    width: 300%;\n  }\n\n  .slide {\n    width: 33.333%;\n    padding: 3rem 2.5rem;\n    text-align: center;\n    min-height: 320px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1.5rem;\n\n    h3 {\n      font-size: 1.6rem;\n      font-weight: 600;\n      margin: 0;\n      color: $text;\n    }\n\n    p {\n      font-size: 1.1rem;\n      line-height: 1.7;\n      color: $muted;\n      max-width: 500px;\n      margin: 0;\n    }\n\n    &.slide-1 { background: rgba(99, 102, 241, 0.05); }\n    &.slide-2 { background: rgba(139, 92, 246, 0.05); }\n    &.slide-3 { background: rgba(16, 185, 129, 0.05); }\n  }\n\n  .carousel-btn {\n    background: rgba(255, 255, 255, 0.05);\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    color: $text;\n    font-size: 1.5rem;\n    width: 40px;\n    height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    cursor: pointer;\n    transition: all 0.3s ease;\n    user-select: none;\n\n    &:hover { \n      background: rgba(255, 255, 255, 0.1); \n      transform: scale(1.05);\n    }\n  }\n}\n  \n\n.capabilities {\n  background: $surface;\n  padding: 4rem 0;\n  \n  .capabilities-subtitle {\n    text-align: center;\n    font-size: 1.2rem;\n    color: $muted;\n    margin-bottom: 3rem;\n    max-width: 600px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  \n  .capabilities-grid {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 2rem;\n    max-width: 1000px;\n    margin: 0 auto;\n  }\n  \n  .capability-card {\n    background: rgba(255, 255, 255, 0.02);\n    border: 1px solid rgba(255, 255, 255, 0.08);\n    border-radius: 8px;\n    padding: 2.5rem 2rem;\n    text-align: center;\n    transition: all 0.3s ease;\n    \n    &:hover {\n      transform: translateY(-4px);\n      border-color: rgba(255, 255, 255, 0.15);\n      background: rgba(255, 255, 255, 0.04);\n    }\n  }\n  \n  .capability-icon {\n    font-size: 2.5rem;\n    margin-bottom: 1rem;\n    display: block;\n  }\n  \n  h3 {\n    font-size: 1.4rem;\n    font-weight: 600;\n    color: $text;\n    margin-bottom: 1rem;\n  }\n  \n  p {\n    color: $muted;\n    line-height: 1.6;\n    font-size: 1rem;\n    margin: 0;\n  }\n  \n  @media (max-width: 1024px) {\n    .capabilities-grid {\n      grid-template-columns: 1fr;\n      gap: 1.5rem;\n    }\n    \n    .capability-card {\n      padding: 2rem 1.5rem;\n    }\n  }\n  \n  @media (max-width: 720px) {\n    padding: 3rem 0;\n    \n    .capabilities-subtitle {\n      font-size: 1.1rem;\n      margin-bottom: 2rem;\n    }\n    \n    .capability-card {\n      padding: 1.5rem 1rem;\n    }\n    \n    .capability-icon {\n      font-size: 2rem;\n    }\n    \n    h3 {\n      font-size: 1.2rem;\n    }\n  }\n}\n  \n  \n  \n\n\n// ===== Video =====\n.video-section video { width: 100%; max-width: 900px; border-radius: 12px; outline: 1px solid rgba(255,255,255,.12); }\n\n/* ===== CONTACT ===== */\n.contact-min {\n    background: $surface;\n  \n    .lead {\n        font-size: clamp(0.8rem, 1rem + 0.5vw, 1.2rem);\n        margin: .25rem 0 1rem;\n        color: $muted;\n    }\n  \n    .contact-actions {\n      display: flex;\n      flex-wrap: wrap;\n      gap: .75rem;\n      justify-content: center;\n      margin-top: .5rem;\n    }\n  \n    .contact-chip {\n      display: inline-flex;\n      align-items: center;\n      gap: .55rem;\n      padding: .7rem 1rem;\n      border-radius: 4px;\n      background: rgba(255,255,255,.05);\n      border: 1px solid rgba(255,255,255,.10);\n      text-decoration: none;\n      color: $text;\n      font-weight: 600;\n      transition: all .2s ease;\n\n      .icon {\n        width: 20px;\n        height: 20px;\n        fill: currentColor;\n      }\n\n      .x-icon {\n        width: 20px;\n        height: 20px;\n        position: relative;\n        flex-shrink: 0;\n        \n        &::before,\n        &::after {\n          content: '';\n          position: absolute;\n          background: currentColor;\n          border-radius: 1px;\n        }\n        \n        &::before {\n          width: 2px;\n          height: 16px;\n          top: 2px;\n          left: 9px;\n          transform: rotate(45deg);\n        }\n        \n        &::after {\n          width: 2px;\n          height: 16px;\n          top: 2px;\n          left: 9px;\n          transform: rotate(-45deg);\n        }\n      }\n\n      &:hover { \n        transform: translateY(-2px); \n        background: rgba(255,255,255,.08); \n      }\n    }\n  \n    @media (max-width: 600px) {\n      .contact-chip { width: 100%; justify-content: center; }\n    }\n  }\n  \n\n// ===== Footer =====\n.site-footer {\n    padding: 2rem 0;\n  \n    .container {\n      @include container;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      gap: 1rem;\n    }\n  \n    .to-top {\n      text-decoration: none;\n      background: rgba(255, 255, 255, 0.08);\n      padding: 0.4rem 0.6rem;\n      border-radius: 4px;\n    }\n  }\n\n// ===== Modal =====\n.modal {\n    position: fixed;\n    inset: 0;\n    display: grid;\n    place-items: center;\n    padding: 1rem;\n    background: rgba(0, 0, 0, 0.55);\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.2s ease;\n  \n    .modal-dialog {\n      width: min(100% - 2rem, 720px);\n      background: $surface;\n      color: $text;\n      border-radius: 4px;\n      padding: 1.5rem 1.25rem;\n      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);\n      transform: translateY(10px);\n      transition: transform 0.2s ease;\n    }\n  \n    &.open {\n      opacity: 1;\n      pointer-events: auto;\n  \n      .modal-dialog {\n        transform: translateY(0);\n      }\n    }\n  \n    .modal-close {\n      position: absolute;\n      top: 10px;\n      right: 18px;\n      font-size: 1.6rem;\n      background: transparent;\n      color: $muted;\n      border: none;\n      cursor: pointer;\n  \n      &:hover {\n        color: $text;\n      }\n    }\n  }\n\n// ===== Responsive =====\n@media (max-width: 1024px) {\n  .capabilities .capabilities-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (max-width: 720px) {\n  .nav {\n    height: $nav-small;\n  }\n  \n  .nav-links {\n    justify-content: center;\n    flex-wrap: wrap;\n  }\n  \n  .intro {\n    min-height: calc(100vh - #{$nav-small});\n  }\n  \n  .capabilities .capabilities-grid {\n    grid-template-columns: 1fr;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./assets/background.png":
/*!*******************************!*\
  !*** ./assets/background.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5c7e69c5084aff1a8dde.png";

/***/ }),

/***/ "./assets/query.png":
/*!**************************!*\
  !*** ./assets/query.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "09094071b122eada232c.png";

/***/ }),

/***/ "./assets/search.png":
/*!***************************!*\
  !*** ./assets/search.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "41dddf17197440bb2037.png";

/***/ }),

/***/ "./assets/vectordb.webp":
/*!******************************!*\
  !*** ./assets/vectordb.webp ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d8115ddbe00d488700d8.webp";

/***/ }),

/***/ "./assets/videos/demo.mp4":
/*!********************************!*\
  !*** ./assets/videos/demo.mp4 ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "64ab9bf5c4c95922807a.mp4";

/***/ }),

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/vectordb.webp */ "./assets/vectordb.webp"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/search.png */ "./assets/search.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/query.png */ "./assets/query.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/videos/demo.mp4 */ "./assets/videos/demo.mp4"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />\n  <title>VectorFind — On‑device AI Search</title>\n  <link rel=\"icon\" type=\"image/x-icon\" href=\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔍</text></svg>\">\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n  <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap\" rel=\"stylesheet\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\n</head>\n<body>\n    <!-- Navigation Bar -->\n    <header id=\"top\" class=\"site-header\">\n    <nav id=\"navbar\" class=\"nav\">\n        <ul class=\"nav-links\">\n        <li><a class=\"nav-link\" href=\"#why-vectorfind\">Why VectorFind</a></li>\n        <li><a class=\"nav-link\" href=\"#how-it-works\">How it Works</a></li>\n        <li><a class=\"nav-link\" href=\"#use-cases\">Use Cases</a></li>\n        <li><a class=\"nav-link\" href=\"#capabilities\">Capabilities</a></li>\n        <li><a class=\"nav-link\" href=\"#demo\">Demo</a></li>\n        <li><a class=\"nav-link\" href=\"#contact\">Contact</a></li>\n        </ul>\n    </nav>\n    </header>\n\n    <!-- ===== intro (full-bleed stripe, vertical centering) ===== -->\n    <section id=\"hero\" class=\"stripe intro\">\n    <div class=\"intro-inner\">\n        <h1 class=\"intro-title\">Find anything on your device by meaning, not filename.</h1>\n        <p class=\"intro-subtitle\">On‑device LLM embeddings + a private vector database let you search files, images, and notes using natural language or voice.</p>\n        <div class=\"intro-cta\">\n        <a href=\"#use-cases\" class=\"btn primary\">Explore use cases</a>\n        <a href=\"#demo\" class=\"btn ghost\">Watch demo</a>\n        </div>\n    </div>\n    </section>\n\n    <!-- ===== ABOUT (two-line overlay on background) ===== -->\n    <section id=\"why-vectorfind\" class=\"stripe about hero-bg\" aria-label=\"Why VectorFind\">\n        <div class=\"about-overlay\">\n        <h2 class=\"about-line\">Private, semantic search for your files and images.</h2>\n        <p class=\"about-subline\">Ask “the PDF with LLM latency benchmarks” or “photo where we held a blue drone.” VectorFind embeds content locally and searches a vector DB to retrieve by meaning — no cloud, no upload.</p>\n        </div>\n    </section>\n\n\n    <!-- ===== EXPERIENCE GALLERY (logos + modals) ===== -->\n<section id=\"how-it-works\" class=\"stripe experience\">\n    <div class=\"container\">\n      <h2>How it works</h2>\n  \n      <div class=\"grid logos\">\n        <figure class=\"tile\" data-modal=\"#indexing-modal\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Indexing\" />\n          <figcaption>\n            <span class=\"company\">Indexing</span>\n            <span class=\"role\">LLM chunking + embeddings</span>\n            <span class=\"dates\">Text, PDF, images</span>\n          </figcaption>\n        </figure>\n  \n        <figure class=\"tile\" data-modal=\"#vectordb-modal\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Vector DB\" />\n          <figcaption>\n            <span class=\"company\">Vector DB</span>\n            <span class=\"role\">Approximate nearest neighbor</span>\n            <span class=\"dates\">On-device FAISS/HNSW</span>\n          </figcaption>\n        </figure>\n  \n        <figure class=\"tile\" data-modal=\"#query-modal\">\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Query\" />\n          <figcaption>\n            <span class=\"company\">Query</span>\n            <span class=\"role\">Natural text or voice</span>\n            <span class=\"dates\">Semantic retrieval</span>\n          </figcaption>\n        </figure>\n\n      </div>\n    </div>\n  </section>\n  \n  <!-- ===== EXPERIENCE MODALS (reuse existing modal system) ===== -->\n  <div id=\"indexing-modal\" class=\"modal\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"indexingTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <button class=\"modal-close\" aria-label=\"Close modal\">×</button>\n      <h3 id=\"indexingTitle\">Indexing — Content Processing</h3>\n      <p class=\"meta\">On-device LLM chunking + embeddings</p>\n      <ul>\n        <li>Intelligent document chunking using local LLMs to understand content structure and context.</li>\n        <li>Generate high-quality embeddings for text, PDF content, and image captions using on-device models.</li>\n        <li>Process multiple file formats: documents, images, notes, presentations, and more.</li>\n        <li>Maintain semantic relationships between chunks for better retrieval accuracy.</li>\n      </ul>\n    </div>\n  </div>\n  \n  <div id=\"vectordb-modal\" class=\"modal\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"vectordbTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <button class=\"modal-close\" aria-label=\"Close modal\">×</button>\n      <h3 id=\"vectordbTitle\">Vector Database — Storage & Retrieval</h3>\n      <p class=\"meta\">On-device FAISS/HNSW approximate nearest neighbor</p>\n      <ul>\n        <li>Efficient vector storage using FAISS or HNSW algorithms optimized for local hardware.</li>\n        <li>Fast approximate nearest neighbor search to find semantically similar content.</li>\n        <li>Index compression and optimization to minimize memory footprint on your device.</li>\n        <li>Real-time updates as new files are added or existing content is modified.</li>\n      </ul>\n    </div>\n  </div>\n  \n  <div id=\"query-modal\" class=\"modal\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"queryTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <button class=\"modal-close\" aria-label=\"Close modal\">×</button>\n      <h3 id=\"queryTitle\">Query Interface — Natural Language Search</h3>\n      <p class=\"meta\">Natural text or voice input with semantic retrieval</p>\n      <ul>\n        <li>Process natural language queries using on-device LLMs to understand user intent.</li>\n        <li>Convert voice input to text using local speech recognition for hands-free searching.</li>\n        <li>Transform queries into vector embeddings for semantic matching against your content.</li>\n        <li>Return ranked results with relevance scores and context snippets for each match.</li>\n      </ul>\n    </div>\n  </div>\n  \n  \n\n    <!-- ===== PROJECTS / CAROUSEL ===== -->\n    <section id=\"use-cases\" class=\"stripe projects\">\n    <div class=\"container\">\n        <h2>Use cases</h2>\n        <div class=\"carousel-container\">\n          <button class=\"carousel-btn prev-btn\" onclick=\"changeSlide(-1)\">‹</button>\n          <div class=\"carousel-wrapper\">\n            <div class=\"carousel-slides\" id=\"carouselSlides\">\n              <div class=\"slide slide-1\">\n                <h3>Find slides by topic</h3>\n                <p>Search through presentations and documents using natural language. Ask \"deck with latency charts from last quarter\" and VectorFind will find the right file based on content, not just filenames.</p>\n              </div>\n              <div class=\"slide slide-2\">\n                <h3>Locate photos by context</h3>\n                <p>Find images by describing what's in them. Say \"photos from the hike where we crossed a red bridge\" and get instant results, even without remembering exact keywords or dates.</p>\n              </div>\n              <div class=\"slide slide-3\">\n                <h3>Recover ideas from notes</h3>\n                <p>Search across all your note-taking apps and documents. Ask for \"notes about meeting action items for VectorFind alpha\" and retrieve content by meaning, not just text matching.</p>\n              </div>\n            </div>\n          </div>\n          <button class=\"carousel-btn next-btn\" onclick=\"changeSlide(1)\">›</button>\n        </div>\n    </div>\n    </section>\n\n\n  <!-- ===== CAPABILITIES ===== -->\n  <section id=\"capabilities\" class=\"stripe capabilities\">\n    <div class=\"container\">\n      <h2>Capabilities</h2>\n      <p class=\"capabilities-subtitle\">Everything runs on your device. No cloud, no uploads, complete privacy.</p>\n      \n      <div class=\"capabilities-grid\">\n        <div class=\"capability-card\">\n          <div class=\"capability-icon\">🔒</div>\n          <h3>On-device Privacy</h3>\n          <p>Your data never leaves your laptop. Everything processes locally with complete privacy protection.</p>\n        </div>\n        \n        <div class=\"capability-card\">\n          <div class=\"capability-icon\">🔍</div>\n          <h3>Multimodal Search</h3>\n          <p>Search across text, PDFs, images, and notes using natural language queries and semantic understanding.</p>\n        </div>\n        \n        <div class=\"capability-card\">\n          <div class=\"capability-icon\">🎤</div>\n          <h3>Voice Queries</h3>\n          <p>Ask questions hands-free with voice input. Local speech recognition ensures privacy and convenience.</p>\n        </div>\n        \n        <div class=\"capability-card\">\n          <div class=\"capability-icon\">⚡</div>\n          <h3>Lightning Fast</h3>\n          <p>Optimized vector search with FAISS/HNSW algorithms delivers instant results from your local database.</p>\n        </div>\n      </div>\n    </div>\n  </section>\n  \n  \n  \n  \n  \n\n\n  <!-- ===== HTML5 VIDEO ===== -->\n  <section id=\"demo\" class=\"stripe video-section\">\n    <div class=\"container\">\n      <h2>Demo</h2>\n      <video controls preload=\"metadata\">\n        <source src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" type=\"video/mp4\">\n        Your browser does not support the HTML5 video tag.\n      </video>\n    </div>\n  </section>\n  \n\n<!-- ===== CONTACT (simple) ===== -->\n<section id=\"contact\" class=\"stripe contact-min\">\n    <div class=\"container\">\n      <h2>Let’s connect</h2>\n      <p class=\"lead\">Questions or want early access? <br> Reach out and we’ll get you set up. </p>\n  \n      <nav class=\"contact-actions\" aria-label=\"Contact links\">\n        <!-- Email -->\n        <a class=\"contact-chip\" href=\"mailto:aryant2@illinois.edu\" aria-label=\"Email VectorFind\">\n          <i class=\"fas fa-envelope icon\"></i>\n          <span>aryant2@illinois.edu</span>\n        </a>\n  \n        <!-- LinkedIn -->\n        <a class=\"contact-chip\" href=\"https://www.linkedin.com/in/aryan-taneja-725249187/\" target=\"_blank\" rel=\"noopener\" aria-label=\"LinkedIn profile\">\n          <i class=\"fab fa-linkedin icon\"></i>\n          <span>@aryan-taneja</span>\n        </a>\n  \n        <!-- GitHub -->\n        <a class=\"contact-chip\" href=\"https://github.com/tanejaaryan\" target=\"_blank\" rel=\"noopener\" aria-label=\"GitHub profile\">\n          <i class=\"fab fa-github icon\"></i>\n          <span>@tanejaaryan</span>\n        </a>\n\n        <!-- Twitter/X -->\n        <a class=\"contact-chip\" href=\"https://twitter.com/tanejaaryan\" target=\"_blank\" rel=\"noopener\" aria-label=\"Twitter profile\">\n          <div class=\"x-icon\"></div>\n          <span>@tanejaaryan</span>\n        </a>\n\n      </nav>\n    </div>\n  </section>\n  \n\n  <!-- ===== FOOTER ===== -->\n  <footer class=\"stripe site-footer\">\n    <div class=\"container\">\n      <p>© <span id=\"year\"></span> Aryan Taneja, VectorFind. All rights reserved.</p>\n      <a class=\"to-top\" href=\"#hero\" aria-label=\"Back to top\">↑</a>\n    </div>\n  </footer>\n\n\n  \n</body>\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

window.history.scrollRestoration = 'manual';
window.scrollTo(0, 0); // ===================== UTILITIES =====================

var $ = function $(sel) {
  var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return ctx.querySelector(sel);
};

var $$ = function $$(sel) {
  var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return Array.from(ctx.querySelectorAll(sel));
}; // ===================== NAVBAR: shrink on scroll + position indicator =====================


var nav = $('#navbar');
var links = $$('.nav-link');
var sections = ['#hero', '#why-vectorfind', '#how-it-works', '#use-cases', '#capabilities', '#demo', '#contact'].map(function (id) {
  return $(id);
}).filter(Boolean);
var lastActive = null;

function updateNavResize() {
  if (!nav) return;
  var shrink = window.scrollY > 8;
  nav.classList.toggle('shrink', shrink);
}

function updateActiveLink() {
  if (!nav || sections.length === 0) return; // We set active based on the section just below the bottom of the nav bar.

  var navBottom = nav.getBoundingClientRect().bottom + window.scrollY;
  var active = sections[0].id;
  var isAtBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50;

  if (isAtBottom) {
    active = sections[sections.length - 1].id;
  } else {
    var _iterator = _createForOfIteratorHelper(sections),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var sec = _step.value;
        var rect = sec.getBoundingClientRect();
        var top = rect.top + window.scrollY;

        if (top <= navBottom + 4) {
          active = sec.id;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  links.forEach(function (a) {
    return a.classList.toggle('active', a.getAttribute('href') === '#' + active);
  });
  lastActive = active;
}

function onScroll() {
  updateNavResize();
  updateActiveLink();
}

window.addEventListener('scroll', onScroll, {
  passive: true
});
window.addEventListener('resize', onScroll);
document.addEventListener('DOMContentLoaded', function () {
  // set current year
  $('#year').textContent = new Date().getFullYear();
  onScroll();
}); // ===================== SMOOTH SCROLLING (for browsers without CSS smooth) =====================

links.forEach(function (a) {
  a.addEventListener('click', function (e) {
    e.preventDefault();
    var target = $(a.getAttribute('href'));
    if (!target) return;
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}); // ===================== CAROUSEL =====================

var currentSlide = 0;
var totalSlides = 3; // Make changeSlide globally accessible

window.changeSlide = function (direction) {
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  var slidesContainer = document.getElementById('carouselSlides');

  if (slidesContainer) {
    slidesContainer.style.transform = "translateX(-".concat(currentSlide * 33.333, "%)");
  }
}; // ===================== MODALS =====================


function openModal(el) {
  el.classList.add('open');
  el.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal(el) {
  el.classList.remove('open');
  el.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

$$('[data-modal]').forEach(function (el) {
  el.addEventListener('click', function () {
    var modal = $(el.getAttribute('data-modal'));
    if (modal) openModal(modal);
  });
});
$$('.modal').forEach(function (modal) {
  modal.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal') || e.target.classList.contains('modal-close')) {
      closeModal(modal);
    }

    if (e.key === 'Escape') closeModal(modal);
  });
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    $$('.modal.open').forEach(closeModal);
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ "./css/main.scss");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ "./js/main.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);
/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */
// HTML Files
 // Stylesheets

 // Scripts


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map