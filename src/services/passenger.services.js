
export async function calculateNumberOfPages(page){
    const rest = page%4
    const totalPart = Math.floor(page/4)
    const result = await getPassangersTravelsDB(page)
}