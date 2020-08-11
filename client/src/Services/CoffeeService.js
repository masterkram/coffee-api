import axios from 'axios';
const url = 'http://localhost/';

export function getUserCoffees(id) {
  let coffees = null;
  axios.get(url + 'coffee/user/' + id)
  .then((response) => (coffees = response));

  return coffees;
}