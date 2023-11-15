import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const getGroupe = async (req, res, next) => {
    try {
        const groupe = await prisma.groupe.findMany({
            
        })
        res.status(200).json(groupe)
    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "Erreur venant du serveur"
        })
    }
}

const createGroupe = async (req, res, next) => {
    try {
        const groupe = await prisma.groupe.create({
            data: {
                ...req.body
            }
        })
        res.status(200).json({
            "success": true,
            "message": "Le nouveau groupe est créé avec succès"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            "success": false,
            "message": "Erreur venant du serveur"
        })
    }
}
 


const getGroupeById = async (req, res, next) => {
    const groupe = await prisma.groupe.findUnique({

        where: {
            id_groupe: req.params.id
        }
    })
    res.status(200).json(groupe)
}

const deleteGroupe = async (req, res, next) => {
    try {
        const groupe = await prisma.groupe.delete({
            where: {
                id_groupe: req.params.id
            }
        })
        res.status(200).json({
            "success": false,
            "message": `Le groupe portant ID : ${req.params.id} est supprimé avec succès`
        })
    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "Erreur venant du serveur"
        })
    }
}

const updateGroupe = async (req, res, next) => {
    try {
        const groupe = await prisma.groupe.update({
            data: {
                ...req.body
            },
            where: {
                id_groupe: req.params.id
            }
        })
        res.status(200).json({
            "success": false,
            "message": `Le groupe portant ID : ${req.params.id} est modifié avec succès`
        })
    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "Erreur venant du serveur"
        })
    }
}



export { getGroupe, getGroupeById, deleteGroupe, updateGroupe, createGroupe }