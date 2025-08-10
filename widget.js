(function() {
  console.log("work");
  const scriptTag = document.currentScript;
  const clientId = scriptTag.getAttribute('data-id');

  if (!clientId) {
    console.error("Widget: data-id не задан");
    return;
  }

  fetch(`https://scripts.tf-widgets.com/configs/${clientId}.json`)
    .then(response => {
      if (!response.ok) throw new Error("Config not found");
      return response.json();
    })
    .then(config => {
      const widget = document.createElement("div");
      widget.innerHTML = `
        <div style="padding:10px; background:${config.bgColor}; color:${config.textColor}">
          ${config.message}
        </div>
      `;
      document.body.appendChild(widget);
    })
    .catch(err => console.error("Widget error:", err));
})();
