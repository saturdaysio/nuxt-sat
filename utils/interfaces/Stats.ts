import {IAthlete} from "~/utils/interfaces/Athlete";

export interface IStats {
  id: number
  athlete: IAthlete
  weightKG: number
  heightCM: number
  reachCM: number
  style: string
  credential: string
  teamId: string
  stance: string
  strikingAccuracyPercentage: number
  significantStrikesLanded: number
  significantStrikesAttempted: number
  significantStrikesDefensePercentage: number
  significantStrikesLandedPerMin: number
  significantStrikesAbsorbedPerMin: number
  knockdownAverage: number
  grapplingAccuracyPercentage: number
  takedownsLanded: number
  takedownsAttempted: number
  takedownAveragePer15Min: number
  takedownDefensePercentage: number
  submissionAverage: number
  averageFightTime: string
  created_at: Date
  updated_at: Date
  deleted_at: Date
}
