/**
 * app.js
 * -----------------------------------------------------------------------
 * Rendering, navigation, section-detail view, equipment modal, and all
 * user interaction. Reads content exclusively from data.js and resolves
 * strings exclusively through i18n.t(). Nothing bilingual is hardcoded
 * here — re-render on language change re-reads the same data.
 * -----------------------------------------------------------------------
 */

/* ============================== ICON SET =============================== */
const icons = {
  ppe: '<path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z"/><path d="M9 12l2 2 4-4"/>',
  sample: '<path d="M9 2h6M10 2v7l-5 9a3 3 0 0 0 3 4h8a3 3 0 0 0 3-4l-5-9V2"/><path d="M8 15h8"/>',
  chemical: '<path d="M9 3h6v5l4 8a3 3 0 0 1-3 4H8a3 3 0 0 1-3-4l4-8V3Z"/><path d="M8 8h8"/>',
  gas: '<circle cx="12" cy="13" r="7"/><path d="M12 6c1 1.5 2 2.3 2 4a2 2 0 0 1-4 0c0-1.7 1-2.5 2-4Z"/>',
  ignition: '<path d="M12 2s-5 5.5-5 10a5 5 0 0 0 10 0c0-1.2-.4-2.2-1-3.2 0 1.5-.8 2.4-1.6 2.4-1 0-1.4-.9-1.4-1.9C13 7 12 4.5 12 2Z"/>',
  emergency: '<path d="M12 3 3 8v8l9 5 9-5V8l-9-5Z"/><path d="M12 8v5M12 16.5h.01"/>',
  analysis: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/><path d="M8 11h6M11 8v6"/>',
  quality: '<path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6Z"/>',
  beneficiaries: '<path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6Z"/>',
  accuracy: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.6"/>',
  safety: '<path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z"/>',
  compliance: '<path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/>',
  equipment: '<rect x="4" y="4" width="7" height="7" rx="1.2"/><rect x="13" y="4" width="7" height="7" rx="1.2"/><rect x="4" y="13" width="7" height="7" rx="1.2"/><path d="M16.5 13.5v7M13 17h7"/>',
  tests: '<path d="M9 2h6M10 2v7l-5 9a3 3 0 0 0 3 4h8a3 3 0 0 0 3-4l-5-9V2"/><path d="M8 15h8"/>',
  beneficiaries: '<circle cx="8.5" cy="8" r="3"/><path d="M2 20c0-3 2.7-5 6.5-5s6.5 2 6.5 5"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 15.2c2.4.3 4.5 1.9 4.5 4.3"/>',
  products: '<path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z"/><path d="M4 7l8 4 8-4M12 11v10"/>',
};

function iconSvg(name, cls = "icon") {
  const path = icons[name] || icons.safety;
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
}

/* ============================ APP STATE ================================ */
const state = {
  activeSectionId: null, // section currently open in the detail view
  activeEquipmentId: null,
  activeVariantId: null, // sub-device currently open, for multi-device equipment
  activeStorageItem: null, // Laboratory Storage item currently open in the detail view
  activePillarId: null, // About-pillar (Beneficiaries/Final Products/Quality) open in the info modal
};

/* ============================ DOM SHORTCUTS ============================= */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* ============================== RENDERERS ================================ */

function renderStaticText() {
  $$("[data-i18n]").forEach((el) => {
    const path = el.getAttribute("data-i18n");
    const field = resolvePath(path);
    if (field != null) el.textContent = i18n.t(field);
  });
  document.title = i18n.t(ui.brand);
  const langBtn = $("#langToggle");
  if (langBtn) {
    const current = i18n.getLang();
    $$(".lang-switch__option", langBtn).forEach((opt) => {
      const isActive = opt.getAttribute("data-lang") === current;
      opt.setAttribute("data-active", isActive ? "true" : "false");
      opt.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }
  const searchToggle = $("#searchToggle");
  if (searchToggle) searchToggle.setAttribute("aria-label", i18n.t(ui.search.openLabel));
  const searchClose = $("#searchClose");
  if (searchClose) searchClose.setAttribute("aria-label", i18n.t(ui.search.closeLabel));
  const searchInput = $("#searchInput");
  if (searchInput) searchInput.setAttribute("placeholder", i18n.t(ui.search.placeholder));
}

/** Resolve a dotted path like "ui.hero.title" against the global scope. */
function resolvePath(path) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), window);
}

/** Splits a resolved (already-localized) pillar value string into an
 *  optional leading label and the trailing number that should animate —
 *  e.g. "More than 120,000" -> { prefix: "More than", target: 120000 }.
 *  Generic on purpose: works for any leading text in any language, so
 *  nothing language- or word-specific is hardcoded here. A string with
 *  no trailing number, or a plain number with no prefix, falls back
 *  cleanly. */
function parsePillarValue(raw) {
  if (typeof raw === "number") return { prefix: null, target: raw };
  const str = String(raw).trim();
  const match = str.match(/([\d,]+)\s*$/);
  if (!match) return { prefix: null, target: null, text: str };
  const target = parseInt(match[1].replace(/,/g, ""), 10);
  const prefix = str.slice(0, match.index).trim();
  return { prefix: prefix || null, target };
}

