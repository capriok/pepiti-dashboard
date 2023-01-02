export interface ServicesSummary {
   unique_riders: number
   records: number
   races: number
   laps: number
}

export interface RiderRecord {
   _id: string
   MMR: string
   SR: string
   name: string
   contact: number
   world_records: {
      [key: string]: number
      'MX1 OEM': number
      'MX1-2T OEM': number
      'MX2 OEM': number
      'MX2-2T OEM': number
      'MX3 OEM': number
      'SM1 OEM': number
      'SM1-2t OEM': number
      'SM2 OEM': number
      'SM2-2t OEM': number
   }
   total_laps: number
   favorite_bike: {
      name: string
      laps: number
   }
   average_speed: number
}

export interface TrackRecord {
   _id: string
   category: string
   rider_guid: string
   track: string
   average_speed: number
   bike: string
   lap_time: number
   rider_name: string
   split_1: number
   split_2: number
}

export interface TopTrackRecords {
   records: {
      name: string
      records: TrackRecord[]
      total_laps: number
   }[]
}

export interface Track {
   name: string
   records: TrackRecord[]
   total_laps: number
}

// export interface DashboardProps {
//    tracks: v0Tracks
//    summary: ServicesSummary
//    worldRecords: WorldRecords
//    topMMR: TopMMRandSR
//    topSR: TopMMRandSR
// }

export interface WorldRecords {
   [key: string]: {
      name: string
      total: number
   }
}

export interface TopRiderData {
   _id: string
   MMR: number
   SR: number
   name: string
   contact: number
}

export interface TopData {
   riders: TopRiderData[]
}
