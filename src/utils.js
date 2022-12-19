export function unescapeHtml(str) {
  if (str == null) {
    return '';
  }

  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#39;/g, "'");
}

export function shuffleArray(arr) {
  if (arr != undefined) return arr?.sort(() => Math.random() - 0.5);
}

export function makeTime(date) {
  return parseInt(date / 1000);
}
