


export const setToLocal = (posts) => {
  localStorage.setItem('posts', JSON.stringify(posts));
}


export const getFromLocal = () => {
  const db = localStorage.getItem('posts');
  return db === null ? [] : JSON.parse(db);

}