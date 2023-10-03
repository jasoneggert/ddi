chrome.runtime.sendMessage({action: 'getDataAttributes'}, function(response) {
  let dataAttributes = response;
  let list = document.getElementById('data-attributes');
  for (let key in dataAttributes) {
    let listItem = document.createElement('li');
    listItem.textContent = key + ': ' + dataAttributes[key];
    listItem.addEventListener('mouseover', function() {
      let elements = document.querySelectorAll('[' + key + ']');
      elements.forEach(function(element) {
        element.style.outline = '2px solid red';
      });
    });
    listItem.addEventListener('mouseout', function() {
      let elements = document.querySelectorAll('[' + key + ']');
      elements.forEach(function(element) {
        element.style.outline = '';
      });
    });
    list.appendChild(listItem);
  }
});