function renderPillars() {
  const grid = $("#pillarsGrid");
  if (!grid) return;

  grid.innerHTML = ui.about.pillars
    .map((p, i) => {
      // Every pillar (Equipment Count, Tests Count, Beneficiaries, Final
      // Products, ...) reads its displayed figure directly from the
      // `value` defined on the pillar itself in data.js — see the
      // comment above ui.about.pillars for the two supported shapes.
      const hasValue = p.value != null;
      const parsed = hasValue ? parsePillarValue(typeof p.value === "number" ? p.value : i18n.t(p.value)) : null;
      const hasDetail = !!ui.about.pillarDetails[p.id];

      let valueMarkup = "";
      if (parsed && parsed.target != null && parsed.prefix) {
        // Labeled counter: small prefix above a large, comma-formatted,
        // animated number — used by Equipment Count / Tests Count.
        valueMarkup = `
        <span class="pillar__value pillar__value--prefixed">
          <span class="pillar__value-prefix">${parsed.prefix}</span>
          <span class="pillar__value-number" data-count-to="${parsed.target}" data-count-format="comma">0</span>
        </span>`;
      } else if (parsed && parsed.target != null) {
        // Plain animated counter — Beneficiaries / Final Products, unchanged.
        valueMarkup = `<span class="pillar__value" data-count-to="${parsed.target}">0</span>`;
      } else if (parsed && parsed.text) {
        // No trailing number found — show the text as-is, no animation.
        valueMarkup = `<span class="pillar__value">${parsed.text}</span>`;
      }

      return `
      <div class="pillar${hasDetail ? " pillar--clickable" : ""}" data-reveal data-reveal-delay="${i * 60}"
        ${hasDetail ? `data-open-pillar="${p.id}" tabindex="0" role="button" aria-label="${i18n.t(p.title)}"` : ""}>
        ${iconSvg(p.icon, "pillar__icon")}
        ${valueMarkup}
        <span class="pillar__title">${i18n.t(p.title)}</span>
      </div>`;
    })
    .join("");

  initCountUp(grid);

  $$("[data-open-pillar]", grid).forEach((card) => {
    const openFn = () => openPillarModal(card.getAttribute("data-open-pillar"));
    card.addEventListener("click", openFn);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openFn();
      }
    });
  });
}

/** Opens the shared #equipmentModal in its transparent "glass" info
 *  variant (no media image) to show details for a clickable About
 *  pillar (Beneficiaries / Final Products / Quality). Content comes
 *  entirely from ui.about.pillarDetails — edit that data, not this
 *  function. */
function openPillarModal(pillarId) {
  const detail = ui.about.pillarDetails[pillarId];
  if (!detail) return;

  state.activePillarId = pillarId;
  state.activeEquipmentId = null;
  state.activeVariantId = null;
  state.activeStorageItem = null;

  const modal = $("#equipmentModal");
  cancelModalVariantCleanup(modal);
  modal.classList.add("modal--glass", "modal--no-media");

  $("#equipmentModal .modal__category").textContent = "";
  $("#equipmentModal .modal__title").removeAttribute("dir");
  $("#equipmentModal .modal__title").textContent = i18n.t(detail.title);

  // The "beneficiaries" pillar renders its highlights as a compact
  // 2-column card grid (name only, no description). Every other
  // pillar (Quality, etc.) keeps the original key/desc list untouched.
  const highlightsMarkup =
    detail.highlights && detail.highlights.length
      ? pillarId === "beneficiaries"
        ? `<div class="beneficiaries-grid">
            ${detail.highlights
              .map(
                (h) => `
              <div class="beneficiary-card">${i18n.t(h.key)}</div>`
              )
              .join("")}
          </div>`
        : `<div class="modal__highlights">
          ${detail.highlights
            .map(
              (h) => `
            <div class="modal__highlight">
              <span class="modal__highlight-key">${i18n.t(h.key)}</span>
              <span class="modal__highlight-desc">${i18n.t(h.desc)}</span>
            </div>`
            )
            .join("")}
        </div>`
      : "";

  $("#equipmentModal .modal__body").innerHTML = `
    <div class="detail-block">
      <p>${i18n.t(detail.body)}</p>
    </div>
    ${highlightsMarkup}
  `;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  motion.lockScroll(true);
  $("#equipmentModal .modal__close").focus();
}

/** Lightweight count-up for [data-count-to] elements once they scroll
 *  into view. Respects prefers-reduced-motion (jumps straight to the
 *  final value) and uses IntersectionObserver + requestAnimationFrame
 *  only — no continuous animation loop. Elements marked
 *  data-count-format="comma" render with thousands separators (e.g.
 *  120,000) at every step, including the final value. */
function initCountUp(container) {
  const els = $$("[data-count-to]", container);
  if (!els.length) return;
  const formatValue = (el, n) => (el.dataset.countFormat === "comma" ? n.toLocaleString("en-US") : String(n));
  if (motion.reduced || !("IntersectionObserver" in window)) {
    els.forEach((el) => {
      const target = parseInt(el.getAttribute("data-count-to"), 10) || 0;
      el.textContent = formatValue(el, target);
    });
    return;
  }
  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-count-to"), 10) || 0;
        const duration = 1100;
        const start = performance.now();
        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = formatValue(el, Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        observer.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );
  els.forEach((el) => io.observe(el));
}

