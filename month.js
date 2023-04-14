function SeasonBy() {
	var numofm, result;

	numofm = document.getElementById('month').value;
	numofm = parseInt(numofm);

	if (numofm === 12 || numofm === 1 || numofm === 2) {
		result = "Зима";
		document.getElementById('out').innerHTML = result;
	} else if (numofm === 3 || numofm === 4 || numofm === 5) {
		result = "Весна";
		document.getElementById('out').innerHTML = result;
	} else if (numofm === 6 || numofm === 7 || numofm === 8) {
		result = "Лето";
		document.getElementById('out').innerHTML = result;
	} else if (numofm === 9 || numofm === 10 || numofm === 11) {
		result = "Осень";
		document.getElementById('out').innerHTML = result;
	}
}