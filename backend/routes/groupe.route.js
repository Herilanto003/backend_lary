import { Router } from "express";

import { createGroupe, deleteGroupe, getGroupeById, updateGroupe,getGroupe } from "../controllers/groupe.controller.js";

const groupe_router = Router()

groupe_router.route('/').get(getGroupe).post(createGroupe)
groupe_router.route('/:id').delete(deleteGroupe).get(getGroupeById).put(updateGroupe)

export default groupe_router