function renderSafetyCards() {
  const grid = $("#safetyGrid");
  if (!grid) return;
  grid.innerHTML = safetyCards
    .map(
      (c, i) => `
      <article class="safety-card" data-reveal data-reveal-delay="${i * 70}" data-safety-card="${c.id}">
        <div class="safety-card__media">
          <img src="${c.image}" alt="${i18n.t(c.title)}" loading="lazy" />
          <span class="safety-card__icon">${iconSvg(c.icon)}</span>
        </div>
        <div class="safety-card__body">
          <h3 class="safety-card__title">${i18n.t(c.title)}</h3>
          <p class="safety-card__desc">${i18n.t(c.description)}</p>
        </div>
      </article>`
    )
    .join("");
}

function renderSectionCards() {
  const grid = $("#sectionsGrid");
  if (!grid) return;
  grid.innerHTML = laboratorySections
    .map(
      (s, i) => `
      <article class="section-card" data-reveal data-reveal-delay="${i * 60}">
        <div class="section-card__media">
          <img src="${s.image}" alt="${i18n.t(s.title)}" loading="lazy" />
          <span class="section-card__badge">${String(i + 1).padStart(2, "0")}</span>
        </div>
        <div class="section-card__body">
          <h3 class="section-card__title">${i18n.t(s.title)}</h3>
          <p class="section-card__desc">${i18n.t(s.description)}</p>
          <button class="btn btn--ghost section-card__cta" data-open-section="${s.id}">
            <span>${s.available ? i18n.t(ui.sectionsSection.exploreBtn) : i18n.t(ui.nav.sections)}</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </button>
        </div>
      </article>`
    )
    .join("");

  $$("[data-open-section]", grid).forEach((btn) => {
    btn.addEventListener("click", () => openSectionView(btn.getAttribute("data-open-section")));
  });
}

/** Card for the equipment/test grid shown inside a section (e.g.
 *  Hydrocarbon): image on top, test name centered underneath, method
 *  number at the bottom. Uses its own .test-card/.test-grid classes so
 *  the existing .equip-card/.equip-grid styling used elsewhere (the
 *  "Other Devices" strip inside the equipment modal) is left untouched.
 *  Clicking the card opens the same complete equipment detail as before
 *  — no data is added, removed, or invented here. */
function equipmentCardMarkup(eq, i) {
  const methodBlock = eq.methodNo
    ? `<span class="test-card__method">${i18n.t(eq.methodNo)}</span>`
    : "";
  return `
    <article class="test-card" data-reveal data-reveal-delay="${i * 50}" data-open-equipment="${eq.id}" tabindex="0" role="button" aria-label="${i18n.tEquip(eq.title)}">
      <div class="test-card__media"><img src="${eq.image}" alt="${i18n.tEquip(eq.title)}" loading="lazy" /></div>
      <span class="test-card__category">${i18n.t(eq.category)}</span>
      <h4 class="test-card__title" dir="ltr">${i18n.tEquip(eq.title)}</h4>
      ${methodBlock}
    </article>`;
}

function renderSectionView(sectionId) {
  const section = laboratorySections.find((s) => s.id === sectionId);
  const view = $("#sectionView");
  if (!section || !view) return;

  if (!section.available) {
    view.innerHTML = `
      <div class="section-view__hero" style="background-image:url('${section.image}')">
        <div class="section-view__hero-overlay"></div>
        <button class="btn btn--icon section-view__back" data-close-section aria-label="${i18n.t(ui.sectionsSection.backToSections)}">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <div class="section-view__hero-content">
          <span class="eyebrow">${i18n.t(ui.sectionsSection.eyebrow)}</span>
          <h2>${i18n.t(section.title)}</h2>
        </div>
      </div>
      <div class="section-view__body">
        <div class="empty-state" data-reveal>
          ${iconSvg("analysis", "empty-state__icon")}
          <h3>${i18n.t(ui.sectionsSection.comingSoon)}</h3>
          <p>${i18n.t(ui.sectionsSection.comingSoonBody)}</p>
          <button class="btn btn--ghost" data-close-section>${i18n.t(ui.sectionsSection.backToSections)}</button>
        </div>
      </div>`;
  } else {
    const groups = section.categories.map((cat) => {
      const items = section.equipment.filter(
        (eq) => i18n.t(eq.category) === i18n.t(cat) || eq.category.ar === cat.ar
      );
      return { cat, items };
    });

    view.innerHTML = `
      <div class="section-view__hero" style="background-image:url('${section.image}')">
        <div class="section-view__hero-overlay"></div>
        <button class="btn btn--icon section-view__back" data-close-section aria-label="${i18n.t(ui.sectionsSection.backToSections)}">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <div class="section-view__hero-content">
          <span class="eyebrow">${i18n.t(ui.sectionsSection.eyebrow)}</span>
          <h2>${i18n.t(section.title)}</h2>
          <p>${i18n.t(section.description)}</p>
        </div>
      </div>
      <div class="section-view__body">
        ${groups
          .map(
            (g) => `
          <div class="equip-group" data-reveal>
            <h3 class="equip-group__title">${i18n.t(g.cat)}</h3>
            <div class="test-grid">
              ${g.items.map((eq, i) => equipmentCardMarkup(eq, i)).join("")}
            </div>
          </div>`
          )
          .join("")}
      </div>`;
  }

  $$("[data-close-section]", view).forEach((btn) => btn.addEventListener("click", closeSectionView));
  $$("[data-open-equipment]", view).forEach((card) => {
    const openFn = () => openEquipmentModal(card.getAttribute("data-open-equipment"), section);
    card.addEventListener("click", openFn);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openFn();
      }
    });
  });

  motion.observeReveals(view);
}

