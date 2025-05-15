(function() {
  const timestamp = new Date().getTime();

  // Load external CSS
  const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = `https://erpforever.com/theme/style.css?ver=${timestamp}`;
  document.head.appendChild(css);

  // Load external JS
  const js = document.createElement("script");
  js.src = `https://erpforever.com/theme/script.js?ver=${timestamp}`;
  document.body.appendChild(js);
})();
