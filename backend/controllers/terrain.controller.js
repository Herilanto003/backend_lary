import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const getTerrain = async (req, res, next) => {
    try {
        const terrain = await prisma.terrain.findMany({
            include:{
                centre:true
            }
        })
        res.status(200).json(terrain)
    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "Erreur du serveur !"
        })
    }
}

const createTerrain = async (req, res, next) => {
    try {
        const terrain = await prisma.terrain.create({
            data: {
                ...req.body
            }
        })
        res.status(200).json({
            "success": true,
            "message": "Le nouveau terrain est créé avec succès !"
        })
    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "Erreur du serveur !"
        })
    }
}

const getTerrainById = async (req, res, next) => {
    const terrain = await prisma.terrain.findUnique({

        where: {
            id_terrain: req.params.id
        }
    })
    res.status(200).json(terrain)
}

const deleteTerrain = async (req, res, next) => {
    try {
        const terrain = await prisma.terrain.delete({
            where: {
                id_terrain: req.params.id
            }
        })
        res.status(200).json({
            "success": true,
            "message": `Le terrain portant l' ID : ${req.params.id} est supprimé avec succès`
        })
    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "Erreur du serveur !"
        })
    }
}

const updateTerrain = async (req, res, next) => {
    try {
        const terrain = await prisma.terrain.update({
            data: {
                ...req.body
            },
            where: {
                id_terrain: req.params.id
            }
        })
        res.status(200).json({
            "success": true,
            "message": `Le terrain avec ID : ${req.params.id} est modifié avec succès`
        })
    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "Erreur du serveur !"
        })
    }
}



export { getTerrain, getTerrainById, deleteTerrain, updateTerrain, createTerrain }



