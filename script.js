function translate() {
  const dict = {
    "i": "Je",
    "i am": "Je zar"
    "I": "Je",
    "I am": "Je zar"
    "you": "ty",
    "he": "ón",
    "she": "éna",
    "it": "tas",
    "we": "vén",
    "they": "óni",
    "eat": "jeda",
    "bread": "páne",
    "water": "vadra",
    "and": "i"
  };
  let input = document.getElementById("input").value.toLowerCase();
  let words = input.split(/\s+/);
  let output = words.map(w => dict[w] || `[${w}]`).join(" ");
  document.getElementById("output").value = output;
}

