chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "getSelectedWord") {
      chrome.storage.local.get(["selectedWord", "dictionary"], function(result) {
        var selectedWord = result.selectedWord;
        var dictionary = result.dictionary || {};
        if (selectedWord in dictionary) {
          sendResponse({ definition: dictionary[selectedWord] });
        } else {
          sendResponse({ definition: "No se encontró definición." });
        }
      });
    }
  });
  
  