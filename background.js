chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.id, {file: 'content.js'});
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'getDataAttributes') {
    let dataAttributes = {};
    let elements = document.querySelectorAll('[data-vv-*]');
    elements.forEach(function(element) {
      let attributes = element.attributes;
      for (let i = 0; i < attributes.length; i++) {
        let attribute = attributes[i];
        if (attribute.name.startsWith('data-vv-')) {
          dataAttributes[attribute.name] = attribute.value;
        }
      }
    });
    sendResponse(dataAttributes);
  }
});
