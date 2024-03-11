chrome.storage.local.get("selectedWord", function(result) {
    document.getElementById("word-definition").innerText = result.selectedWord;
  });
  