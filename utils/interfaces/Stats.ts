import {IAthlete} from "~/utils/interfaces/Athlete";

export interface IStats {
  id: number
  athlete: IAthlete
  weight_kg: number
  height_cm: number
  reach_cm: number
  style: string
  credential: string
  team_id: string
  stance: string
  striking_accuracy: number
  sig_strike_landed: number
  sig_strike_attempt: number
  sig_strike_defense: number
  sig_strike_landed_rate: number
  sig_strike_absorbed: number
  knock_down_ratio: number
  grappling_accuracy: number
  td_landed: number
  td_attempted: number
  td_avg: number
  td_defence: number
  sub_avg_decimal: number
  avg_fight_time: string
  created_at: Date
  updated_at: Date
  deleted_at: Date
}
