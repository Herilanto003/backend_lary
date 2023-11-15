import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const getCandidats = async (req, res, next) => {
    try{
        const candidats = await prisma.candidat.findMany({
            
        })
        res.status(200).json(candidats) 
    } catch(error) {
        console.log(error);
        res.status(400).json({
            "success": false,
            "message": "Erreur venant du serveur ! Si le problème persiste appelez le responsable"
        })
        return
    }
}

const createCandidats = async (req, res, next) => {
    console.log(req.body);
    const body = { ...parseInt(req.body.numroInscription) }
    console.log(body);

    try{
        const candidats = await prisma.candidat.create({
            data: {
                ...req.body
            }
        })
    } catch (error) {
        res.status(400).json({
            "success": false,
            "message": "Veuillez bien vérifier les données !"
        })
        console.log(error);
        
        return 
    }
    res.status(200).json({
        "succes": true,
        "message": "Le candidat est créé avec succès !"
    })
}

const getCandidatsById = async (req, res, next) => {
    const candidats = await prisma.candidat.findUnique({

        where: {
            id_candidat: req.params.id
        }
    })
    res.status(200).json(candidats)
}

const deleteCandidats = async (req, res, next) => {
    try{
        const candidats = await prisma.candidat.delete({
            where: {
                id_candidat: req.params.id
            }
        })
        res.status(200).json({
            "success": true,
            "message": `Le candidat portant l'ID ${req.params.id} est supprimé avec succès`,
            "candidat": candidats
        })
    }catch(error) {
        res.status(400).json({
            "success": false,
            "message": "Il y a un erreur est survenu"
        })
    }
}

const updateCandidats = async (req, res, next) => {
    try{
        const candidats = await prisma.candidat.update({
            data: {
                ...req.body
            },
            where: {
                id_candidat: req.params.id
            }
        })
        res.status(200).json({
            "success": true,
            "message": `Mise du candidat ${req.params.id} est réussi avec succès`
        })
    }catch(error){
        res.status(400).json({
            "success": false,
            "message": "Il y a un erreur est survenu"
        })
    }
}



export {getCandidats, getCandidatsById, deleteCandidats, updateCandidats, createCandidats }