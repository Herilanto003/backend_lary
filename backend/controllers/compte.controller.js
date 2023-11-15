import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const getComptes = async (req, res, next) => {
    const compte = await prisma.compte.findMany({
    
    })
    res.status(200).json(compte)
}

const createCompte = async (req, res, next) => {
    const compte = await prisma.compte.create({
        data: {
            ...req.body
        }
    })
    res.status(200).json(compte)
}
export { getComptes,createCompte }