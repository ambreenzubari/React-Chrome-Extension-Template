/******/ (() => { // webpackBootstrap
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
   chrome.runtime.onInstalled.addListener(
    ()=>{
        console.log("Extension installed")
    }
   )


   chrome.bookmarks.onCreated.addListener(()=>{
    console.log("I just bookmarked ths page")
   })
/******/ })()
;
//# sourceMappingURL=background.js.map