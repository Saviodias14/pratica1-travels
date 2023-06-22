import connection from "../database/database.js"

export async function getPassangersTravelsDB(page){
    return await connection.query(`
    SELECT passengers."fullName" AS passenger, COUNT(travels.id) AS travels
    FROM passenger_travels
    JOIN passengers ON passenger_travels."passengerId" = passengers.id
    JOIN travels ON passenger_travels."travelId" = travels.id
    GROUP BY passengers."fullName"
    OFFSET $1
    LIMIT 100
    `[page])
}