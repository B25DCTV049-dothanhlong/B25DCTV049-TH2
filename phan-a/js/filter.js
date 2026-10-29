export function getGenres(books) {
  return [...new Set(books.map((b) => b.genre))];
}

export function filterBooks(books, keyword, genre) {
  const q = keyword.trim().toLowerCase();
  return books.filter(
    (b) =>
      b.title.toLowerCase().includes(q) &&
      (genre === "all" || b.genre === genre)
  );
}

export function fillGenreOptions(selectEl, genres) {
  for (const g of genres) {
    const opt = document.createElement("option");
    opt.value = g;
    opt.textContent = g;
    selectEl.append(opt);
  }
}