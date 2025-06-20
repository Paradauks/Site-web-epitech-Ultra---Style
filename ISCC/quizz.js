document.getElementById("false").addEventListener("click", function(event) {
  event.preventDefault(); // 
  alert("Bah non c'est nul son site");
  
});
document.getElementById("true").addEventListener("click", function(event) {
  event.preventDefault(); // 
  alert("Bravo tu as reussi tu es desormais debite de 1000$");
 
});

document.getElementById("faux").addEventListener("click", function(event) {
  event.preventDefault(); // 
  alert("Toujours pas");
  
});
document.getElementById("cher").addEventListener("click", function(event) {
  event.preventDefault(); // 
  alert("non c est pass cher si t es pas content va voir ailleurs");
 window.location.href = this.href;
});

document.getElementById("pcher").addEventListener("click", function(event) {
  event.preventDefault(); // 
  alert("Bonne reponse les prix sont tous a fait abordable");
  ;
});
document.getElementById("oui").addEventListener("click", function(event) {
  event.preventDefault(); // 
  alert("Oui on est les meilleurs");
 
});

document.getElementById("non").addEventListener("click", function(event) {
  event.preventDefault(); // 
  alert("Ok va voir ailleurs");
  window.location.href = this.href;
});
document.getElementById("ouii").addEventListener("click", function(event) {
  event.preventDefault(); // 
  alert("Oui on est les meilleurs");
 
});

document.getElementById("nonn").addEventListener("click", function(event) {
  event.preventDefault(); // 
  alert("Ok va voir ailleurs");
  window.location.href = this.href;
});


  let startTime;
    let elapsedTime = 0;
    let interval;

    function startChrono() {
      startTime = Date.now() - elapsedTime;
      clearInterval(interval);
      interval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        let seconds = Math.floor(elapsedTime / 1000);
        let minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
        let remainingSeconds = String(seconds % 60).padStart(2, '0');
        document.getElementById("chrono").textContent = `${minutes}:${remainingSeconds}`;
      }, 1000);
    }

    function stopChrono() {
      clearInterval(interval);
    }

    function resetChrono() {
      clearInterval(interval);
      elapsedTime = 0;
      document.getElementById("chrono").textContent = "00:00";
    }


