import { Router } from "express";

import {getCandidats,createCandidats,deleteCandidats,getCandidatsById,updateCandidats } from '../controllers/candidats.controller.js'

const candidats_router = Router()

candidats_router.route('/').get(getCandidats).post(createCandidats)
candidats_router.route('/:id').delete(deleteCandidats).get(getCandidatsById).put(updateCandidats)

export default candidats_router  