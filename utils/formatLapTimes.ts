export const formatLapTimes = (time: number): string => {
   const date = new Date(0)
   date.setMilliseconds(time)
   const lapTimeFormat = date.toISOString().substring(14, 23)

   return lapTimeFormat
}
