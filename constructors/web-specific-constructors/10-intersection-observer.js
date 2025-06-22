// IntersectionObserver
// Definition:
// Asynchronously observes changes in the intersection of target elements with an ancestor.

// Deep Dive:

// javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Element is visible');
    }
  });
}, {
  root: null, // viewport
  threshold: 0.5, // 50% visibility
  rootMargin: '20px'
});

// observer.observe(document.querySelector('.target'));
// Configuration Options:

// root - Ancestor element (null = viewport)

// threshold - Visibility percentage to trigger

// rootMargin - Margin around root

// Methods:

// observe() - Starts observing element

// unobserve() - Stops observing

// disconnect() - Stops all observations

// Use Cases:

// Lazy loading images

// Infinite scroll

// Analytics tracking

// Animation triggers