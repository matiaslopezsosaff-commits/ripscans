// INDEX
if (document.getElementById("mangaList")) {
  const container = document.getElementById("mangaList");

  mangas.forEach(m => {
    container.innerHTML += `
      <div class="card">
        <a href="manga.html?id=${m.id}">
          <img src="${m.cover}">
          <h3>${m.title}</h3>
        </a>
      </div>
    `;
  });
}

// MANGA PAGE
if (document.getElementById("chapterList")) {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");

  const manga = mangas.find(m => m.id === id);

  document.getElementById("mangaInfo").innerHTML =
    `<h1>${manga.title}</h1>`;

  manga.chapters.forEach(ch => {
    document.getElementById("chapterList").innerHTML += `
      <div class="chapter" onclick="goRead('${id}', ${ch.number})">
        Capítulo ${ch.number}
      </div>
    `;
  });
}

// READER
if (document.getElementById("reader")) {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const cap = parseInt(params.get("cap"));

  const manga = mangas.find(m => m.id === id);
  const chapter = manga.chapters.find(c => c.number === cap);

  chapter.images.forEach(img => {
    document.getElementById("reader").innerHTML += `
      <img src="${img}">
    `;
  });
}

// NAV
function goRead(id, cap) {
  location.href = `reader.html?id=${id}&cap=${cap}`;
}
