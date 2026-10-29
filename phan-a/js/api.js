const API = "https://6ae2a30fbbb54129229a27eb.mockapi.io/books";

export async function fetchBooks() {
  const res = await fetch(API);
  if (!res.ok) {
    throw new Error("Không tải được dữ liệu (mã lỗi " + res.status + ")");
  }
  return res.json();
}
export async function addBook(book) {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  if (!res.ok) {
    throw new Error("Không thêm được sách (mã lỗi " + res.status + ")");
  }
  return res.json();
}