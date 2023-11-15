
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const getUtilisateur = async (req, res, next) => {
    const utilisateur = await prisma.utilisateur.findMany({
        
    })
    res.status(200).json(utilisateur)
}

const createUtilisateur = async (req, res, next) => {
    const utilisateur = await prisma.utilisateur.create({
        data: {
            ...req.body
        }
    })
    res.status(200).json(utilisateur)
}

const getUtilisateurById = async (req, res, next) => {
  const utilisateur  = await prisma.utilisateur.findUnique({

      where: {
          id_utilisateur: req.params.id
      }
  })
  res.status(200).json(utilisateur)
}

const deleteUtilisateur = async (req, res, next) => {
    const utilisateur = await prisma.utilisateur.delete({
        where: {
            id_utilisateur: req.params.id
        }
    })
    res.status(200).json(utilisateur)
}

const updateUtilisateur = async (req, res, next) => {
    const utilisateur = await prisma.utilisateur.update({
        data: {
            ...req.body
        },
        where: {
            id_utilisateur: req.params.id
        }
    })
    res.status(200).json(utilisateur)
}



export { getUtilisateur, getUtilisateurById, deleteUtilisateur, updateUtilisateur, createUtilisateur }