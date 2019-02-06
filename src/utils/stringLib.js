export const getTextFragments = (text) => {
  const arrText = [];
  for (let i = 0; i < text.length; i += 2) {
    arrText.push(text.substr(i, 2));
  }
  return arrText;
}