const colorMap: any = {
   Honda: 'red',
   Kawasaki: 'green',
   Yamaha: '',
   KTM: 'orange',
   GASGAS: 'pink',
   Husqvarna: 'gray',
   Suzuki: 'yellow',
   Fantic: 'indigo',
   Alta: 'black',
   undefined: '',
}

export const handleBikeColor = (bike: string) => {
   const brands = Object.keys(colorMap)
   const colorMatch = brands.filter((brand) => bike.includes(brand)).pop()
   const color = colorMatch ? colorMatch : 'inherit'

   return colorMap[color]
}
