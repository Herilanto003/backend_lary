import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const getChoix = async (req, res, next) => {
    try {
        const choix = await prisma.choix.findMany({
        
        })
        res.status(200).json(choix)
    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "Erreur du serveur"
        })
    }
}

const createChoix = async (req, res, next) => {
    try {
        const choix = await prisma.choix.create({
            data: {
                ...req.body
            }
        })
        res.status(200).json({
            "success": true,
            "message": "Le nouveau choix est créé avec succès"
        })
    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "Erreur du serveur"
        })
    }
}

const getChoixById = async (req, res, next) => {
    const choix = await prisma.choix.findUnique({

        where: {
            id_choix: req.params.id
        }
    })
    res.status(200).json(choix)
}

const deleteChoix = async (req, res, next) => {
    try {
        const choix = await prisma.choix.delete({
            where: { 
                id_choix: req.params.id
            }
        })
        res.status(200).json({
            "success": true,
            "message": `Le choix portan ID : ${req.params.id} est supprimé avec succès`
        })
    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "Erreur du serveur"
        })
    }
}

const updateChoix = async (req, res, next) => {
    try {
        const choix = await prisma.choix.update({
            data: {
                ...req.body
            },
            where: {
                id_choix: req.params.id
            }
        })
        res.status(200).json({
            "success": true,
            "message": `Le choix portan ID : ${req.params.id} est modifié avec succès`
        })
    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "Erreur du serveur"
        })
    }
}



export { getChoix, getChoixById, deleteChoix, updateChoix, createChoix }