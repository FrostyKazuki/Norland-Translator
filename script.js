const dictionary = {
  "I": "je",
  "you": "ty",
  "he": "ón",
  "she": "éna",
  "it": "tas",
  "we": "vén",
  "they": "óni",
  "eat": "jeda",
  "water": "vadra",
  "bread": "páne"
};

function translate() {
  const input = document.getElementById("input").value.toLowerCase();
  const words = input.split(/\s+/);
  const translated = words.map(word => dictionary[word] || word);
  document.getElementById("output").innerText = translated.join(" ");
}

