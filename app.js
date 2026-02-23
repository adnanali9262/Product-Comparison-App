let deferredPrompt;

function togglePack3() {
  document.getElementById("pack3").classList.toggle("hidden");
}

function compare() {
  const packs = [];

  for (let i = 1; i <= 3; i++) {
    const w = parseFloat(document.getElementById("w" + i)?.value);
    const p = parseFloat(document.getElementById("p" + i)?.value);

    if (w && p) {
      packs.push({
        name: "Pack " + i,
        unitPrice: p / w
      });
    }
  }

  if (packs.length < 2) {
    document.getElementById("result").innerText =
      "Enter at least two valid packs.";
    return;
  }

  packs.sort((a, b) => a.unitPrice - b.unitPrice);

  let resultText = "Best value: " + packs[0].name + "\n\n";

  packs.forEach(p => {
    resultText += `${p.name} = ${p.unitPrice.toFixed(4)} per gram\n`;
  });

  document.getElementById("result").innerText = resultText;
}

/* Install Prompt Handling */

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById("installBtn").classList.remove("hidden");
});

document.getElementById("installBtn").addEventListener("click", async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt = null;
  }
});