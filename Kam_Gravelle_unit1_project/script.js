var seaturtle = ["sea turtle"]
var jellyfish = ["jellyfish"]
var coralreef = ["coral reef"]

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function entersealife() {
	sealife = ["none"]
	while (sealife=="none") {
		var sealife = prompt("enter sea turtle jellyfish or coral reef for facts");

		if (seaturtle.includes(sealife.toLowerCase())) {
			themonth = `${capitalize(sealife)}`;
			document.getElementById("thedays").innerHTML = `${themonth}  lay there eggs on the beaches.`;
		}

		else if (jellyfish.includes(sealife.toLowerCase())) {
			themonth = `${capitalize(sealife)}`;
			document.getElementById("thedays").innerHTML = `${themonth}  have no brains.`;
		}

		else if (coralreef.includes(sealife.toLowerCase())) {
			themonth = `${capitalize(sealife)}`;
			document.getElementById("thedays").innerHTML = `${themonth} they are going extinct.`;
		}

		else {
			alert(`${capitalize(sealife)} was not one of the prompts.`)
}

  }
	console.log(sealife)
}
