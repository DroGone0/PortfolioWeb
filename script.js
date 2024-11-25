const patternElement = document.getElementById("pattern");

function createHexagons() {
  // Supprimer les hexagones existants
  while (patternElement.firstChild) {
    patternElement.removeChild(patternElement.firstChild);
  }

  // Calculer le nombre de colonnes et de lignes nécessaires
  const countY = Math.ceil(window.innerHeight / 40) + 1;
  const countX = Math.ceil(window.innerWidth / 48) + 1;

  // Ajouter les hexagones
  for (let i = 0; i < countY; i++) {
    for (let j = 0; j < countX; j++) {
      const hexagon = document.createElement("div");
      hexagon.style = `
        background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODciIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgODcgMTAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMi4xOTg3MyAyNi4xNTQ3TDQzLjUgMi4zMDk0TDg0LjgwMTMgMjYuMTU0N1Y3My44NDUzTDQzLjUgOTcuNjkwNkwyLjE5ODczIDczLjg0NTNWMjYuMTU0N1oiIGZpbGw9IiMxMzEyMTciIHN0cm9rZT0iIzEzMTIxNyIgc3Ryb2tlLXdpZHRoPSI0Ii8+Cjwvc3ZnPgo=') no-repeat;
        width: 44px;
        height: 50px;
        background-size: contain;
        position: absolute;
        top: ${i * 40}px;
        left: ${j * 48 + ((i * 24) % 48)}px;
      `;
      patternElement.appendChild(hexagon);
    }
  }
}

// Initialiser les hexagones
createHexagons();

// Mettre à jour les hexagones lors du redimensionnement
window.addEventListener("resize", createHexagons);

// Animation du gradient
let mousePosition = { x: 0, y: 0 };

document.addEventListener("mousemove", (mouse) => {
  mousePosition = {
    x: mouse.clientX,
    y: mouse.clientY,
  };
});

const loop = () => {
  const gradientElement = document.getElementById("gradient");
  gradientElement.style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`;
  window.requestAnimationFrame(loop);
};

// Démarrer l'animation
window.requestAnimationFrame(loop);

/* AJOUT */

const button = document.getElementById('portfolio-btn');
const ripple = document.getElementById('ripple');

button.addEventListener('click', () => {
  // Lancer l'animation d'ondulation
  ripple.classList.add('ripple-active');

  // Après l'animation d'ondulation, ajouter le fondu sortant
  setTimeout(() => {
    document.body.classList.add('fade-out'); // Classe pour le fondu

    // Redirection après le fondu
    setTimeout(() => {
      window.location.href = './transition1.html';
    }, 1000); // Durée du fondu
  }, 1500); // Durée de l'animation d'ondulation
});