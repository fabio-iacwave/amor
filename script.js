const galeria = document.getElementById("galeria");

const fotos = Array.from({ length: 10 }, (_, i) => ({
  type: 'image',
  src: `midias/img${i + 1}.jpg`
}));

const videos = Array.from({ length: 6 }, (_, i) => {
  const n = i + 1;
  const isMp4 = [2, 4, 39].includes(n);
  return {
    type: 'video',
    src: `midias/vid${n}.${isMp4 ? 'mp4' : 'mov'}`
  };
});

const midias = [];
let fi = 0, vi = 0;

while (fi < fotos.length || vi < videos.length) {
  if ((fi + vi) % 3 === 0 && vi < videos.length) {
    midias.push(videos[vi++]);
  }
  if (fi < fotos.length) {
    midias.push(fotos[fi++]);
  }
}

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
