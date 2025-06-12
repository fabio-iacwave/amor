// Lista os arquivos manualmente ou gera essa lista no backend se usar com Node/Python etc.
const arquivos = [
    "midias/foto1.jpg",
    "midias/foto2.png",
    "midias/video1.mp4",
    "midias/video2.mp4"
  ];
  
  const galeria = document.getElementById("galeria");
  
  arquivos.forEach(arquivo => {
    let elemento;
    if (arquivo.endsWith(".mp4")) {
      elemento = document.createElement("video");
      elemento.src = arquivo;
      elemento.controls = true;
    } else {
      elemento = document.createElement("img");
      elemento.src = arquivo;
    }
    galeria.appendChild(elemento);
  });
  