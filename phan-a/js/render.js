export function createCard(book, isFav) {
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.id = book.id;

  const title = document.createElement("h3");
  title.textContent = book.title;

  const info = document.createElement("p");
  info.textContent = book.author + " · " + book.genre + " · " + book.year;

  const favBtn = document.createElement("button");
  favBtn.dataset.action = "fav";
  favBtn.textContent = isFav ? "♥ Đã thích" : "♡ Yêu thích";

  const delBtn = document.createElement("button");
  delBtn.dataset.action = "delete";
  delBtn.textContent = "Xóa";

  card.append(title, info, favBtn, delBtn);
  return card;
}

export function renderBooks(container, list, favs) {
  container.textContent = "";
  for (const book of list) {
    container.append(createCard(book, favs.includes(book.id)));
  }
}
