import { fetchBooks, addBook } from "./api.js";
import { renderBooks } from "./render.js";
import { getGenres, filterBooks, fillGenreOptions } from "./filter.js";
import { loadFavs, saveFavs } from "./storage.js";
import { validate, readForm, showErrors, clearForm } from "./form.js";

const statusEl = document.getElementById("status");
const grid = document.getElementById("book-grid");
const searchInput = document.getElementById("search");
const genreFilter = document.getElementById("genre-filter");
const genreForm = document.getElementById("genre");
const favCountEl = document.getElementById("fav-count");

let books = [];
let favs = loadFavs();

function render() {
  const filtered = filterBooks(books, searchInput.value, genreFilter.value);
  renderBooks(grid, filtered, favs);
  statusEl.textContent =
    "Đang hiển thị " + filtered.length + " / " + books.length + " cuốn";
  favCountEl.textContent = favs.length;
}

function toggleFav(id) {
  if (favs.includes(id)) {
    favs = favs.filter((x) => x !== id);
  } else {
    favs.push(id);
  }
  saveFavs(favs);
  render();
}

function deleteBook(id) {
  if (!confirm("Bạn chắc chắn muốn xóa cuốn sách này?")) return;
  books = books.filter((b) => b.id !== id);
  favs = favs.filter((x) => x !== id);
  saveFavs(favs);
  render();
}

// Event delegation: chỉ 1 listener cho cả lưới
grid.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;
  const id = btn.closest(".card").dataset.id;

  if (btn.dataset.action === "fav") toggleFav(id);
  if (btn.dataset.action === "delete") deleteBook(id);
});

async function init() {
  statusEl.textContent = "Đang tải...";
  try {
    books = await fetchBooks();
    const genres = getGenres(books);
    fillGenreOptions(genreFilter, genres);
    fillGenreOptions(genreForm, genres);
    render();
  } catch (e) {
    statusEl.textContent = "Lỗi: " + e.message;
  }
}

searchInput.addEventListener("input", render);
genreFilter.addEventListener("change", render);
const form = document.getElementById("book-form");

// Báo lỗi ngay khi gõ / đổi giá trị
form.addEventListener("input", () => {
  showErrors(validate(readForm()));
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = readForm();
  const errors = validate(data);
  showErrors(errors);
  if (Object.keys(errors).length > 0) return;

  try {
    const newBook = await addBook({
      title: data.title.trim(),
      author: data.author.trim(),
      genre: data.genre,
      year: Number(data.year),
    });
    books.unshift(newBook); // hiện ở đầu danh sách
    clearForm();
    render();
  } catch (err) {
    statusEl.textContent = "Lỗi: " + err.message;
  }
});

init();