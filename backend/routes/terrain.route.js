import { Router } from "express";

import { getTerrain, getTerrainById, deleteTerrain, updateTerrain, createTerrain } from '../controllers/terrain.controller.js'

const terrain_router = Router()

terrain_router.route('/').get(getTerrain).post(createTerrain)
terrain_router.route('/:id').delete(deleteTerrain).get(getTerrainById).put(updateTerrain)

export default terrain_router