import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const getSport = async (req, res, next) => {
    try {
        const sport = await prisma.sport.findMany({
           
            include:{
                choix:true
            }
        })
        res.status(200).json(sport)
    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "Erreur venant du serveur"
        })
    }
}

const createSport = async (req, res, next) => {
    try {
        const sport = await prisma.sport.create({
            data: {
                ...req.body
            }
        })
        res.status(200).json({
            "success": true,
            "message": "Le nouveau sport est enregistré avec succès"
        })
    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "Erreur venant du serveur"
        })
    }
}

const getSportById = async (req, res, next) => {
    const sport = await prisma.sport.findUnique({

        where: {
            id_sport: req.params.id
        }
    })
    res.status(200).json(sport)
}

const deleteSport = async (req, res, next) => {
    try {
        const sport = await prisma.sport.delete({
            where: {
                id_sport: req.params.id
            }
        })
        res.status(200).json({
            "success": true,
            "message": "Le sport avec ID : " + req.params.id + " est enregistré avec succès"
        })
    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "Erreur venant du serveur"
        })
    }
}

const updateSport = async (req, res, next) => {
    try {
        const sport = await prisma.sport.update({
            data: {
                ...req.body
            },
            where: {
                id_sport: req.params.id
            }
        })
        res.status(200).json({
            "success": true,
            "message": "Le sport avec ID : " + req.params.id + " est modifié avec succès"
        })
    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "Erreur venant du serveur"
        })
    }
}



export { getSport, getSportById, deleteSport, updateSport, createSport}