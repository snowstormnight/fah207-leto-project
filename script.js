document.querySelectorAll(".promise-panel").forEach((panel) => {
  const tabs = [...panel.querySelectorAll(".promise-tab")];
  const panels = [...panel.querySelectorAll(".promise-copy")];

  if (!tabs.length || tabs.length !== panels.length) return;

  panels.forEach((item, index) => {
    item.hidden = index !== 0;
  });

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => item.classList.remove("active"));
      panels.forEach((item) => {
        item.hidden = true;
      });

      tab.classList.add("active");
      panels[index].hidden = false;
    });
  });
});
