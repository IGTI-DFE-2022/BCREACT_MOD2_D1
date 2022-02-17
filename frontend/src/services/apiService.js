import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
});

export function getCities() {
  return api.get('/cities')
}

export function getVotes(cityId) {
  return api.get(`/election?cityId=${cityId}`)
}

export function getCandidates() {
  return api.get(`/candidates`)
}
