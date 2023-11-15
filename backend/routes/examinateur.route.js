import { Router } from "express";

import { createExaminateur, deleteExaminateur, getExaminateur, getExaminateurById, updateExaminateur} from "../controllers/examinateur.controller.js";


const examinateur_router = Router()

examinateur_router.route('/').get(getExaminateur).post(createExaminateur)
examinateur_router.route('/:id').delete(deleteExaminateur).get(getExaminateurById).put(updateExaminateur)

export default examinateur_router