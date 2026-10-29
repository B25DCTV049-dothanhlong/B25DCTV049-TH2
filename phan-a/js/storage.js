const KEY = "favs";

export function loadFavs() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    return [];
  }
}

export function saveFavs(favs) {
  localStorage.setItem(KEY, JSON.stringify(favs));
}