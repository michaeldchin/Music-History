document.addEventListener('DOMSubtreeModified', function(e) {
    if(document.getElementsByClassName("playbackSoundBadge").length > 0){
        a = document.getElementsByClassName("playbackSoundBadge__title sc-truncate")[0].getAttribute("title");
        alert(a);
    }
});

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (!mutation.addedNodes) return

    for (var i = 0; i < mutation.addedNodes.length; i++) {
      // do things to your newly added nodes here
      var node = mutation.addedNodes[i]
    }
  })
})

observer.observe(document.body, {
    childList: true
  , subtree: true
  , attributes: false
  , characterData: false
})

// stop watching using:
observer.disconnect()