import httpStatus from "http-status"
import { getPassangersTravelsDB } from "../repositories/passengers.repositories.js"
import { calculateNumberOfPages } from "../services/passenger.services.js"

export async function getPassengersTravels(req, res) {
    let { page } = req.query

    page = Number(page)
    console.log(page)

    if (page === undefined ||isNaN(page)|| page <= 0) {
        return res.status(httpStatus.BAD_REQUEST).send("Invalid page value")
    }
    try {
        const result = await calculateNumberOfPages(page)
        
        if (result.rowCount > 100) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Too many results")
        }
        console.log(result.rows)
        res.status(200).send(result.rows)
    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
}