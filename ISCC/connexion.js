document.getElementById("connect").addEventListener("click", function(event) {
  event.preventDefault(); // 
  alert("Tu as bien reussi a te connecter tu va etre rediriger a l'acceuil");
  window.location.href = this.href;
});