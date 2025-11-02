// Sélectionne les sections
const sections = document.querySelectorAll(
  "#about-section, #projects-section, #formation-section, #contact-section"
);
const overlay = document.getElementById("overlay");

// Fonction pour ouvrir une section
function openSection(sectionId) {
  sections.forEach(sec => sec.style.display = "none"); // Ferme toutes les autres
  document.getElementById(sectionId).style.display = "block"; // Affiche la bonne
  overlay.style.display = "block"; // Active le fond sombre
}

// Fonction pour fermer les sections
function closeSections() {
  sections.forEach(sec => sec.style.display = "none");
  overlay.style.display = "none";
}

// Fermer si on clique sur le fond sombre
overlay.addEventListener("click", closeSections);

// Menu links event listeners
document.querySelectorAll('.links li a').forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        const text = link.textContent.trim().toLowerCase();
        if(text === 'about me'){
            openSection('about-section');
        } else if(text === 'projects & experience'){
            openSection('projects-section');
        } else if(text === 'formation & certification'){
            openSection('formation-section');
        } else if(text === 'contact'){
            openSection('contact-section');
        }
    });
});

// Close buttons event listeners
document.querySelectorAll('.close-btn').forEach(function(btn){
    btn.addEventListener('click', closeSections);
});
