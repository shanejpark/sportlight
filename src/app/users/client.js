export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = `${BASE_API}/api/users`;
export const signin = async (credentials) => {
  const settings = {
    method: "POST",
  };
  const response = await fetch(`${USERS_API}/signin`, settings);
  return response.data;
};
