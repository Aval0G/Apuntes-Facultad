document.addEventListener("dblclick", function(event) {
    var selectedWord = window.getSelection().toString().trim();
    if (selectedWord !== "") {
      var icon = document.createElement("img");
      icon.src = chrome.runtime.getURL("double-click-icon.png");
      icon.id = "dictionary-icon";
      icon.style.position = "absolute";
      icon.style.top = event.pageY + "px";
      icon.style.left = event.pageX + "px";
      document.body.appendChild(icon);
  
      icon.addEventListener("click", function() {
        chrome.runtime.sendMessage({ action: "getSelectedWord", selectedWord: selectedWord }, function(response) {
          alert(response.definition);
        });
        document.body.removeChild(icon);
      });
    }
  });
  