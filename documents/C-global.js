let PaddingInserter = () => {
  document.querySelectorAll("[p]").forEach((t) => {
    if (t.hasAttribute("p")) {
      const e = t.getAttribute("p");
      t.style.padding = e;
    }
    if (t.hasAttribute("pt")) {
      const e = t.getAttribute("pt");
      t.style.paddingTop = e;
    }
    if (t.hasAttribute("pb")) {
      const e = t.getAttribute("pb");
      t.style.paddingBottom = e;
    }
    if (t.hasAttribute("pl")) {
      const e = t.getAttribute("pl");
      t.style.paddingLeft = e;
    }
    if (t.hasAttribute("pr")) {
      const e = t.getAttribute("pr");
      t.style.paddingRight = e;
    }
  });
};
PaddingInserter();
let MarginInserter = () => {
  document.querySelectorAll("[m]").forEach((t) => {
    if (t.hasAttribute("m")) {
      const e = t.getAttribute("m");
      t.style.margin = e;
    }
    if (t.hasAttribute("mt")) {
      const e = t.getAttribute("mt");
      t.style.marginTop = e;
    }
    if (t.hasAttribute("mb")) {
      const e = t.getAttribute("mb");
      t.style.marginBottom = e;
    }
    if (t.hasAttribute("ml")) {
      const e = t.getAttribute("ml");
      t.style.marginLeft = e;
    }
    if (t.hasAttribute("mr")) {
      const e = t.getAttribute("mr");
      t.style.marginRight = e;
    }
  });
};
MarginInserter();
let Col_Gap_Inserter = () => {
  document.querySelectorAll("[col-g]").forEach((t) => {
    const e = t.getAttribute("col-g");
    t.style.columnGap = e;
  });
};
Col_Gap_Inserter();
let Row_Gap_Inserter = () => {
  document.querySelectorAll("[row-g]").forEach((t) => {
    const e = t.getAttribute("row-g");
    t.style.rowGap = e;
  });
};
Row_Gap_Inserter();
