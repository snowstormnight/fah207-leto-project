const promiseData = {
  nudity: {
    mode: "Visual evidence",
    title: "The Knidian Aphrodite marks a radical departure.",
    text: "The Aphrodite of Knidos is often identified as the first major nude female statue in Greek art. This moves away from earlier traditions in which female divinities were typically shown fully clothed."
  },
  pose: {
    mode: "Visual proof",
    title: "Contrapposto creates a softer divine body.",
    text: "Her shifting weight creates a naturalistic S-curve in the body. This reflects Classical interest in rhythm, movement, and a softer, more human-centered divine presence."
  },
  viewer: {
    mode: "Viewer engagement",
    title: "Controlled vulnerability draws attention.",
    text: "The figure is shown in a moment of modest gesture, covering herself as if interrupted. This creates intimacy and immediacy while drawing attention to her body and the tension between exposure and concealment."
  },
  grain: {
    mode: "Campaign claim",
    title: "\"A goddess who makes survival visible.\"",
    text: "Demeter's strongest sign is grain. Wheat is small, but it carries the whole argument: nourishment, storage, farming, civic stability, and the daily proof that divine power can enter ordinary life."
  },
  torch: {
    mode: "Search signal",
    title: "The torch turns grief into ritual movement.",
    text: "Torches connect Demeter and Persephone to searching, initiation, and the movement between loss and return. The attribute helps viewers read the myth visually, even before a long explanation begins."
  },
  ritual: {
    mode: "Sacred network",
    title: "Eleusis turns Demeter into a public force.",
    text: "At Eleusis, Demeter is not a private household wish. Her signs become public: torches, gathering, movement, grain, daughter, and return all work together as proof that her power reaches an entire community."
  }
};

const timelineSets = {
  aphrodite: [
    {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cnidus%20Aphrodite%20Altemps%20Inv8619.jpg",
      alt: "Aphrodite of Knidos Roman copy",
      heading: "A new divine body enters the gallery",
      text: "Praxiteles' Aphrodite was remembered as a turning point because the goddess is not shown as a distant symbol. She is caught in a private bathing moment, using a modest gesture that both conceals and directs the viewer's attention."
    },
    {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Aphrodite%20of%20Knidos%2C%20Roman%20copy%2C%204th%20century%20AD.jpg",
      alt: "Roman copy of Aphrodite of Knidos",
      heading: "Copies turn the statue into a visual brand",
      text: "The original Greek statue is lost, but Roman copies preserve the type and show how powerfully the image circulated. Aphrodite survives because her visual formula is copied, recognized, and reinterpreted."
    },
    {
      image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sandro%20Botticelli%20-%20La%20nascita%20di%20Venere%20-%20Google%20Art%20Project%20-%20edited.jpg",
      alt: "Sandro Botticelli, The Birth of Venus",
      heading: "Venus keeps returning in new media",
      text: "Botticelli's Birth of Venus shows the later afterlife of the goddess as a classical subject. The Renaissance painting turns myth into a sensory, elegant image while still depending on the ancient visual language of the nude, idealized Venus."
    }
  ],
  demeter: [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Great_Eleusinian_Relief.jpg",
      alt: "Great Eleusinian Relief",
      heading: "Grain turns divine power into a visible promise",
      text: "Demeter's campaign begins with the simplest sign: wheat. The attribute condenses myth, food, seasonality, and civic survival into one readable image."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/8/85/NAMA_Myst%C3%A8res_d%27Eleusis.jpg",
      alt: "Ninnion Tablet depicting the Eleusinian Mysteries",
      heading: "Eleusis gives the image ritual context",
      text: "The Ninnion Tablet shows how Demeter's identity expands beyond agriculture into procession, initiation, sacred space, and shared ritual memory."
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Great_Eleusinian_Relief.jpg",
      alt: "Great Eleusinian Relief",
      heading: "The harvest story keeps returning",
      text: "Demeter's power survives because the same signs stay readable: grain, torch, daughter, mortal receiver, and the promise that loss can become return."
    }
  ]
};

const page = document.body.dataset.page || "aphrodite";
const timelineData = timelineSets[page] || timelineSets.aphrodite;

document.querySelectorAll(".promise-tab").forEach((button) => {
  button.addEventListener("click", () => {
    const next = promiseData[button.dataset.promise];
    document.querySelectorAll(".promise-tab").forEach((tab) => tab.classList.remove("active"));
    button.classList.add("active");
    document.querySelector("#promise-mode").textContent = next.mode;
    document.querySelector("#promise-title").textContent = next.title;
    document.querySelector("#promise-text").textContent = next.text;
  });
});

document.querySelectorAll(".time-card").forEach((button) => {
  button.addEventListener("click", () => {
    const next = timelineData[Number(button.dataset.step)];
    document.querySelectorAll(".time-card").forEach((card) => card.classList.remove("active"));
    button.classList.add("active");
    const image = document.querySelector("#timeline-image");
    image.src = next.image;
    image.alt = next.alt;
    document.querySelector("#timeline-heading").textContent = next.heading;
    document.querySelector("#timeline-text").textContent = next.text;
  });
});

const slider = document.querySelector("#duel-slider");
const verdict = document.querySelector("#duel-verdict");

function updateVerdict() {
  if (!slider || !verdict) return;
  const value = Number(slider.value);
  if (page === "demeter") {
    if (value < 38) {
      verdict.textContent = "Aphrodite is winning this round: desire and viewer attention are powerful campaign tools.";
    } else if (value > 68) {
      verdict.textContent = "Demeter leads by necessity: beauty is powerful, but food security keeps the city alive.";
    } else {
      verdict.textContent = "The campaign is close: Aphrodite controls desire, while Demeter controls survival, ritual, and seasonal return.";
    }
    return;
  }
  if (value < 38) {
    verdict.textContent = "The Artemision god is winning this round: heroic anatomy, bronze extension, and outward action dominate the room.";
  } else if (value > 68) {
    verdict.textContent = "Aphrodite dominates the vote: controlled vulnerability, polished marble surface, and intimacy become stronger than spectacle.";
  } else {
    verdict.textContent = "Aphrodite leads by intimacy: her contrapposto stance and modest gesture turn looking into a controlled visual encounter.";
  }
}

if (slider) {
  slider.addEventListener("input", updateVerdict);
}

document.querySelectorAll("[data-toast]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#toast").textContent = button.dataset.toast;
  });
});
