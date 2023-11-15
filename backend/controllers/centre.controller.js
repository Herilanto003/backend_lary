import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const getCentre = async (req, res, next) => {
    try {
        const centre = await prisma.centre.findMany({
            include: {
                terrains: true
            }
        })
        res.status(200).json(centre)
    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "Erreur venant du serveur"
        })
    }
}

const createCentre = async (req, res, next) => {
    try {
        const centre = await prisma.centre.create({
            data: {
                ...req.body
            }
        })
        res.status(200).json({
            "success": true,
            "message": "Le nouveau centre est enregistré avec succès"
        })
    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "Veuillez bien vérifier les données"
        })
    }
}

const getCentreById = async (req, res, next) => {
    const centre = await prisma.centre.findUnique({

        where: {
            id_centre: req.params.id
        }
    })
    res.status(200).json(centre)
}

const deleteCentre = async (req, res, next) => {
    try {
        const centre = await prisma.centre.delete({
            where: {
                id_centre: req.params.id
            }
        })
        res.status(200).json({
            "success": true,
            "message": "Le centre avec ID "+req.params.id+" est supprimé avec succès"
        })
    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "Erreur, peut-être que le donnée n'est pas correcte ou bien une erreur du serveur"
        })
    }
}

const updateCentre = async (req, res, next) => {
    try {
        const centre = await prisma.centre.update({
            data: {
                ...req.body
            },
            where: {
                id_centre: req.params.id
            }
        })
        res.status(200).json({
            "success": true,
            "message": "Le centre avec ID : " + req.params.id + " est modifié avec succès"
        })
    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "Erreur, peut-être que le donnée n'est pas correcte ou bien une erreur du serveur"
        })
    }
}



export { getCentre, getCentreById, deleteCentre, updateCentre, createCentre }