function openSectionView(sectionId) {
  state.activeSectionId = sectionId;
  renderSectionView(sectionId);
  document.body.classList.add("section-view-open");
  $("#sectionView").classList.add("is-open");
  motion.lockScroll(true);
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  history.replaceState(null, "", `#section-${sectionId}`);
}

function closeSectionView() {
  state.activeSectionId = null;
  document.body.classList.remove("section-view-open");
  $("#sectionView").classList.remove("is-open");
  motion.lockScroll(false);
  history.replaceState(null, "", "#sections");
  setActiveNav("sections");
}

/* ============================ EQUIPMENT MODAL ============================ */

/** Builds the definition/why/purpose/bona/method detail markup shared by
 *  plain equipment items AND individual device variants — same shape, so
 *  the same renderer works for both. */
function detailBlocksMarkup(entry) {
  const methodBlock = entry.methodNo
    ? `<div class="detail-block detail-block--method">
         <span class="detail-block__label">${i18n.t(ui.detail.methodNo)}</span>
         <p class="detail-block__method">${i18n.t(entry.methodNo)}</p>
       </div>`
    : "";
  const bonaBlock = entry.bonaBreakdown
    ? `<div class="detail-block">
         <span class="detail-block__label">${i18n.t(ui.detail.bonaBreakdown)}</span>
         <div class="bona-grid">
           ${entry.bonaBreakdown
             .map(
               (b) => `
             <div class="bona-card">
               <h5>${i18n.t(b.title)}</h5>
               <p>${i18n.t(b.description)}</p>
             </div>`
             )
             .join("")}
         </div>
       </div>`
    : "";

  return `
    <div class="detail-block">
      <span class="detail-block__label">${i18n.t(ui.detail.definition)}</span>
      <p>${i18n.t(entry.definition)}</p>
    </div>
    <div class="detail-block">
      <span class="detail-block__label">${i18n.t(ui.detail.why)}</span>
      <p>${i18n.t(entry.why)}</p>
    </div>
    <div class="detail-block">
      <span class="detail-block__label">${i18n.t(ui.detail.purpose)}</span>
      <p>${i18n.t(entry.purpose)}</p>
    </div>
    ${bonaBlock}
    ${methodBlock}
  `;
}

/** Markup for the "Other Devices" strip: the additional physical devices
 *  (variants) belonging to an equipment item, rendered as the existing
 *  .equip-grid / .equip-card tiles. Appears BELOW the main equipment's
 *  own details — it never replaces them. */
function otherDevicesMarkup(eq) {
  return `
    <div class="detail-block">
      <span class="detail-block__label">${i18n.t(ui.detail.otherDevices)}</span>
      <div class="equip-grid">
        ${eq.variants
          .map(
            (v, i) => `
          <article class="equip-card" data-reveal data-reveal-delay="${i * 50}" data-open-variant="${v.id}" tabindex="0" role="button" aria-label="${i18n.tEquip(v.name)}">
            <div class="equip-card__media"><img src="${v.image}" alt="${i18n.tEquip(v.name)}" loading="lazy" /></div>
            <div class="equip-card__body">
              <span class="equip-card__category">${i18n.t(eq.category)}</span>
              <h4 class="equip-card__title" dir="ltr">${i18n.tEquip(v.name)}</h4>
            </div>
            <div class="equip-card__arrow">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </div>
          </article>`
          )
          .join("")}
      </div>
    </div>
  `;
}

/** Renders the MAIN equipment's own details (image/title/category/
 *  definition/why/purpose/methodNo — same as equipment without variants)
 *  followed immediately by the "Other Devices" strip. This is the
 *  landing screen for any equipment item that has `variants`. */
function renderMainWithVariants(eq) {
  state.activeVariantId = null;

  $("#equipmentModal .modal__media img").src = eq.image;
  $("#equipmentModal .modal__media img").alt = i18n.tEquip(eq.title);
  $("#equipmentModal .modal__category").textContent = i18n.t(eq.category);
  $("#equipmentModal .modal__title").setAttribute("dir", "ltr");
  $("#equipmentModal .modal__title").textContent = i18n.tEquip(eq.title);
  $("#equipmentModal .modal__body").innerHTML = `
    ${detailBlocksMarkup(eq)}
    ${otherDevicesMarkup(eq)}
  `;

  $$("#equipmentModal [data-open-variant]").forEach((card) => {
    const openFn = () => renderVariantDetail(eq, card.getAttribute("data-open-variant"));
    card.addEventListener("click", openFn);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openFn();
      }
    });
  });

  motion.observeReveals($("#equipmentModal .modal__body"));
}

/** Renders one selected device's full detail, plus a back link that
 *  returns to the main equipment's details + other-devices strip. */
