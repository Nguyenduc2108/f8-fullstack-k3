import client from "../api/client";

export default async function getApiKey(email) {
  const { data, res } = await client.get("/api-key", email);
  if (res.ok) {
    const { data: dataResponse } = data;

    localStorage.setItem("apiKey", dataResponse.apiKey);
    localStorage.setItem("email", email);
    return dataResponse.apiKey;
  } else {
    throw Error(data.message);
  }
}
