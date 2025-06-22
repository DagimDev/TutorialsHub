// MutationObserver
// Definition:
// Watches for changes being made to the DOM tree.

// Deep Dive:

const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList') {
      console.log('Nodes changed');
    }
  });
});

observer.observe(document.body, {
  childList: true,
  attributes: true,
  subtree: true
});
// Observation Options:

// childList - Node additions/removals

// attributes - Attribute changes

// characterData - Text content changes

// subtree - Observe descendants

// attributeOldValue - Record old value

// attributeFilter - Specific attributes to watch

// Use Cases:

// UI framework internals

// Custom element reactions

// DOM change analytics

// Synchronizing external state