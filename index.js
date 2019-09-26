const express = require('express')
const app = express()
const loop_for = require('./loop/for')
const loop_while = require('./loop/while')

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
    let data
    let result = loop_while.ulang(data)  
    console.log(`${result}`)

    return res.send(result)
    });

app.get("/loop_dowhile", (req,res) => {
    let data 
    let result = loop_while.dowhile(data)
        
    return res.send(result)
    });

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})