import axios from "axios";
import { IAthlete } from "~/utils/interfaces/Athlete";
import { IStats } from "~/utils/interfaces/Stats";
import { IEvent } from "~/utils/interfaces/Event";
import { ILocation } from "~/utils/interfaces/Location";

const unauthenticatedAPI = (baseURL: string ) => axios.create({
  baseURL,
  // 5 second timeout
  timeout: 5000,
  withCredentials: true,

})

// api singleton
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

  public patchAthlete(athlete: Partial<IAthlete>) {
    return this.unauthenticatedAPI.patch(`/athlete/${athlete.id}`, athlete);
  }

  public patchStats(stats: IStats) {
    return this.unauthenticatedAPI.patch(`/stats/${stats.id}`, stats);
  }
  public postStats(stats: IStats) {
    return this.unauthenticatedAPI.post(`/stats`, stats);
  }

  public getEvent(id: string) {
    return this.unauthenticatedAPI.get(`/event/${id}`);
  }

  public getEventMatches(id: string) {
    return this.unauthenticatedAPI.get(`/match/event/${id}`);
  }

  public patchEvent(event: Partial<IEvent>) {
    return this.unauthenticatedAPI.patch(`/event/${event.id}`, event);
  }

  public createLocation(location: Partial<ILocation>) {
    return this.unauthenticatedAPI.post(`/location`, location);
  }

  public patchLocation(location: Partial<ILocation>) {
    console.log("cannot update location at this time")
    return this.unauthenticatedAPI.patch(`/location/${location.id}`, location);
  }

  public getAthleteMatches(id: string) {
    return this.unauthenticatedAPI.get(`/athlete/${id}/matches`);
  }
}
