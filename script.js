"use strict";

const artworks = [
  {
    slug: "after-the-rain",
    title: "After the rain",
    description:
      "A quiet study of color, light, and the feeling that follows a summer storm.",
    dimensions: "50 x 70 cm",
    type: "Original canvas",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=900&q=85",
    alt: "Abstract artwork in soft warm colors",
    availability: "Available",
  },
  {
    slug: "garden-study-no-02",
    title: "Garden study no. 02",
    description:
      "A hand-drawn botanical study with a little wildness around the edges.",
    dimensions: "30 x 40 cm",
    type: "Original canvas",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=700&q=85",
    alt: "Colorful floral painting",
    availability: "Available",
  },
  {
    slug: "softly-the-morning",
    title: "Softly, the morning",
    description:
      "Layered marks and softened tones, made for a slower corner of the room.",
    dimensions: "40 x 50 cm",
    type: "Original canvas",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=700&q=85",
    alt: "Abstract painting in muted tones",
    availability: "Available",
  },
];

const app = document.querySelector("#app");
const navigation = [
  { label: "The collection", route: "/collection" },
  { label: "The studio", route: "/about" },
  { label: "Commissions", route: "/contact" },
];

const storyImage =
  "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1100&q=85";
const heroImage =
  "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1300&q=90";

function routeHref(route) {
  return `#${route}`;
}

function routeFromLocation() {
  const hash = window.location.hash.slice(1);
  return hash.startsWith("/") ? hash : "/";
}

function header(currentRoute) {
  const links = navigation
    .map(
      ({ label, route }) =>
        `<a href="${routeHref(route)}"${currentRoute === route ? ' aria-current="page"' : ""}>${label}</a>`,
    )
    .join("");

  return `
    <header class="site-header">
      <a class="wordmark" href="#/" aria-label="Canvas Studio home">
        <span>Canvas</span><span>Studio</span>
      </a>
      <nav class="navigation" id="site-navigation" aria-label="Main navigation">
        ${links}
      </nav>
      <div class="header-actions">
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation">
          Menu
        </button>
      </div>
    </header>`;
}

function footer() {
  return `
    <footer class="site-footer">
      <span>Canvas Studio / Original artwork</span>
      <span>Made with patience, 2026</span>
      <a href="#top">Back to top &#8593;</a>
    </footer>`;
}

function artworkCards() {
  return artworks
    .map(
      (artwork) => `
        <a class="artwork-card" href="${routeHref(`/artwork/${artwork.slug}`)}">
          <div class="artwork-image">
            <img src="${artwork.image}" alt="${artwork.alt}" loading="lazy">
            <span class="view-mark" aria-hidden="true">+</span>
          </div>
          <div class="artwork-meta">
            <span>${artwork.title}</span>
            <span>${artwork.type} · ${artwork.dimensions}</span>
          </div>
        </a>`,
    )
    .join("");
}

function homePage() {
  return `
    <main>
      <section class="hero" id="top" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow">Hand-drawn works for considered spaces</p>
          <h1 id="hero-title">Made slowly.<br><em>Meant to stay.</em></h1>
          <p class="hero-intro">Original canvas artwork, drawn and painted by hand in small, thoughtful editions. A little more feeling for your walls.</p>
          <a class="text-link" href="${routeHref("/collection")}">Explore the collection <span aria-hidden="true">-&gt;</span></a>
          <div class="handwritten-note"><span class="note-line"></span><span>Each piece begins with a pencil line</span></div>
        </div>
        <div class="hero-art">
          <div class="hero-frame"><img src="${heroImage}" alt="A richly colored floral painting in a warm wood frame" fetchpriority="high"></div>
          <div class="hero-caption"><span>01 / 03</span><span>Study in bloom</span></div>
          <div class="scribble" aria-hidden="true">drawn by hand</div>
        </div>
        <div class="side-note" aria-hidden="true"><span>Scroll to wander</span><span>&#8595;</span></div>
      </section>
      <section class="collection-section" id="collection" aria-labelledby="collection-title">
        <div class="section-heading">
          <div><p class="eyebrow">A small collection</p><h2 id="collection-title">For walls with a story.</h2></div>
          <a class="text-link" href="${routeHref("/collection")}">View all works <span aria-hidden="true">-&gt;</span></a>
        </div>
        <div class="artwork-grid">${artworkCards()}</div>
      </section>
      ${storySection()}
      ${processSection()}
      ${commissionSection()}
    </main>`;
}

function storySection() {
  return `
    <section class="story-band" id="story" aria-labelledby="story-title">
      <div class="story-image">
        <img src="${storyImage}" alt="Artist's hands working with brushes and paint" loading="lazy">
        <span class="image-label">The studio / Dorset</span>
      </div>
      <div class="story-copy">
        <p class="eyebrow">A note from the studio</p>
        <h2 id="story-title">The mark of a human hand.</h2>
        <p>Canvas Studio is a one-person practice built around the quiet joy of making. Every work is drawn, layered, and finished by hand, leaving room for the small irregularities that make a piece yours.</p>
        <a class="text-link" href="${routeHref("/about")}">Read the studio story <span aria-hidden="true">-&gt;</span></a>
      </div>
    </section>`;
}

