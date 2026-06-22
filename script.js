const promiseData = {
  raven: {
    mode: "Apollo symbol",
    title: "\"Omens of ill fortune, punished by Apollo.\"",
    text: "Ravens are birds frequently associated with the prophetic nature of Apollo since they are seen as harbingers and ill omens, often representing impending death. According to legend, ravens were once pure white. A raven reported to Apollo that his mortal lover had been unfaithful, and Apollo was forced to have the woman killed. As punishment for 'snitching', Apollo smited the raven, turning it black."
  },
  kithara: {
    mode: "Apollo symbol",
    title: "\"An instrument gifted to the world by Apollo.\"",
    text: "Apollo is frequently depicted playing the kithara, a complex type of lyre, which he is said to have created after mastering the lyre, an invention of his half-brother, Hermes. This creation was so great that it allowed Apollo to become patron of the Muses. The kithara is the predecessor of modern string instruments, including the guitar, which even gets its name from the kithara."
  },
  laurel: {
    mode: "Apollo symbol",
    title: "\"A symbol of victory that crowns Apollo's head.\"",
    text: "One of the symbols most strongly associated with Apollo is the laurel wreath. The link between Apollo and the laurel can be traced back to the story of Daphne, a nymph Apollo pursued while under Eros' love spell, who fled and was changed into a laurel tree to escape him. In her honour, Apollo turned the laurel tree evergreen and wove a wreath from its leaves. Laurel wreaths have come to symbolize victory; they are often awarded to the winners of athletic competitions, and are frequently used in heraldry."
  }
};

document.querySelectorAll(".promise-panel").forEach((panel) => {
  const tabs = [...panel.querySelectorAll(".promise-tab")];
  const panels = [...panel.querySelectorAll(".promise-copy")];

  if (!tabs.length) return;

  if (tabs.length !== panels.length) {
    const mode = panel.querySelector("#promise-mode");
    const title = panel.querySelector("#promise-title");
    const text = panel.querySelector("#promise-text");

    if (!mode || !title || !text) return;

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const next = promiseData[tab.dataset.promise];
        if (!next) return;

        tabs.forEach((item) => item.classList.remove("active"));
        tab.classList.add("active");
        mode.textContent = next.mode;
        title.textContent = next.title;
        text.textContent = next.text;
      });
    });

    return;
  }

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
