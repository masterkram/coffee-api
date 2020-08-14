import axios from 'axios';
const url = 'http://localhost:8080/';

export async function getUserCoffees() {
  const data = await axios.get(url + 'coffee/');
  return data.data;
}

export async function getVarietyTree() {
  const request = await axios.get(url + 'variety/tree');
  console.log(request.data);
  return request.data;
}