function renderVariantDetail(eq, variantId) {
  const variant = eq.variants.find((v) => v.id === variantId);
  if (!variant) return;
  state.activeVariantId = variantId;

  $("#equipmentModal .modal__media img").src = variant.image;
  $("#equipmentModal .modal__media img").alt = i18n.tEquip(variant.name);
  $("#equipmentModal .modal__category").textContent = i18n.t(eq.category);
  $("#equipmentModal .modal__title").setAttribute("dir", "ltr");
  $("#equipmentModal .modal__title").textContent = i18n.tEquip(variant.name);
  $("#equipmentModal .modal__body").innerHTML = `
    <button class="btn btn--ghost" type="button" data-back-to-variants>
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      <span>${i18n.t(ui.detail.backToDevices)}</span>
    </button>
    ${detailBlocksMarkup(variant)}
  `;

  $("#equipmentModal [data-back-to-variants]").addEventListener("click", () => {
    renderMainWithVariants(eq);
  });
}

function openEquipmentModal(equipmentId, section) {
  const eq = section.equipment.find((e) => e.id === equipmentId);
  if (!eq) return;
  state.activeEquipmentId = equipmentId;
  state.activeStorageItem = null;
  const modal = $("#equipmentModal");
  cancelModalVariantCleanup(modal);
  modal.classList.remove("modal--glass", "modal--no-media");

  if (eq.variants && eq.variants.length) {
    if (state.activeVariantId && eq.variants.some((v) => v.id === state.activeVariantId)) {
      renderVariantDetail(eq, state.activeVariantId);
    } else {
      renderMainWithVariants(eq);
    }
  } else {
    $("#equipmentModal .modal__media img").src = eq.image;
    $("#equipmentModal .modal__media img").alt = i18n.tEquip(eq.title);
    $("#equipmentModal .modal__category").textContent = i18n.t(eq.category);
    $("#equipmentModal .modal__title").setAttribute("dir", "ltr");
    $("#equipmentModal .modal__title").textContent = i18n.tEquip(eq.title);
    $("#equipmentModal .modal__body").innerHTML = detailBlocksMarkup(eq);
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  motion.lockScroll(true);
  $("#equipmentModal .modal__close").focus();
}

/** Defers stripping the "modal--glass"/"modal--no-media" variant classes
 *  (used by the pillar info modal) until the modal has actually finished
 *  fading out, instead of removing them the instant Close is clicked.
 *  Removing them immediately — while the panel is still visible and
 *  mid-transition — flips the panel back to its opaque/white,
 *  media-visible state a split second before it's actually gone,
 *  which reads as a second box flashing on close. Listens for the
 *  modal's own opacity transition to end, with a safety-net timeout
 *  in case that event doesn't fire for any reason. Also guards against
 *  stripping the classes if the modal has since been reopened. */
function scheduleModalVariantCleanup(modal) {
  cancelModalVariantCleanup(modal);

  const cleanup = () => {
    modal.removeEventListener("transitionend", onTransitionEnd);
    modal._variantCleanupTimer = null;
    if (!modal.classList.contains("is-open")) {
      modal.classList.remove("modal--glass", "modal--no-media");
    }
  };
  const onTransitionEnd = (e) => {
    if (e.target !== modal || e.propertyName !== "opacity") return;
    cleanup();
  };

  modal.addEventListener("transitionend", onTransitionEnd);
  modal._variantCleanupTimer = window.setTimeout(cleanup, 400);
}

function cancelModalVariantCleanup(modal) {
  if (modal._variantCleanupTimer) {
    window.clearTimeout(modal._variantCleanupTimer);
    modal._variantCleanupTimer = null;
  }
}

function closeEquipmentModal() {
  const modal = $("#equipmentModal");
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  state.activeEquipmentId = null;
  state.activeVariantId = null;
  state.activeStorageItem = null;
  state.activePillarId = null;
  if (!document.body.classList.contains("section-view-open")) {
    motion.lockScroll(false);
  }
  scheduleModalVariantCleanup(modal);
}

/* ===================== LABORATORY STORAGE (independent final section) =====================
   NOT one of the six main laboratory sections, NOT in navigation, NOT a
   nested list of sub-cards. Cards use the exact same .section-card visual
   design (via the .section-card--plain modifier: no numbered badge, no
   CTA button, whole card is clickable) and open a single standalone
   detail view — image + name + description — reusing the SAME
   #equipmentModal element/CSS as every equipment/test detail. */
function renderLabStorageCards() {
  const grid = $("#labStorageGrid");
  if (!grid) return;
  grid.innerHTML = labStorageAreas
    .map(
      (item, i) => `
      <article class="section-card section-card--plain" data-reveal data-reveal-delay="${i * 60}" data-open-storage="${item.id}" tabindex="0" role="button" aria-label="${i18n.t(item.title)}">
        <div class="section-card__media">
          <img src="${item.image}" alt="${i18n.t(item.title)}" loading="lazy" />
        </div>
        <div class="section-card__body">
          <h3 class="section-card__title">${i18n.t(item.title)}</h3>
          <p class="section-card__desc">${i18n.t(item.description)}</p>
        </div>
      </article>`
    )
    .join("");

  $$("[data-open-storage]", grid).forEach((card) => {
    const openFn = () => openStorageDetail(card.getAttribute("data-open-storage"));
    card.addEventListener("click", openFn);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openFn();
      }
    });
  });
}

