import axios from "axios";

const unauthenticatedAPI = (baseURL: string ) => axios.create({
  baseURL,
  timeout: 1000,
})

// api sigleton
export class API {
  private static instance: API;
  private unauthenticatedAPI: any;

  private constructor() {
    const config = useRuntimeConfig();

    this.unauthenticatedAPI = unauthenticatedAPI(`${config.public.MMA_API_URL}/api/v1`);
  }

  public static getInstance(): API {
    if (!API.instance) {
      API.instance = new API();
    }

    return API.instance;
  }

  public getAthlete(id: string) {
    return this.unauthenticatedAPI.get(`/athlete/${id}`);
  }
}
