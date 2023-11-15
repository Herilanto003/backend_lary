import { Router } from "express";

import { getCentre, getCentreById, deleteCentre, updateCentre, createCentre } from '../controllers/centre.controller.js'

const centre_router = Router()

centre_router.route('/').get(getCentre).post(createCentre)
centre_router.route('/:id').delete(deleteCentre).get(getCentreById).put(updateCentre)

export default centre_router