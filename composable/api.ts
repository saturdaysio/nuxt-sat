import axios from "axios";
import {IAthlete} from "~/utils/interfaces/Athlete";
import {IStats} from "~/utils/interfaces/Stats";

const unauthenticatedAPI = (baseURL: string ) => axios.create({
  baseURL,
  // 5 second timeout
  timeout: 5000,
  withCredentials: true,

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

  public patchAthlete(athlete: IAthlete) {
    return this.unauthenticatedAPI.patch(`/athlete/${athlete.id}`, athlete);
  }

  public patchStats(stats: IStats) {
    return this.unauthenticatedAPI.patch(`/stats/${stats.id}`, stats);
  }
  public postStats(stats: IStats) {
    return this.unauthenticatedAPI.post(`/stats`, stats);
  }
}
