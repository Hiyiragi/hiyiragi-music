import axios from "axios";

const API_CHART_URL = "/chart";

const API_GENRE_URL = "/genre";

const API_SEARCH_URL = "/search";

const API_TOP_RADIO_TRACKS_URL = "/radio/37151/tracks";

export async function loadTopRadioTracks() {
  try {
    const data = await axios(`${API_TOP_RADIO_TRACKS_URL}?limit=100`);
    if (!data.data.data) throw Error();
    return data.data.data;
  } catch (err) {
    throw Error("Failed to load radio!");
  }
}

export async function loadCharts() {
  try {
    const data = await axios(API_CHART_URL);
    if (!data.data) throw Error();
    return data.data;
  } catch (err) {
    throw Error("Failed to load charts!");
  }
}

export async function loadGenres() {
  try {
    const data = await axios(API_GENRE_URL);
    if (!data.data.data) throw Error();
    return data.data.data.filter((genre) => genre.name.toLowerCase() !== "all");
  } catch (err) {
    throw Error("Failed to load genres!");
  }
}

export async function search(searchQuery) {
  try {
    const data = await axios(`${API_SEARCH_URL}?q=${searchQuery}`);
    if (!data.data.data) throw Error();
    return data.data.data;
  } catch (err) {
    throw Error("Failed to load tracks!");
  }
}
