// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict'

const changeColor = document.querySelector('#changeColor')

chrome.storage.sync.get('color', function (data) {
  changeColor.style.backgroundColor = data.color
  changeColor.setAttribute('value', data.color)
})

changeColor.addEventListener('click', element => {
  let color = element.target.value
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.executeScript(tabs[0].id, {
      code: 'document.body.style.backgroundColor = "' + color + '";'
    })
  })
})
