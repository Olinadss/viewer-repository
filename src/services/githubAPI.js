const getUsuario = async (username) => {
  const request = await fetch(`https://api.github.com/users/${username}/repos`);
  const requestJson = await request.json();
  return requestJson.results;
};

export default getUsuario;