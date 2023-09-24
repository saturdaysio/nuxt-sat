import {ILocation} from "~/utils/interfaces/Location";

export interface IEvent {
  id: number
  name: string
  date: Date
  location: ILocation
  venue: string
  created_at: Date
  updated_at: Date
  deleted_at: Date
}
