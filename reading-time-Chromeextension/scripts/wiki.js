const main_text = document.querySelector("div.mw-body-content");

// `document.querySelector` may return null if the selector doesn't match anything.
if (main_text) {
  const text = main_text.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  main_text.insertAdjacentElement("afterBegin", badge);
}