const totalArquivos = 178;
const galeria = document.getElementById("galeria");

for (let i = 1; i <= totalArquivos; i++) {
  // Exemplo: primeiros 120 imagens, depois vídeos alternando entre mp4/mov
  let file = "";

  if (i <= 120) {
    file = `img${i}.jpg`;
  } else {
    const index = i - 120;
    const ext = index % 2 === 0 ? 'mp4' : 'mov';
    file = `vid${index}.${ext}`;
  }

  const path = `midias/${file}`;
  const isVideo = file.endsWith('.mp4') || file.endsWith('.mov');

  let el;
  if (isVideo) {
    el = document.createElement("a");
    el.href = path;
    el.className = "glightbox";
    el.setAttribute("data-type", "video");

    el.innerHTML = `
      <video class="lazy" data-src="${path}" muted preload="none" controls poster="midias/thumb${i - 120}.jpg"></video>
    `;
  } else {
    el = document.createElement("a");
    el.href = path;
    el.className = "glightbox";
    el.innerHTML = `<img class="lazy" data-src="${path}" alt="memória ${i}" />`;
  }

  galeria.appendChild(el);
}

// Inicialização
const lazyLoadInstance = new LazyLoad();
const lightbox = GLightbox({ selector: '.glightbox' });
