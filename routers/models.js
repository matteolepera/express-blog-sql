import express from "express";
import { models } from "../data/data.js";

const router = express.Router();

//INDEX
router.get("/", (req, res) => {
    const response = {
        info: {
            totalModels: models.length,
        },
        results: {
            models,
        }
    }
    res.json(response);
})
//SHOW
router.get("/:id", (req, res) => {
    res.send("Visualizza un modello ferrari")
})
//STORE
router.post("/", (req, res) => {
    res.send("Aggiungi un modello ferrari")
})
//UPDATE
router.put("/:id", (req, res) => {
    res.send("Modifica un modello ferrari")
})
//MODIFY
router.patch("/:id", (req, res) => {
    res.send("Modifica dettagli di un modello ferrari")
})
//DESTROY
router.delete("/:id", (req, res) => {
    res.send("Elimina un modello ferrari")
})


export default router;