const validElements = new Set([
  "<b>",
  "</b>",
  "<i>",
  "</i>",
  "<em>",
  "</em>",
  "<div>",
  "</div>",
  "<p>",
  "</p>"
]);

function createRegexFromSet(elementsSet) {
  const escapedElements = Array.from(elementsSet).map((element) =>
    element.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  );
  const regexPattern = escapedElements.join('|');
  return new RegExp(regexPattern, 'g');
}

function HTMLElements(str) {
  const regExp = createRegexFromSet(validElements);
  const stack = [];

  for (const tag of str.match(regExp) || []) {
    if (tag.startsWith('</')) {
      const closingTagName = tag.substring(2, tag.length - 1);
      const openingTagName = stack.pop();
      if (closingTagName !== openingTagName) {
        return openingTagName;
      }
    } else {
      const openingTagName = tag.substring(1, tag.length - 1);
      stack.push(openingTagName);
    }
  }

  return stack.length === 0 ? "true" : stack[0];
}

// Test cases
console.log(HTMLElements("<div><div><b></b></div></p>")); // Output: div
console.log(HTMLElements("<div>abc</div><p><em><i>test test test</b></em></p>")); // Output: i
