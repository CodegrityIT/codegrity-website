/**
 * CodeGrity - Shared Navigation Component
 * Automatically detects current page and sets active state.
 * Works from root pages and /blog/ subdirectory.
 */

(function () {
  function buildNav() {
    const path = window.location.pathname;
    const inBlog = path.includes("/blog/");
    const root = inBlog ? "../" : "";

    const navItems = [
      { href: "index.html", label: "Home", num: "00" },
      { href: "services.html", label: "Services", num: "01" },
      { href: "work.html", label: "Work", num: "02" },
      { href: "about.html", label: "About", num: "03" },
      { href: "contact.html", label: "Contact", num: "04" },
      { href: "blog/index.html", label: "Blog", num: "05" },
    ];

    const currentFile = path.split("/").pop() || "index.html";

    function isActive(href) {
      const file = href.split("/").pop();
      if (inBlog && href.startsWith("blog/")) return true;
      if (!inBlog && file === currentFile) return true;
      if (!inBlog && currentFile === "" && file === "index.html") return true;
      return false;
    }

    const linksHTML = navItems
      .map(function (item) {
        const active = isActive(item.href) ? ' class="active"' : "";
        const href = root + item.href;
        return (
          '<li><a href="' +
          href +
          '"' +
          active +
          ">" +
          item.label +
          '<span class="nav-number">' +
          item.num +
          "</span></a></li>"
        );
      })
      .join("\n        ");

    const navHTML =
      '<nav id="site-nav">' +
      '\n      <a href="' +
      (root || "/") +
      'index.html" class="logo-nav">' +
      '\n        <div class="logo-icon">' +
      '\n          <div class="lock-outer"></div>' +
      '\n          <div class="lock-inner"><div class="lock-dot"></div></div>' +
      "\n        </div>" +
      '\n        <span class="logo-text"><span class="code-part">Code</span><span class="grity-part">Grity</span></span>' +
      "\n      </a>" +
      '\n      <ul class="nav-links">' +
      "\n        " +
      linksHTML +
      "\n      </ul>" +
      '\n      <a href="' +
      root +
      'contact.html" class="cta-button">Start Project</a>' +
      "\n    </nav>";

    const placeholder = document.getElementById("nav-placeholder");
    if (placeholder) {
      placeholder.outerHTML = navHTML;
    }

    // Scroll effect — re-query after injection
    const nav = document.getElementById("site-nav");
    if (nav) {
      window.addEventListener("scroll", function () {
        nav.classList.toggle("scrolled", window.scrollY > 100);
      });
    }
  }

  // Ensure DOM is ready before injecting
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildNav);
  } else {
    buildNav();
  }
})();
