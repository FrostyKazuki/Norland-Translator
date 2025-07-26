const dictionary = {
  "i": "je",
  "you": "ty",
  "he": "ón",
  "she": "éna",
  "it": "tas",
  "we": "vén",
  "they": "óni",
  "eat": "jeda",
  "bread": "páne",
  "water": "vadra"
};

function translate() {
  const inputText = document.getElementById("input").value.toLowerCase();
  const words = inputText.split(/\s+/);
  const translatedWords = words.map(word => dictionary[word] || word);
  const output = translatedWords.join(" ");
  document.getElementById("output").value = output;
}
