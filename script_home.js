// Menu hamburger pour mobile
const mobileMenuButton = document.querySelector('.hamburger');
const navigationLinks = document.querySelector('.nav-links');

mobileMenuButton.addEventListener('click', () => {
    navigationLinks.classList.toggle('active');
});

// Texte dynamique dans la section Hero (changer les rôles statiquement)
const staticRoles = ["Développeur Web", "Designer UI/UX", "Créateur de Solutions"];
let staticRoleIndex = 0;
const staticDynamicText = document.getElementById('dynamic-text');

setInterval(() => {
    staticDynamicText.textContent = staticRoles[staticRoleIndex];
    staticRoleIndex = (staticRoleIndex + 1) % staticRoles.length;
}, 2000);

// Texte dynamique pour l'effet machine à écrire
const typingRoles = ["Développeur Web", "Designer UI/UX", "Créateur de Solutions"];
let typingRoleIndex = 0;
let typingCharIndex = 0;

const typingTargetElement = document.getElementById("dynamic-roles");

function typingEffect() {
    if (typingCharIndex < typingRoles[typingRoleIndex].length) {
        typingTargetElement.textContent += typingRoles[typingRoleIndex][typingCharIndex];
        typingCharIndex++;
        setTimeout(typingEffect, 100); // Vitesse de frappe
    } else {
        setTimeout(eraseTypingEffect, 1500); // Pause avant d'effacer
    }
}

function eraseTypingEffect() {
    if (typingCharIndex > 0) {
        typingTargetElement.textContent = typingRoles[typingRoleIndex].substring(0, typingCharIndex - 1);
        typingCharIndex--;
        setTimeout(eraseTypingEffect, 50); // Vitesse d'effacement
    } else {
        typingRoleIndex = (typingRoleIndex + 1) % typingRoles.length; // Passer au rôle suivant
        setTimeout(typingEffect, 200); // Pause avant de taper à nouveau
    }
}

// Lancer l'animation au chargement
typingEffect();



const heroHeading = document.getElementById("hero-heading");
const fullText = "Bienvenue dans mon Portfolio";
let textIndex = 0;

function typeText() {
    if (textIndex < fullText.length) {
        heroHeading.textContent += fullText.charAt(textIndex);
        textIndex++;
        setTimeout(typeText, 100); // Vitesse d'écriture (en ms)
    }
}

// Lancer l'effet après le chargement
setTimeout(typeText, 500); // Délai avant de commencer (500ms)





// Textes pour les langues
const texts = {
  fr: {
      hero: "Bonjour, je suis Robin Britelle",
      cta: "Ma présentation",
      aboutTitle: "À Propos de Moi",
      aboutContent1: "Passionné par le développement web et la conception graphique, je crée des solutions modernes et efficaces pour répondre aux besoins des entreprises et des particuliers.",
      aboutContent2: "Mon objectif est de transformer vos idées en réalité grâce à des designs élégants et des technologies robustes.",
      projectsTitle: "Projets Récents",
      contactTitle: "Contactez-moi",
  },
  en: {
      hero: "Hello, I am Robin Britelle",
      cta: "My presentation",
      aboutTitle: "About Me",
      aboutContent1: "Passionate about web development and graphic design, I create modern and effective solutions to meet the needs of businesses and individuals.",
      aboutContent2: "My goal is to turn your ideas into reality through elegant designs and robust technologies.",
      projectsTitle: "Recent Projects",
      contactTitle: "Contact Me",
  },
};

// Bascule de langue
let currentLanguage = "fr";

document.getElementById("language-toggle").addEventListener("click", () => {
    currentLanguage = currentLanguage === "fr" ? "en" : "fr";
    updateLanguage();

    // Mettre à jour l'image et le texte du bouton
    const flagIcon = document.getElementById("flag-icon");
    if (currentLanguage === "fr") {
        flagIcon.src = "v19.png"; // Drapeau anglais
        flagIcon.alt = "Drapeau Anglais";
        document.getElementById("language-toggle").lastChild.textContent = " EN";
    } else {
        flagIcon.src = "v20.png"; // Drapeau français
        flagIcon.alt = "Drapeau Français";
        document.getElementById("language-toggle").lastChild.textContent = " FR";
    }
});

function updateLanguage() {
    document.getElementById("hero-heading").textContent = texts[currentLanguage].hero;
    document.querySelector(".cta").textContent = texts[currentLanguage].cta;
    document.querySelector("#about h2").textContent = texts[currentLanguage].aboutTitle;
    document.querySelector("#about .about-content p:nth-child(1)").textContent = texts[currentLanguage].aboutContent1;
    document.querySelector("#about .about-content p:nth-child(2)").textContent = texts[currentLanguage].aboutContent2;
    document.querySelector("#projects h2").textContent = texts[currentLanguage].projectsTitle;
    document.querySelector("#contact h2").textContent = texts[currentLanguage].contactTitle;
}




const cardData = [
  {
      title: "Titre du Sujet 1",
      detail: "Détail complet sur le sujet 1. Vous pouvez ajouter une description plus approfondie ici avec des informations pertinentes.",
      image: "image1.jpg"
  },
  {
      title: "Titre du Sujet 2",
      detail: "Détail complet sur le sujet 2. Expliquez les points importants ou incluez des informations supplémentaires.",
      image: "image2.jpg"
  },
  {
      title: "Titre du Sujet 3",
      detail: "Détail complet sur le sujet 3. Ajoutez des anecdotes ou des détails qui captiveront l'utilisateur.",
      image: "image3.jpg"
  }
];






const cards = document.querySelectorAll(".card");
const modal = document.getElementById("card-modal");
const modalTitle = document.querySelector("#card-modal h3");
const modalContent = document.getElementById("card-detail");
const modalImage = document.getElementById("card-image");
const closeBtn = document.querySelector(".close-btn");

// Ouvrir la modale avec le contenu approprié
cards.forEach(card => {
    card.addEventListener("click", () => {
        const index = card.getAttribute("data-index"); // Récupérer l'index
        const data = cardData[index]; // Obtenir les données correspondantes

        // Mettre à jour le contenu de la modale
        modalTitle.textContent = data.title;
        modalContent.textContent = data.detail;
        modalImage.src = data.image; // Mettre à jour l'image
        modalImage.alt = `Image pour ${data.title}`; // Ajouter un texte alternatif

        modal.classList.remove("hidden"); // Afficher la modale
    });
});

// Fermer la modale
closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden"); // Masquer la modale
});

// Fermer la modale en cliquant à l'extérieur
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});