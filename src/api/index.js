  import axios from 'axios';

  const url = 'https://disease.sh/v3/covid-19/all';

  export const fetchData = async () => {
    try {
      const { data: { cases, recovered, deaths, updated } } = await axios.get(url);
      console.log({ cases, recovered, deaths });

      return { cases, recovered, deaths, updated };
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
      console.log(data);

      // Transform the data to the desired format
      const formattedData = Object.keys(data.cases).map((date) => ({
        date,
        confirmed: data.cases[date],
        deaths: data.deaths[date]
      }));

      return formattedData;
    } catch (error) {
      console.error("Error fetching daily data:", error);
      return error;
    }
  };
