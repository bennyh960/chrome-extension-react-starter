console.log("content script running");

// This code will run on the Background
chrome.runtime.sendMessage("From content script!", (response) => {
  console.log(response);
});
