document.getElementById('get-title-btn').addEventListener('click', () => {
    // Add an alert to notify the user that the button has been clicked
    alert('Button clicked! Fetching tab title...');
  
    // Query the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      const title = tab.title; // Get the tab's title
  
      // Display the title in the popup
      document.getElementById('title-display').textContent = title;
  
      // Add another alert to display the fetched title
      alert('The tab title is: ' + title);
    });
  });
  