(function() {
  function swapAndAdjust() {
    const container = document.querySelector('ytmusic-like-button-renderer');
    if (!container) return;

    const likeBtn    = container.querySelector('#button-shape-like');
    const dislikeBtn = container.querySelector('#button-shape-dislike');
    if (!likeBtn || !dislikeBtn) return;

    const children = Array.from(container.children);
    if (children.indexOf(likeBtn) > children.indexOf(dislikeBtn)) {
      container.insertBefore(likeBtn, dislikeBtn);
      console.log('✔️ Swapped like/dislike');
    }

    likeBtn.style.setProperty('margin-right', '4px', 'important');
    likeBtn.style.setProperty('margin-left', '0', 'important');
    dislikeBtn.style.setProperty('margin-left', '4px', 'important');
    dislikeBtn.style.setProperty('margin-right', '0', 'important');
  }

  const observer = new MutationObserver(swapAndAdjust);
  observer.observe(document.body, { childList: true, subtree: true });

  setInterval(swapAndAdjust, 500);

  swapAndAdjust();
})();
