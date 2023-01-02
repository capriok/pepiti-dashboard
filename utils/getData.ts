export async function getData(url: string, revalidate?: number): Promise<any> {
   const res = await fetch(url, { next: { revalidate: revalidate ?? false } })
   const data = await res.json()

   return data
}
