'use strict'
// Listen for the messages send by clicking on the extension button
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'active') {
    document.body.style.textAlign = 'justify'
  } else {
    document.body.style.textAlign = 'initial'
  }
})