function openStorageDetail(itemId) {
  const item = labStorageAreas.find((a) => a.id === itemId);
  if (!item) return;
  state.activeStorageItem = itemId;
  state.activeEquipmentId = null;
  state.activeVariantId = null;
  const modal = $("#equipmentModal");
  cancelModalVariantCleanup(modal);
  modal.classList.remove("modal--glass", "modal--no-media");

  $("#equipmentModal .modal__media img").src = item.image;
  $("#equipmentModal .modal__media img").alt = i18n.t(item.title);
  $("#equipmentModal .modal__category").textContent = "";
  $("#equipmentModal .modal__title").removeAttribute("dir");
  $("#equipmentModal .modal__title").textContent = i18n.t(item.title);
  $("#equipmentModal .modal__body").innerHTML = `
    <div class="detail-block">
      <span class="detail-block__label">${i18n.t(ui.detail.description)}</span>
      <p>${i18n.t(item.description)}</p>
    </div>
  `;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  motion.lockScroll(true);
  $("#equipmentModal .modal__close").focus();
}

/* ============================== SITE SEARCH ============================== */
/* Reads exclusively from the existing centralized data (laboratorySections,
 * safetyCards, labStorageAreas) — nothing here is a second copy of that
 * content, it's just an index of *where things are* built once and reused.
 * Selecting a result reuses the exact same navigation/open functions a
 * normal click already uses (openSectionView / openEquipmentModal /
 * openStorageDetail), so results always land on the real, existing
 * detail view for that item. */
let searchIndex = null;

/** Lowercased/trimmed compare key. Arabic has no letter case, so this
 *  mainly normalizes English/mixed technical terms (e.g. "gc", "ph"). */
function normalizeSearchText(str) {
  return String(str || "").trim().toLowerCase();
}

/** Flattens a record's bilingual fields into one lowercase haystack
 *  string, cached on the record so it's only computed once. */
function searchHaystack(record) {
  if (record._haystack) return record._haystack;
  const parts = record.fields
    .map((f) => {
      if (!f) return "";
      if (typeof f === "string") return f;
      return `${f.ar || ""} ${f.en || ""}`;
    })
    .join(" ");
  record._haystack = normalizeSearchText(parts);
  return record._haystack;
}

function buildSearchIndex() {
  const index = [];

  laboratorySections.forEach((section) => {
    index.push({
      type: "section",
      icon: "analysis",
      title: section.title,
      subtitle: ui.sectionsSection.eyebrow,
      fields: [section.title, section.description],
      onSelect: () => {
        closeSearch();
        openSectionView(section.id);
      },
    });

    if (!section.available || !Array.isArray(section.equipment)) return;

    section.equipment.forEach((eq) => {
      index.push({
        type: "equipment",
        icon: "tests",
        title: eq.title,
        subtitle: eq.category || section.title,
        fields: [eq.title, eq.category, eq.definition, eq.why, eq.purpose, eq.methodNo],
        onSelect: () => {
          closeSearch();
          state.activeVariantId = null;
          // Open the equipment modal directly, on top of wherever the
          // user currently is — do NOT call openSectionView here. The
          // modal is fully self-contained (it only touches its own
          // #equipmentModal DOM), so opening the section view first is
          // unnecessary and was the cause of the page jumping/scrolling
          // to that section behind the modal.
          openEquipmentModal(eq.id, section);
        },
      });

      if (!Array.isArray(eq.variants)) return;
      eq.variants.forEach((v) => {
        // Defensive: existing variant records use either `name` or
        // `title` for their display label — read whichever is present
        // without altering the underlying data.
        const variantTitle = v.name || v.title;
        index.push({
          type: "equipment",
          icon: "tests",
          title: variantTitle,
          subtitle: eq.category || section.title,
          fields: [variantTitle, eq.category, v.definition, v.why, v.purpose, v.methodNo],
          onSelect: () => {
            closeSearch();
            state.activeVariantId = v.id;
            // Same as above — open the modal in place, no section
            // navigation.
            openEquipmentModal(eq.id, section);
          },
        });
      });
    });
  });

  safetyCards.forEach((card) => {
    index.push({
      type: "safety",
      icon: card.icon || "safety",
      title: card.title,
      subtitle: ui.safetySection.eyebrow,
      fields: [card.title, card.description],
      onSelect: () => {
        closeSearch();
        highlightSafetyCard(card.id);
      },
    });
  });

  labStorageAreas.forEach((item) => {
    index.push({
      type: "storage",
      icon: "equipment",
      title: item.title,
      subtitle: ui.labStorageSection.eyebrow,
      fields: [item.title, item.description],
      onSelect: () => {
        closeSearch();
        const target = document.getElementById("labStorage");
        if (target) target.scrollIntoView({ behavior: motion.reduced ? "auto" : "smooth", block: "start" });
        window.setTimeout(() => openStorageDetail(item.id), motion.reduced ? 0 : 350);
      },
    });
  });

  return index;
}

/** Scrolls to the Safety section and briefly pulses the matching card.
 *  Safety cards have no dedicated detail modal of their own (by design,
 *  same as the rest of the site) — this is the closest equivalent to
 *  "take the user directly to the relevant content" for that section. */
