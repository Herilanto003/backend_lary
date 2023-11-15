import { Router } from "express";

import { getComptes, createCompte } from '../controllers/compte.controller.js'

const compte_router = Router()

compte_router.route('/').get(getComptes).post(createCompte)


export default choix_router