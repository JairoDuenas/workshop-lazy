let totalImages = 0;
let loadedImages = 0;

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

const isIntersecting = (intersectionEntry) => intersectionEntry.isIntersecting; // true (dentro de la pantalla)

const loadImage = (intersectionEntry) => {
  const imgNode = intersectionEntry.target; // container (DIV)
  imgNode.src = imgNode.dataset.src;
  imgNode.onload = () => {
    loadedImages += 1;
    logState();
  };
  observer.unobserve(imgNode);
};

export const resgisterImage = (imagen) => {
  // IntersectionObserver -> observer(imagen)
  observer.observe(imagen);
  totalImages += 1;
  logState();
};

function logState() {
  console.log(`⚪️ Total Imágenes: ${totalImages}`);
  console.log(`🟣 Imágenes cargadas: ${loadedImages}`);
  console.log("--------------------------------------");
}