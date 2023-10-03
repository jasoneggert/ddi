
1. `manifest.json`: This is the manifest file for the Chrome extension. It describes the extension, its version, permissions, and files.

2. `background.js`: This is the background script for the Chrome extension. It scans the DOM for data attributes prefixed with `data-vv-` and sends this data to the content script.

3. `content.js`: This is the content script for the Chrome extension. It receives data from the background script and updates the extension's UI.

4. `styles.css`: This is the CSS file for the Chrome extension. It styles the extension's UI.

5. `popup.html`: This is the HTML file for the Chrome extension's UI. It displays the key-value pairs of the data attributes.