function processSection() {
  const steps = [
    ["01", "Sketch", "A first line, found slowly."],
    ["02", "Draw", "The shape begins to take a voice."],
    ["03", "Paint", "Layer by layer, color settles in."],
    ["04", "Finish", "A final detail, then let it breathe."],
  ];
  return `
    <section class="process-section" aria-labelledby="process-title">
      <div class="process-intro"><p class="eyebrow">The making of a piece</p><h2 id="process-title">Nothing made by machine.</h2></div>
      <div class="process-steps">
        ${steps.map(([number, title, text]) => `<article class="process-step"><span class="process-number">${number}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}
      </div>
    </section>`;
}

function commissionSection() {
  return `
    <section class="commission-section" id="commissions" aria-labelledby="commission-title">
      <p class="eyebrow">Have something in mind?</p>
      <h2 id="commission-title">Let&rsquo;s make a piece<br><em>that feels like you.</em></h2>
      <a class="outline-link" href="${routeHref("/contact")}">Start a commission <span aria-hidden="true">-&gt;</span></a>
    </section>`;
}

function aboutPage() {
  return `
    <main>
      <section class="route-page route-page-simple">
        <p class="eyebrow">The studio</p>
        <h1>The mark of a<br><em>human hand.</em></h1>
        <p class="route-description">Canvas Studio is a quiet place for making original hand-drawn artwork.</p>
      </section>
      ${storySection()}
      ${processSection()}
    </main>`;
}

function collectionPage() {
  return `
    <main class="route-page route-page-collection">
      <div class="route-heading">
        <p class="eyebrow">The collection</p>
        <h1>Works for walls<br><em>with a story.</em></h1>
        <p>Original hand-drawn canvas artwork, made slowly in the studio.</p>
      </div>
      <div class="artwork-grid">${artworkCards()}</div>
    </main>`;
}

function contactPage() {
  return `
    <main>
      <section class="route-page route-page-simple">
        <p class="eyebrow">Commissions</p>
        <h1>A piece made<br><em>for your space.</em></h1>
        <p class="route-description">Tell us a little about what you have in mind and we will share the next steps.</p>
      </section>
      ${commissionSection()}
    </main>`;
}

function artworkPage(slug) {
  const artwork = artworks.find((item) => item.slug === slug);
  if (!artwork) {
    return `
      <main class="empty-page">
        <p class="eyebrow">Not found</p>
        <h1>This piece isn&rsquo;t here.</h1>
        <p class="route-description"><a class="text-link" href="${routeHref("/collection")}">Back to the collection <span aria-hidden="true">-&gt;</span></a></p>
      </main>`;
  }

  return `
    <main class="detail-page">
      <a class="back-link" href="${routeHref("/collection")}">&#8592; Back to collection</a>
      <div class="artwork-detail">
        <div class="detail-image"><img src="${artwork.image}" alt="${artwork.alt}" fetchpriority="high"></div>
        <div class="detail-copy">
          <p class="eyebrow">${artwork.type}</p>
          <h1>${artwork.title}</h1>
          <p class="route-description">${artwork.description}</p>
          <dl>
            <div><dt>Dimensions</dt><dd>${artwork.dimensions}</dd></div>
            <div><dt>Availability</dt><dd>${artwork.availability}</dd></div>
          </dl>
          <a class="outline-link" href="${routeHref("/contact")}">Inquire about this work <span aria-hidden="true">-&gt;</span></a>
        </div>
      </div>
    </main>`;
}

function render() {
  const route = routeFromLocation();
  let content;

  if (route === "/") content = homePage();
  else if (route === "/about") content = aboutPage();
  else if (route === "/collection") content = collectionPage();
  else if (route === "/contact") content = contactPage();
  else if (route.startsWith("/artwork/")) {
    content = artworkPage(decodeURIComponent(route.slice("/artwork/".length)));
  } else {
    content = `
      <main class="empty-page">
        <p class="eyebrow">Not found</p>
        <h1>Let&rsquo;s find your way back.</h1>
        <p class="route-description"><a class="text-link" href="#/">Return home <span aria-hidden="true">-&gt;</span></a></p>
      </main>`;
  }

  document.title =
    route === "/"
      ? "Canvas Studio"
      : `${route === "/about" ? "The studio" : route === "/collection" ? "The collection" : route === "/contact" ? "Commissions" : "Artwork"} | Canvas Studio`;
  app.innerHTML = `${header(route)}${content}${footer()}`;

  const menuButton = app.querySelector(".menu-toggle");
  const nav = app.querySelector(".navigation");
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("is-open", !isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    }
  });

  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", render);
render();
