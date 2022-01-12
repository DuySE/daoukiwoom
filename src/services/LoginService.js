const loginAPI = process.env.REACT_APP_AUTHENTICATION_URL

const login = async () => {
  const response = await fetch(loginAPI);
  const result = await response.json();
  return result
}
export default login