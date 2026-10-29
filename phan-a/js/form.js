const fields = ["title", "author", "genre", "year"];

export function validate(data) {
  const errors = {};
  const thisYear = new Date().getFullYear();

  if (data.title.trim().length < 3) {
    errors.title = "Tên sách tối thiểu 3 ký tự";
  }
  if (!data.author.trim()) {
    errors.author = "Tác giả là bắt buộc";
  }
  if (!data.genre) {
    errors.genre = "Vui lòng chọn thể loại";
  }
  const y = Number(data.year);
  if (!data.year || !Number.isInteger(y) || y < 1900 || y > thisYear) {
    errors.year = "Năm phải từ 1900 đến " + thisYear;
  }
  return errors;
}

export function readForm() {
  const data = {};
  for (const f of fields) {
    data[f] = document.getElementById(f).value;
  }
  return data;
}

export function showErrors(errors) {
  for (const f of fields) {
    document.getElementById("err-" + f).textContent = errors[f] || "";
  }
}

export function clearForm() {
  for (const f of fields) {
    document.getElementById(f).value = "";
  }
  showErrors({});
}