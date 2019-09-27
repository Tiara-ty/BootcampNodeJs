const express = require('express')
const app = express()
const loop_for = require('./loop/for')
const loop_while = require('./loop/while')
const loop_foreach = require('./loop/foreach')
const loop_map = require('./loop/loopmap')
const map_object = require('./loop/loopmap_object')
const isi_data_array = require('./loop/array')

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send(`Welcome to the beginning of nothingness`)
})


// for (a = 10; a>=1 ; a--) {
//     console.log ("Anak ayam  turun " + `${a}`);
// }

// let i = 10;
// while (i>=1){
//     console.log("index ke :" + `${i}`);
//     i--;
// }

// let nama = ["a","b","c","d","e"];
// let jumlah_array = nama.length;
// let akhir_array = jumlah_array - 1;
// let element_array = nama[akhir_array]; 
// console.log (element_array)

// n = 5
// for(a = 1; a<=n; a++) {
//     for (b=1;b<=a;b++){
//         console.log("*")
//     }
//     console.log(`\n`)
// }


app.get("/loop_for", (req,res) => {
let data = ["aku","kamu","kita"]
let result = loop_for(data)

return res.send(result)
});

app.get("/loop_while", (req,res) => {

    let result = loop_while.ulang()  
    console.log(`${result}`)

    return res.send(result)
    });

app.get("/loop_dowhile", (req,res) => {

    let result = loop_while.dowhile()
        
    return res.send(result)
    });


app.get("/loop-map", (req, res) => {
    let data = ["Red", "Blue", "Green"]
    let result = loop_map(data)

    return res.send(result)
})

app.get('/object-loop', (req, res) => {
    let data = [
        {
            name: "Red",
            note: "Danger"
        },
        {
            name: "Yellow",
            note: "Warning"
        },
        {
            name: "Green",
            note: "Success"
        }
    ]

    let result = map_object(data)

    return res.send(result)
});

app.get("/loop-foreach", (req, res) => {
    let data = ["Red", "Blue", "Green"]
    let result = loop_foreach(data)

    return res.send(result)
});

app.post("/inputarray", (req,res) => {
let nama = req.body.nama;
let result = isi_data_array.tambah_array(nama)

console.log(`${result}`)
return res.send(`${result}`)
});


app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})