

// Exemple de fonction pour ouvrir le panier
function openPanier() {
  const frame = document.getElementById('frame');
  if (frame.style.display === "none") {
    frame.style.display = "block";
  } else {
    frame.style.display = "none";
  }
}

const toggleButton = document.getElementById('toggle-theme');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
function agrandirTexte() {
      const texte = document.getElementById('texte');
      const tailleActuelle = parseFloat(window.getComputedStyle(texte).fontSize);
      texte.style.fontSize = (tailleActuelle + 2) + 'px'; 
    }

    function reduireTexte() {
      const texte = document.getElementById('texte');
      const tailleActuelle = parseFloat(window.getComputedStyle(texte).fontSize);
      texte.style.fontSize = (tailleActuelle - 2) + 'px'; 
    }