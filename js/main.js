document.querySelector("#hotspotBtnHead").addEventListener("click", updateInfoboxHead);

function updateInfoboxHead() {
  console.log("updateInfoboxHead");
  // document.querySelector("#efficiency").textContent = "Her er information vedrørende zombiers hoveder";
  // document.querySelector("#requirement").textContent = "Her er noget mere vedrørende zombiers hoveder";

  document.querySelector(".info-text .placeholder").textContent = "Her er info";
  document.querySelector("#efficiency").innerHTML = "<h2>Hoved</h2><p>Info om hoved</p><img src='billede.webp'>";
  document.querySelector("#requirement").textContent = "<p>Her er noget mere vedrørende zombiers hoveder</p>";
}
