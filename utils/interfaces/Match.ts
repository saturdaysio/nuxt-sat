import { IAthlete } from "./Athlete"
import { IEvent } from "./Event"
import { ILocation } from "./Location"

export interface IMatch {
  id: number
  fight_type: string
  weightclass: string
  event: IEvent
  location: ILocation
  nowin: string
  athlete_winner: IAthlete
  athlete_loser: IAthlete
  round: number
  time: string
  method: string
  award: string
  type: string
  order: number
  created_at: Date
  updated_at: Date
  deleted_at: Date
}
