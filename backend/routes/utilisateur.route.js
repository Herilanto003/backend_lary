import { Router } from "express";

import { getUtilisateur, getUtilisateurById, deleteUtilisateur, updateUtilisateur, createUtilisateur } from '../controllers/utilisateur.controller.js'

const utilisateur_router = Router()

utilisateur_router.route('/').get(getUtilisateur).post(createUtilisateur)
utilisateur_router.route('/:id').delete(deleteUtilisateur).get(getUtilisateurById).put(updateUtilisateur)

export default utilisateur_router
