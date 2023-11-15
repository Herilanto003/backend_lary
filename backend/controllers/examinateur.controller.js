import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const getExaminateur = async (req, res, next) => {
    try{
        const examinateur = await prisma.examinateur.findMany({
            
        })
        res.status(200).json(examinateur)
    } catch(error) {
        res.status(400).json({
            "success": false,
            "message": "erreur du serveur"
        })
    }
}

const createExaminateur = async (req, res, next) => {
    try {
        const examinateur = await prisma.examinateur.create({
            data: {
                ...req.body
            }
        })
        res.status(200).json({
            "success": true,
            "message": "L' examinateur est créé avec succès"
        })
    } catch(error) {
        res.status(400).json({
            "success": false,
            "message": "Verifie bien les données ou fait appel à un responsable"
        })
    }
}

const getExaminateurById = async (req, res, next) => {
    const examinateur = await prisma.examinateur.findUnique({

        where: {
            id_examinateur: req.params.id
        }
    })
    res.status(200).json(examinateur)
}

const deleteExaminateur = async (req, res, next) => {
    try{
        const examinateur = await prisma.examinateur.delete({
            where: {
                id_examinateur: req.params.id
            }
        })
        res.status(200).json({
            "success": true,
            "message": "L' examinateur portant l' ID "+req.params.id+" est supprimé avec succès"
        })
    } catch(error) {
        res.status(400).json({
            "success": false,
            "message": "Erreur du serveur, fait appel à un administrateur"
        })
    }
}

const updateExaminateur = async (req, res, next) => {
    try{
        const examinateur = await prisma.examinateur.update({
            data: {
                ...req.body
            },
            where: {
                id_examinateur: req.params.id
            }
        })
        res.status(200).json({
            "success": true,
            "message": "L' examinateur portant l' ID "+req.params.id+" est modifié avec succès"
        })
    } catch(error) {
        res.status(400).json({
            "success": false,
            "message": "Erreur du serveur, fait appel à un administrateur"
        })
    }
}



export { getExaminateur, getExaminateurById, deleteExaminateur, updateExaminateur, createExaminateur }