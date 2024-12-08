console.log("background script");

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  // message we got from host url (content script) // type of any
  console.log(msg);
  // info on the sender
  console.log(sender);
  // This will be on the content script
  sendResponse("From the bg script");
});
