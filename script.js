const galeria = document.getElementById("galeria");

const fotos = Array.from({ length: 134 }, (_, i) => ({
  type: 'image',
  src: `midias/img${i + 1}.${i % 2 === 0 ? 'jpg' : 'jpeg'}`
}));

const videos = Array.from({ length: 44 }, (_, i) => ({
  type: 'video',
  src: `midias/vid${i + 1}.${i % 2 === 0 ? 'mp4' : 'mov'}`
}));

// Intercala imagens e vídeos
const midias = [];
const max = Math.max(fotos.length, videos.length);
let fi = 0, vi = 0;

for (let i = 0; i < fotos.length + videos.length; i++) {
  if ((i % 3 === 0 || vi >= videos.length) && fi < fotos.length) {
    midias.push(fotos[fi++]);
  } else if (vi < videos.length) {
    midias.push(videos[vi++]);
  }
}

// Renderiza os elementos
midias.forEach((m, index) => {
  let el = document.createElement("a");
  el.className = "glightbox";

  if (m.type === "image") {
    el.href = m.src;
    el.innerHTML = `<img class="lazy" data-src="${m.src}" alt="foto ${index + 1}">`;
  } else {
    el.href = m.src;
    el.setAttribute("data-type", "video");
    el.innerHTML = `<video class="lazy" data-src="${m.src}" muted preload="none" controls></video>`;
  }

  galeria.appendChild(el);
});

const lazyLoadInstance = new LazyLoad();
const lightbox = GLightbox({ selector: '.glightbox' });
