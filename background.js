chrome.runtime.onInstalled.addListener(({reason}) => {
  if (reason === 'install') {
    chrome.tabs.create({
      url: "onboarding.html"
    });
  }
});

chrome.action.onClicked.addListener(function(tab) {
  chrome.scripting.executeScript({
    file: "content.js"
  });
});
// chrome.action.onClicked.addListener(function(tab) {
//   // No tabs or host permissions needed!
//   alert("button is clicked");
//   chrome.scripting.executeScript({
//     code: 'document.body.style.backgroundColor="red"'
//   });
// });