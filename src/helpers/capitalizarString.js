export const formatearMayuscula = (str) => {
  if (!str) return "";
  const arrStr = str.split(" ");
  let strFormated = "";
  arrStr.forEach((e) => {
    strFormated = `${strFormated} ${e.charAt(0).toUpperCase()}${e.slice(1)}`;
  });

  return strFormated;
};
