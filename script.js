const total = 10;
const midias = [];

for (let i = 1; i <= total; i++) {
  if (i % 5 === 0) {
    const ext = i % 2 === 0 ? 'mp4' : 'mov';
    midias.push({ type: 'video', src: `midias/vid${i}.${ext}` });
  } else {
    midias.push({ type: 'image', src: `midias/img${i}.jpg` });
  }
}

let index = 0;
const container = document.getElementById("media-container");

function carregar(index) {
  const m = midias[index];
  container.innerHTML = "";

  let el;
  if (m.type === 'image') {
    el = document.createElement("img");
    el.src = m.src;
    el.loading = "lazy";
  } else {
    el = document.createElement("video");
    el.src = m.src;
    el.autoplay = true;
    el.muted = true;
    el.controls = false;
    el.playsInline = true;
    el.loop = false;
  }

  container.appendChild(el);
}

function avancar() {
  index = (index + 1) % midias.length;
  carregar(index);
}

carregar(index);
setInterval(avancar, 5000);
