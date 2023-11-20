import SERVER_API from "./config";

export default class client {
  constructor(serverApi = SERVER_API) {
    this.serverApi = serverApi;
  }

  async callApi(url, method, params = {}, body = {}, token = null) {
    url = this.serverApi + url;
    if (Object.keys(params).length) {
      url = url + "?" + new URLSearchParams(params).toString();
    }
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (token) {
      options.headers["X-Api-Key"] = token;
    }
    if (Object.keys(body).length) {
      options.body = JSON.stringify(body);
    }
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      if (res.ok) {
        return {
          res,
          data,
        };
      } else {
        return {
          res,
          data: { message: data.message, data: {} },
        };
      }
    } catch (e) {
      console.log("error", e);
      return {
        res: null,
        data: { message: e.message, data: {} },
      };
    }
  }

  get(url, params = {}, token = null) {
    return this.callApi(url, "GET", params, {}, token);
  }

  post(url, body, params = {}, token = null) {
    return this.callApi(url, "POST", params, body, token);
  }

  put(url, body, params = {}, token = null) {
    return this.callApi(url, "PUT", params, body, token);
  }

  patch(url, body, params = {}, token = null) {
    return this.callApi(url, "PATCH", params, body, token);
  }

  delete(url, params = {}, token = null) {
    return this.callApi(url, "DELETE", params, {}, token);
  }
}
