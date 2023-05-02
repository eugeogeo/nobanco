import axios from "axios";

//TODO: conferir se é essa porta mesmo
const baseUrl = "http://localhost:8000";

const api = axios.create({
  baseUrl,
});

//TODO: ver se o back end não permite fazer pesquisa
export async function getUserList(data = {}) {
  const response = await api.get(`userList/${data && data}`);

  return response.data;
}

// TODO: nao achei rota para getUserById
export async function getUserById(id) {
  const response = await api.get(`/userList/${id}`);

  return response.data;
}

export async function createUser(data) {
  const response = await api.post(`createUser/${data}`);

  return response.data;
}

export async function deleteUser(id) {
  const response = await api.delete(`deleteUser/${id}`);

  return response.data;
}

export default api;
