// votre code ici
function checkAge(age) {
	if (age < Number(18)) {
		return "Vous êtes mineur.";
	} else if (age >= Number(18) && age < Number(65)) {
		return "Vous êtes majeur.";
	} else {
		return "Vous êtes senior.";
	}
}
export default checkAge;
