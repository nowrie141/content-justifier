'use strict'
let toggle = false

// If the tab is updated set the toggle to false, so it activates when its clicked the first time
chrome.tabs.onUpdated.addListener(() => {
  toggle = false
})

// Send a message to the tab (activate, disable) in order to collect the request and justify the content.
chrome.browserAction.onClicked.addListener(tab => {
  toggle = !toggle
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const activeTab = tabs[0]
    if (toggle) {
      chrome.tabs.sendMessage(activeTab.id, { message: 'active' })
    } else {
      chrome.tabs.sendMessage(activeTab.id, { message: 'disable' })
    }
  })
})