function highlightSafetyCard(cardId) {
  const target = document.getElementById("safety");
  if (target) target.scrollIntoView({ behavior: motion.reduced ? "auto" : "smooth", block: "start" });
  window.setTimeout(
    () => {
      const el = $(`[data-safety-card="${cardId}"]`);
      if (!el) return;
      el.classList.remove("safety-card--highlight");
      // eslint-disable-next-line no-unused-expressions
      void el.offsetWidth; // restart animation if triggered twice in a row
      el.classList.add("safety-card--highlight");
      el.addEventListener("animationend", () => el.classList.remove("safety-card--highlight"), { once: true });
    },
    motion.reduced ? 0 : 450
  );
}

function renderSearchResults(query) {
  const results = $("#searchResults");
  if (!results) return;
  const q = normalizeSearchText(query);

  if (!q) {
    results.innerHTML = `<p class="search-panel__hint">${i18n.t(ui.search.hint)}</p>`;
    return;
  }

  const groupOrder = ["section", "equipment", "safety", "storage"];
  const groupLabels = {
    section: ui.search.groups.sections,
    equipment: ui.search.groups.equipment,
    safety: ui.search.groups.safety,
    storage: ui.search.groups.storage,
  };

  const matches = searchIndex.filter((record) => searchHaystack(record).includes(q));

  if (!matches.length) {
    results.innerHTML = `<p class="search-panel__empty">${i18n.t(ui.search.noResults)}</p>`;
    return;
  }

  results.innerHTML = groupOrder
    .map((type) => {
      const items = matches.filter((m) => m.type === type);
      if (!items.length) return "";
      return `
        <div class="search-group">
          <div class="search-group__label">${i18n.t(groupLabels[type])}</div>
          ${items
            .map((m, i) => {
              // Equipment/device names always render in English, even in
              // Arabic mode — everything else (sections, safety, storage)
              // keeps following the current site language.
              const label = type === "equipment" ? i18n.tEquip(m.title) : i18n.t(m.title);
              const titleDir = type === "equipment" ? ' dir="ltr"' : "";
              return `
            <div class="search-result" data-result-index="${searchIndex.indexOf(m)}" tabindex="0" role="button" aria-label="${label}">
              <span class="search-result__icon">${iconSvg(m.icon, "")}</span>
              <span class="search-result__body">
                <span class="search-result__title"${titleDir}>${label}</span>
                <span class="search-result__subtitle">${i18n.t(m.subtitle)}</span>
              </span>
            </div>`;
            })
            .join("")}
        </div>`;
    })
    .join("");

  $$("[data-result-index]", results).forEach((el) => {
    const record = searchIndex[Number(el.getAttribute("data-result-index"))];
    if (!record) return;
    el.addEventListener("click", record.onSelect);
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        record.onSelect();
      }
    });
  });
}

function openSearch() {
  if (!searchIndex) searchIndex = buildSearchIndex();
  const overlay = $("#searchOverlay");
  if (!overlay) return;
  const input = $("#searchInput");
  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  motion.lockScroll(true);
  renderSearchResults(input ? input.value : "");
  window.setTimeout(() => input && input.focus(), 50);
}

function closeSearch() {
  const overlay = $("#searchOverlay");
  if (!overlay) return;
  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden", "true");
  if (
    !document.body.classList.contains("section-view-open") &&
    !$("#equipmentModal").classList.contains("is-open")
  ) {
    motion.lockScroll(false);
  }
}

function initSearch() {
  const toggle = $("#searchToggle");
  const overlay = $("#searchOverlay");
  const closeBtn = $("#searchClose");
  const backdrop = $(".search-overlay__backdrop", overlay || document);
  const input = $("#searchInput");
  if (!toggle || !overlay) return;

  toggle.addEventListener("click", () => {
    if (overlay.classList.contains("is-open")) {
      closeSearch();
    } else {
      openSearch();
    }
  });
  closeBtn && closeBtn.addEventListener("click", closeSearch);
  backdrop && backdrop.addEventListener("click", closeSearch);
  input && input.addEventListener("input", () => renderSearchResults(input.value));
}

/* ============================== NAVIGATION ================================ */
function setActiveNav(id) {
  $$(".nav__link, .progress-dot").forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("data-nav") === id);
  });
}

function initNavScrollSpy() {
  const sections = ["home", "about", "safety", "sections", "labStorage"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  if (motion.reduced || !("IntersectionObserver" in window)) return;
  const spy = new IntersectionObserver(
    (entries) => {
      if (document.body.classList.contains("section-view-open")) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveNav(entry.target.id);
      });
    },
    { threshold: 0.4 }
  );
  sections.forEach((s) => spy.observe(s));
}

function initSmoothNav() {
  $$(".nav__link, [data-scroll-to]").forEach((link) => {
    if (link.dataset.navBound) return;
    link.dataset.navBound = "1";
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("data-nav") || link.getAttribute("data-scroll-to");
      if (!targetId) return;
      e.preventDefault();
      closeSectionView();
      const target = document.getElementById(targetId);
      if (target) target.scrollIntoView({ behavior: motion.reduced ? "auto" : "smooth" });
      closeMobileMenu();
    });
  });
}

function closeMobileMenu() {
  document.body.classList.remove("mobile-nav-open");
}

