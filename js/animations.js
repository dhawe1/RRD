/**
 * animations.js
 * -----------------------------------------------------------------------
 * Scroll-triggered reveals, hero entrance sequence, and small motion
 * helpers. Everything here respects `prefers-reduced-motion`.
 * -----------------------------------------------------------------------
 */

const motion = (() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let observer = null;

  function initRevealObserver() {
    if (observer) return observer;
    if (reduced) {
      observer = {
        observe(el) {
          el.classList.add("is-visible");
        },
      };
      return observer;
    }
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = Number(entry.target.dataset.revealDelay || 0);
            setTimeout(() => entry.target.classList.add("is-visible"), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    return observer;
  }

  /** Observe every element carrying a data-reveal attribute inside `root`. */
  function observeReveals(root = document) {
    const obs = initRevealObserver();
    const targets = root.querySelectorAll("[data-reveal]:not(.is-visible)");
    targets.forEach((el, idx) => {
      if (!el.dataset.revealDelay) {
        el.dataset.revealDelay = String((idx % 6) * 70);
      }
      obs.observe(el);
    });
  }

  /** Stagger children of a container by assigning incremental reveal delays. */
  function staggerChildren(container, baseDelay = 0, step = 70) {
    Array.from(container.children).forEach((child, i) => {
      child.setAttribute("data-reveal", "");
      child.dataset.revealDelay = String(baseDelay + i * step);
    });
  }

  function playHeroEntrance() {
    const hero = document.querySelector(".hero");
    if (!hero) return;
    requestAnimationFrame(() => hero.classList.add("hero-ready"));
  }

  function lockScroll(lock) {
    document.body.classList.toggle("scroll-locked", lock);
  }

  return { observeReveals, staggerChildren, playHeroEntrance, lockScroll, reduced };
})();
