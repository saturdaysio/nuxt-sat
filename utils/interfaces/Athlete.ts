import {IStats} from "~/utils/interfaces/Stats";

export interface IAthlete {
  [key: string]: any
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
  height: number
  hometown: string
  location: string
  status: string
  team: string
  stance: string
  style: string
  stats: IStats
  // matches: IMatch[]
  record: number
  weight: number
  imageUrl: string
  created_at: Date
  updated_at: Date
  deleted_at: Date
}
