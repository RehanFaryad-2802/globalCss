document.addEventListener("DOMContentLoaded", () => {
  const e = document.querySelectorAll(".counter");
  e.forEach((n) => {
    const o = +n.getAttribute("data-target");
    var e = +n.innerText;
    const r = o / 200;
    e < o
      ? ((n.innerText = Math.ceil(e + r)),
        setTimeout(function e() {
          var t = +n.innerText;
          t < o
            ? ((n.innerText = Math.ceil(t + r)), setTimeout(e, 1))
            : (n.innerText = o);
        }, 1))
      : (n.innerText = o);
  });
}),
  document.addEventListener("DOMContentLoaded", function () {
    const e = document.querySelectorAll(".timeline-item"),
      t = new IntersectionObserver(
        (e) => {
          e.forEach((e) => {
            e.isIntersecting &&
              ((e.target.style.opacity = "1"),
              (e.target.style.transform = "translateX(0)"));
          });
        },
        { threshold: 0.1 }
      );
    e.forEach((e) => t.observe(e));
  }),
  document.addEventListener("DOMContentLoaded", function () {
    const o = document.getElementById("playground-preview"),
      r = document.getElementById("bg-select"),
      c = document.getElementById("padding-select"),
      l = document.getElementById("border-select");
    function t() {
      var e = r.value,
        t = c.value,
        n = l.value;
      (o.className = ""),
        o.classList.add(e),
        o.classList.add(t),
        (o.style.border =
          "br-thin" === n
            ? "1px solid var(--gold)"
            : "br-thick" === n
            ? "3px solid var(--orange)"
            : "none"),
        (function (e) {
          const t = o.querySelectorAll("h4, p");
          "gold" === e || "orange" === e
            ? t.forEach((e) => (e.style.color = "var(--bg-dark)"))
            : t.forEach((e) => {
                "H4" === e.tagName
                  ? (e.style.color = "var(--gold)")
                  : (e.style.color = "var(--gold-light)");
              });
        })(e);
    }
    [r, c, l].forEach((e) => {
      e.addEventListener("change", t);
    }),
      t();
  }),
  document.querySelector(".btn-primary").addEventListener("click", function () {
    const e = document.getElementById("playground-preview");
    var t = document.querySelector("select:nth-of-type(1)").value,
      n = document.querySelector("select:nth-of-type(2)").value,
      o = document.querySelector("select:nth-of-type(3)").value;
    (e.className = ""),
      e.classList.add(t),
      e.classList.add(n),
      (e.style.border =
        "br-thin" === o
          ? "1px solid var(--gold)"
          : "br-thick" === o
          ? "3px solid var(--orange)"
          : "none");
  }),
  document.querySelectorAll(".code-example-btn").forEach((e) => {
    e.addEventListener("click", function () {
      document
        .querySelectorAll(".code-example-btn")
        .forEach((e) => e.classList.remove("active")),
        this.classList.add("active"),
        document.querySelectorAll(".code-example").forEach((e) => {
          e.style.display = "none";
        });
      var e = this.getAttribute("data-target");
      document.getElementById(e).style.display = "block";
    });
  }),
  document.getElementById("toggle-rows").addEventListener("click", function () {
    const e = document.getElementById("advanced-rows");
    "none" === e.style.display
      ? ((e.style.display = "block"),
        (this.textContent = "Hide Advanced Comparison"))
      : ((e.style.display = "none"),
        (this.textContent = "Show Advanced Comparison"));
  });
