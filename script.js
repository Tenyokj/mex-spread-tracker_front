const scenarios = {
  open: {
    title: "LONG #SWARMS spread +1.81% detected",
    peak: "daily peak was +2.00%",
    spot: "$0.007787",
    futures: "$0.007928",
    spotAmount: "$926.9K",
    futuresAmount: "$1.2M",
    caption:
      "A new spread crossed the open threshold and started a new Telegram thread.",
    preview:
      "🤑 LONG #SWARMS spread +1.81% detected\nSpot $0.007787 · Futures $0.007928\nSpot 24h amount $926.9K · Futures 24h amount $1.2M",
  },
  deepen: {
    title: "LONG #ELIZAOS spread +2.42% detected (deepened)",
    peak: "daily peak was +4.63%",
    spot: "$0.001026",
    futures: "$0.001051",
    spotAmount: "$128.3K",
    futuresAmount: "$136.1K",
    caption:
      "An already-open spread expanded far enough to trigger a threaded deepen update.",
    preview:
      "🤑 LONG #ELIZAOS spread +2.42% detected (deepened)\nReply sent into the original thread\nCurrent daily peak +4.63%",
  },
  close: {
    title: "SHORT #GITLAWB aligned in 6 min 9 sec",
    peak: "spread closed below the configured threshold",
    spot: "—",
    futures: "—",
    spotAmount: "—",
    futuresAmount: "—",
    caption:
      "The spread compressed back toward neutral, so the bot closed the thread with a short status message.",
    preview:
      "✅ #GITLAWB aligned in 6 min 9 sec\nThread closed and message ID released",
  },
};

const tabs = document.querySelectorAll("[data-scenario]");
const title = document.querySelector("[data-alert-title]");
const peak = document.querySelector("[data-alert-peak]");
const spot = document.querySelector("[data-alert-spot]");
const futures = document.querySelector("[data-alert-futures]");
const spotAmount = document.querySelector("[data-alert-spot-amount]");
const futuresAmount = document.querySelector("[data-alert-futures-amount]");
const simCaption = document.querySelector("[data-sim-caption]");
const simPreview = document.querySelector("[data-sim-preview]");

function applyScenario(name) {
  const scenario = scenarios[name];
  if (!scenario) {
    return;
  }

  tabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.scenario === name);
  });

  title.textContent = scenario.title;
  peak.textContent = scenario.peak;
  spot.textContent = scenario.spot;
  futures.textContent = scenario.futures;
  spotAmount.textContent = scenario.spotAmount;
  futuresAmount.textContent = scenario.futuresAmount;
  simCaption.textContent = scenario.caption;
  simPreview.textContent = scenario.preview;
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => applyScenario(tab.dataset.scenario));
});

const rotate = ["open", "deepen", "close"];
let current = 0;

setInterval(() => {
  current = (current + 1) % rotate.length;
  applyScenario(rotate[current]);
}, 5000);
