// get dynamic image url 
export const getImgURL = (fileName) => {
  return new URL(`../assets/movie-covers/${fileName}`, import.meta.url).href;
};
