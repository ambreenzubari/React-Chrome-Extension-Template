   chrome.runtime.onInstalled.addListener(
    ()=>{
        console.log("Extension installed")
    }
   )


   chrome.bookmarks.onCreated.addListener(()=>{
    console.log("I just bookmarked ths page")
   })