/* ============================== PROGRESS DOTS ============================= */
function renderProgress() {
  const track = $("#progressTrack");
  if (!track) return;
  const items = [
    { id: "home", label: ui.nav.home },
    { id: "about", label: ui.about.title },
    { id: "safety", label: ui.safetySection.title },
    { id: "sections", label: ui.sectionsSection.title },
  ];
  track.innerHTML = items
    .map(
      (it, i) => `
      <a class="progress-dot" href="#${it.id}" data-nav="${it.id}" data-scroll-to="${it.id}">
        <span class="progress-dot__index">${String(i + 1).padStart(2, "0")}</span>
        <span class="progress-dot__label">${i18n.t(it.label)}</span>
      </a>`
    )
    .join("");
  initSmoothNav();
}

/* ============================== LANGUAGE WIRING ============================ */
/** Applies the hero background image from the single centralized
 *  images.hero path (data.js) — replace that one path to swap the photo,
 *  nothing else needs to change. */
function applyHeroImage() {
  const bg = $("#heroBg");
  if (!bg) return;
  bg.style.backgroundImage = `url('${images.hero}')`;
}

/** Renders the hero title with its last word broken onto its own line in
 *  the refined green accent color (Arabic only, per the requested visual
 *  treatment) — the underlying text in data.js is untouched, this only
 *  changes how it's wrapped/displayed. */
function applyHeroTitleSplit() {
  const el = $(".hero__title");
  if (!el) return;
  const text = i18n.t(ui.hero.title);
  if (i18n.getLang() === "ar") {
    const words = text.trim().split(/\s+/);
    const last = words.pop();
    el.innerHTML = `${words.join(" ")}<span class="hero__title-accent">${last}</span>`;
  } else {
    el.textContent = text;
  }
}

function renderAll() {
  renderStaticText();
  applyHeroImage();
  applyHeroTitleSplit();
  renderPillars();
  renderSafetyCards();
  renderSectionCards();
  renderLabStorageCards();
  renderProgress();
  if (state.activeSectionId) renderSectionView(state.activeSectionId);
  if (state.activeEquipmentId) {
    const section = laboratorySections.find((s) => s.equipment.some((e) => e.id === state.activeEquipmentId));
    if (section) openEquipmentModal(state.activeEquipmentId, section);
  }
  if (state.activeStorageItem) openStorageDetail(state.activeStorageItem);
  const searchOverlay = $("#searchOverlay");
  if (searchOverlay && searchOverlay.classList.contains("is-open")) {
    const searchInput = $("#searchInput");
    renderSearchResults(searchInput ? searchInput.value : "");
  }
  motion.observeReveals(document);
}

/* ================================= INIT ==================================== */
function initLangSwitch() {
  const btn = $("#langToggle");
  if (!btn) return;
  $$(".lang-switch__option", btn).forEach((opt) => {
    opt.addEventListener("click", () => i18n.setLang(opt.getAttribute("data-lang")));
  });
  i18n.onChange(() => renderAll());
}

function initHeroCta() {
  const cta = $("#heroCta");
  if (cta) {
    cta.addEventListener("click", () => {
      const target = document.getElementById("about");
      if (target) target.scrollIntoView({ behavior: motion.reduced ? "auto" : "smooth" });
    });
  }
}

function initModalClose() {
  const modal = $("#equipmentModal");
  $(".modal__close", modal).addEventListener("click", closeEquipmentModal);
  $(".modal__backdrop", modal).addEventListener("click", closeEquipmentModal);
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const searchOverlay = $("#searchOverlay");
    if (searchOverlay && searchOverlay.classList.contains("is-open")) {
      closeSearch();
    } else if (modal.classList.contains("is-open")) {
      closeEquipmentModal();
    } else if (document.body.classList.contains("section-view-open")) {
      closeSectionView();
    }
  });
}

function initMobileNav() {
  const toggle = $("#navToggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("mobile-nav-open");
  });
}

function initHeaderScrollState() {
  const header = $(".site-header");
  const hero = $("#home");
  if (!header) return;
  if (hero && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Solid header once the hero is mostly scrolled past; back to
          // transparent as soon as the hero is back in view (bidirectional).
          header.classList.toggle("is-scrolled", entry.intersectionRatio < 0.6);
        });
      },
      { threshold: [0, 0.6, 1] }
    );
    io.observe(hero);
  } else {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
}

/** Drives the thin scroll-progress hairline in the sticky header: 0%
 *  at the top of the page, smoothly filling to 100% at the bottom,
 *  updated on every scroll frame via requestAnimationFrame so it never
 *  flickers or lags behind the actual scroll position. */
function initScrollProgress() {
  const fill = $("#scrollProgressFill");
  if (!fill) return;
  let ticking = false;
  const update = () => {
    ticking = false;
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    const pct = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
    fill.style.transform = `scaleX(${pct})`;
  };
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
}

document.addEventListener("DOMContentLoaded", () => {
  i18n.init();
  renderAll();
  initLangSwitch();
  initHeroCta();
  initModalClose();
  initSearch();
  initNavScrollSpy();
  initSmoothNav();
  initMobileNav();
  initHeaderScrollState();
  initScrollProgress();
  motion.playHeroEntrance();
});
