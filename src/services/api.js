import axios from "axios";
const API_URL = "https://cricket-live-line1.p.rapidapi.com";
const HEADERS = {
  "x-rapidapi-host": "cricket-live-line1.p.rapidapi.com",
  "x-rapidapi-key": "248d69a1bfmsh0615e989460f0cep173542jsn1283bd695b93",
};

export const getPointsTable = async () => {
  const options = {
    method: "GET",
    url: `${API_URL}/series/336/pointsTable`,
    headers: HEADERS,
  };

  try {
    const response = await axios.request(options);
    console.log("Points table data", response.data);

    if (!response.data?.status || !response.data?.data?.A) {
      throw new Error("Invalid points table data format");
    }

    return response.data.data.A.map((team) => ({
      team: team.teams,
      played: team.P,
      won: team.W,
      loss: team.L,
      points: team.Pts,
      nrr: team.NRR,
      flag: team.flag,
    }));
  } catch (error) {
    console.error("Error fetching the data");
    throw error;
  }
};
