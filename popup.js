// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let openUi = document.getElementById('openUi');

openUi.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.windows.create({
      type: 'popup',
      url: 'Agencies.html',
      left: 5,
      top: 100,
      focused: true
    });
  /*  chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
  */
});

};
