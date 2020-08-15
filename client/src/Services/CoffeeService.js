import axios from 'axios';
const url = 'http://localhost:8080/';

export async function getUserCoffees() {
  const request = await axios.get(url + 'coffee/');
  return request.data;
}

export async function getVarietyTree() {
  const request = await axios.get(url + 'variety/tree');
  return request.data;
}

export async function getBrewMethods() {
  const request = await axios.get(url + 'brew-method');
  return request.data;
}

export async function getRoastMethods() {
  const request = await axios.get(url + 'roast-method');
  return request.data;
}

export async function getCoffeeBlends() {
  const request = await axios.get(url + 'coffee-mix');
  return request.data;
}

export async function getStats() {
  const request = await axios.get(url + 'cupping-chart/stats');
  console.log(request.data);
  return request.data;
}