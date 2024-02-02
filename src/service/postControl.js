import axios from 'axios';

const API_URL = 'http://localhost:8080/api/vehiculos/';

const registrarCoche = async (brand, model, year, serie) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };

  const data = { brand, model, year, serie };

  try {
    const response = await axios.post(API_URL, data, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  registrarCoche
};
