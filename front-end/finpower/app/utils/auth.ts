export const getJWT = () => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem('token');
  }
  return null;
}
