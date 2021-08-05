import axios from "axios";

export default async function getPokeDescription(APIURL: string) {
  const request = await axios.get(APIURL);

  const { description } = request.data.descriptions[2];

  return description;
}
