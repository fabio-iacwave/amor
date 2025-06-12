const galeria = document.getElementById("galeria");

// 124 imagens .jpg
const fotos = Array.from({ length: 124 }, (_, i) => ({
  type: 'image',
  src: `midias/img${i + 1}.jpg`
}));

// vídeos: .mp4 para vid2, vid4, vid33
const mp4s = [2, 4, 33];
const videos = [];

for (let i = 1; i <= 36; i++) {
  const ext = mp4s.includes(i) ? 'mp4' : 'mov';
  videos.push({
    type: 'video',
    src: `midias/vid${i}.${ext}`
  });
}

// Intercala: 2 fotos para cada 1 vídeo
const midias = [];
let fi = 0, vi = 0;

while (fi < fotos.length || vi < videos.length) {
  if (fi < fotos.length) midias.push(fotos[fi++]);
  if (fi < fotos.length) midias.push(fotos[fi++]);
  if (vi < videos.length) midias.push(videos[vi++]);
}

// Renderiza a galeria
midias.forEach((m, index) => {
  const el = document.createElement("a");
  el.className = "glightbox";

  if (m.type === "image") {
    el.href = m.src;
    el.innerHTML = `<img class="lazy" data-src="${m.src}" alt="foto ${index + 1}" />`;
  } else {
    el.href = m.src;
    el.setAttribute("data-type", "video");
    el.innerHTML = `<video class="lazy" data-src="${m.src}" muted preload="none" controls></video>`;
  }

  galeria.appendChild(el);
});

// Inicializa LazyLoad e Lightbox
const lazyLoadInstance = new LazyLoad();
const lightbox = GLightbox({ selector: '.glightbox' });
