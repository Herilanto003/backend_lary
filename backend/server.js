import express from "express"
import centre_router from "./routes/centre.route.js"
import terrain_router from "./routes/terrain.route.js"
import candidats_router from "./routes/candidats.route.js"
import examinateur_router from "./routes/examinateur.route.js"
import groupe_router from "./routes/groupe.route.js"
import sport_router from "./routes/sport.route.js"
import choix_router from "./routes/choix.route.js"
import utilisateur_router from "./routes/utilisateur.route.js" 
import dotenv from 'dotenv';
import cors from 'cors';  
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

dotenv.config()
 
const server = express()

const PORT = process.env.PORT || 5000   

// cors
server.use(cors())

// body
server.use(bodyParser.json())

server.get('/', (req, res) => {
    console.log('tafiditra');
    res.send('')
})

server.use('/centre', centre_router)
server.use('/terrain', terrain_router)
server.use('/candidats', candidats_router)
server.use('/examinateur', examinateur_router) 
server.use('/groupe', groupe_router)
server.use('/sport',sport_router)  
server.use('/choix',choix_router)
server.use('/utilisateur',utilisateur_router)  

// requete pour les dashboard
server.get('/dashboard/candidats', async (req, res) => {
    try {
        const result = await prisma.sport.findMany({
            select: {
                'choix': true,
                'nom_sport': true,
            }
        });

        const data = result.map(elem => ({
            "nom_sport": elem.nom_sport,
            "total": elem.choix.length
        }))
    
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            "success": false,
            "message": "Erreur venant du serveur"
        })
    }
})

// mongodb+srv://larissa:larissa@larissa.ozttlj8.mongodb.net/eps
server.listen(PORT , console.log("SERVER RUNNING"))  
 
