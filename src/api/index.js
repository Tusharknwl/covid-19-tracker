import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';  // api is expired

export const fetchData = async () => {
    try {
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);

        
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {

    }
}

export const fetchDailyData = async () => {
      try {
        const { data } = await axios.get(`${url}/daily`);

        // console.log(data);
    
        return data.map(({ confirmed, deaths , reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
      } catch (error) {
        return error;
      }
    };

  
