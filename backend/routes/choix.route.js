import { Router } from "express";

import { getChoix, getChoixById, deleteChoix, updateChoix, createChoix } from '../controllers/choix.controller.js'

const choix_router = Router()

choix_router.route('/').get(getChoix).post(createChoix)
choix_router.route('/:id').delete(deleteChoix).get(getChoixById).put(updateChoix)

export default choix_router