import { error, log } from "node:console";
import { ferrariWins } from "../data/data.js";
import { parse } from "node:path";
import connection from "../data/db.js";

//INDEX
function index(req, res) {
    // const pilot = req.query.pilot;
    // const track = req.query.track;
    // const season = req.query.season;
    // let response = "";


    // if (pilot !== undefined) {
    //     response = filterCategory("pilot", pilot)
    // } else if (track !== undefined) {
    //     response = filterCategory("track", track)
    // } else if (season !== undefined) {
    //     response = filterCategory("season", season)
    // } else {
    //     response = {
    //         info: {
    //             totalWins: ferrariWins.length,
    //             leclerWins: driverTotalWin("leclerc"),
    //             sainzWins: driverTotalWin("sainz"),
    //         },
    //         results: ferrariWins,
    //     }
    // }
    // res.json(response);

    const query = "SELECT * FROM `posts`"
    connection.query(query, (err, result) => {
        if (err) {
            return res.status(500).json({
                error: err,
                message: "Errore del server",
            })
        }

        res.json({
            totalPosts: result.length,
            posts: result,
        })
    })

}

//SHOW

function show(req, res) {
    const id = parseInt(req.params.id);
    const win = (ferrariWins.find(win => win.id === id))
    if (win !== undefined) {
        res.json(win);
    } else {
        res.status(404)
        res.json({
            error: "Not found",
            message: "Vittoria inesistente",
        })
    }

}

//STORE
function store(req, res) {
    const data = req.body;
    const newId = ferrariWins[ferrariWins.length - 1].id + 1;
    // console.log(id);

    const newWin = {

        id: newId,
        titolo: data.titolo,
        contenuto: data.contenuto,
        modello: data.modello,
        immagine: data.immagine,
        tags: [data.tags]
    }

    if (!data.titolo || data.titolo === "") {
        res.status(400)
        res.json({
            error: "Bad Request",
            message: "Inserisci un titolo",
        })
    } else {
        ferrariWins.push(newWin);
        res.status(201)
        res.json(newWin)
    }

    // console.log(newWin);
    // res.send("Aggiungi una vittoria ferrari")
}
//UPDATE

function update(req, res) {
    const id = parseInt(req.params.id)
    const win = ferrariWins.find((win => win.id === id))
    const data = req.body;

    win.titolo = data.titolo;
    win.contenuto = data.contenuto;
    win.modello = data.modello;
    win.immagine = data.immagine;
    win.tags = data.tags;

    // console.log(id);
    // console.log(ferrariWins);

    res.json(win)
}

//MODIFY
function modify(req, res) {
    res.send("Modifica dettagli di una vittoria ferrari")
}
//DESTROY
function destroy(req, res) {
    // const id = parseInt(req.params.id)
    // const index = (ferrariWins.findIndex(win => win.id === id))
    // if (index === -1) {
    //     res.status(404)
    //     res.json({
    //         error: "Not found",
    //         message: "Vittoria inesistente"
    //     })
    // }
    // else {
    //     ferrariWins.splice(index, 1)
    //     res.sendStatus(204)
    // }


    const id = req.params.id
    const query = "DELETE FROM `posts` WHERE id = ?"

    connection.query(query, [id], (err) => {
        if (err) {
            return res.status(500).json({
                error: err,
                message: "Errore del server",
            })
        }

        res.sendStatus(204)
    })
}

//OTHER FUNCTION
function driverTotalWin(name) {
    let count = 0;
    ferrariWins.forEach(win => {
        win.tags.forEach(tag => {
            if (tag === name) {
                count++;
            }
        })
    })
    return count;
}

function filterCategory(type, value) {
    let response = "";
    let filteredFerrariWins = ferrariWins;
    filteredFerrariWins = ferrariWins.filter((win => win.tags.includes(value.toLowerCase())))
    response = {
        info: {
            category: type,
            name: value,
            totalWins: filteredFerrariWins.length,
        },
        results: filteredFerrariWins,
    }
    return response;
}


const controller = {
    index,
    show,
    store,
    update,
    modify,
    destroy,
}

export default controller;