import axios from 'axios';

const API_URL = 'http://localhost:8080/api/vehiculos/';

const registrarCoche = async (form) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };

  const data = { form };

  try {
    const response = await axios.post(API_URL, JSONStringtify(data), { headers });
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  registrarCoche
};
