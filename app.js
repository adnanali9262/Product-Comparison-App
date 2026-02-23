function compare() {
  const w1 = parseFloat(document.getElementById('w1').value);
  const p1 = parseFloat(document.getElementById('p1').value);
  const w2 = parseFloat(document.getElementById('w2').value);
  const p2 = parseFloat(document.getElementById('p2').value);

  if (!w1 || !p1 || !w2 || !p2) {
    document.getElementById('result').innerText = "Please enter all values.";
    return;
  }

  const unit1 = p1 / w1;
  const unit2 = p2 / w2;

  let resultText = "";

  if (unit1 < unit2) {
    resultText = "Pack 1 gives more product for the price.";
  } else if (unit2 < unit1) {
    resultText = "Pack 2 gives more product for the price.";
  } else {
    resultText = "Both packs offer equal value.";
  }

  resultText += `

Price per gram:
Pack 1 = ${unit1.toFixed(4)}
Pack 2 = ${unit2.toFixed(4)}`;

  document.getElementById('result').innerText = resultText;
}
