const axios = require('axios');

async function toateStirile() {
  const res = await axios.get('http://localhost:4200/api/v1/news');
  return res.data;
}

// eslint-disable-next-line import/prefer-default-export
export { toateStirile };
