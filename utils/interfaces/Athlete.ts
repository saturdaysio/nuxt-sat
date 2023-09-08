import {IStats} from "~/utils/interfaces/Stats";

export interface IAthlete {
  id: number
  name: string
  firstName: string
  lastName: string
  nickname: string
  meme_name: string
  birthdate: Date
  deceased: Date
  age: number
  weightclass: string
  hometown: string
  location: string
  status: string
  team: string
  stance: string
  style: string
  stats: IStats
  // matches: IMatch[]
  // record: IRecord
  weight: number
  created_at: Date
  updated_at: Date
  deleted_at: Date
}
