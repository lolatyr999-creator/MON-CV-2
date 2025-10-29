const phrases = [
    "Étudiant en informatique",
    "Passionné du développement web",
    "Passionné de code",
    "Ouvert aux oppoortunités"
]
const texte = document.getElementById("typing-text");
let i = 0;
let phraseIndex = 0;
let efface = false;

function lettreparlettre() {
    const phraseActuelle = phrases[phraseIndex];
    if (!efface && i <= phraseActuelle.length) {
        texte.textContent = phraseActuelle.substring(0, i);
        i++;
        setTimeout(lettreparlettre, 100);
    }
    else if (efface && i >= 0) {
        texte.textContent = phraseActuelle.substring(0, i);
        i--;
        setTimeout(lettreparlettre, 50);
    }
    else {
        efface = !efface;
        if (!efface) {
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
        setTimeout(lettreparlettre, 1000);
    }
}
lettreparlettre();