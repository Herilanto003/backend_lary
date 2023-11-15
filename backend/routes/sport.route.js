import { Router } from "express";

import { createSport, deleteSport, getSport,getSportById,updateSport } from "../controllers/sport.controller.js";

const sport_router = Router()

sport_router.route('/').get(getSport).post(createSport)
sport_router.route('/:id').delete(deleteSport).get(getSportById).put(updateSport)

export default sport_router