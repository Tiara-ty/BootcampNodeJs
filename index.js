const express = require ("express");
const app = express();
const array_lib = require("./array"); // Import dari array.js
const object_lib = require("./object"); // Import dari object.js
const array_routes = require("./routes");
const array_sort = require("./lib/task1");

app.use(express.urlencoded({extended: true}));

app.get("/", (req,res) => {

    //home

    return res.send(`Welcome to the World`);
});

app.get("/task-1", (req, res) => {
    let alpha = ["Q", "W", "E", "A", "S", "D", "Z", "C"];
    console.log("Before", alpha);

    let result = array_sort.ascending_test(alpha);
    console.log("After", result);

    return res.send(result);
});

app.get("/task-2", (req,res) => {
let alpha = ["Q", "W", "E", "A", "S", "D", "Z","C"];
console.log("Before", alpha);

let result = array_sort.descending_test(alpha);
console.log("After",result);

return res.send(result);
});

app.get("/tugas1", (req,res) => {
    let nama = ["Tiara", "Tosikin", "Joko", "Sony", "Yusafat", "Hendriyono"];
    console.log("Before", nama);

    let hasil = array_sort.ascending_test(nama);
    console.log("Urutan Ascending", hasil);
    
    return res.send(hasil);
    });

app.get("/tugas2", (req,res) => {
        let nama = ["Tiara", "Tosikin", "Joko", "Sony", "Yusafat", "Hendriyono"];
        console.log("Before", nama);
        
       let result = array_sort.descending_test(nama);
        console.log("Urutan Descending",result);
        
        return res.send(result);
        });

 app.get("/tugas3", (req,res) => {

    let nama = ["Tiara", "Tosikin", "Joko", "Sony", "Yusafat", "Hendriyono"];
    let hasil = array_sort.ascending_test(nama);
    let manipulation = array_lib(hasil);
        
            return res.send(manipulation);
        });

 app.get("/tugas4", (req,res) => {

    let nama = ["Tiara", "Tosikin", "Joko", "Sony", "Yusafat", "Hendriyono"];
    let hasil = object_lib.manipulate(nama);
                
        return res.send(hasil);
    });

app.get("/tugas5", (req,res) => {

        let nama = ["Tiara", "Tosikin", "Joko", "Sony", "Yusafat", "Hendriyono"];
        let nama2 = ["Rahayu", "Tri", "Yulianti"]

        let hasil =  object_lib.merge(nama,nama2)
        let result = object_lib.manipulate(hasil);

            return res.send(result);
        });

app.get("/tugas6", (req,res) => {

    let nama = ["Tiara", "Tosikin", "Joko", "Sony", "Yusafat", "Hendriyono"];
    let adangga = nama.includes("Tiara");
                
    if (adangga == true) {
        hasil = "Disini ada nama tersebut";
    }else {
        hasil = "Disini tidak ada nama tersebut";
    }
        return res.send(hasil);
    });



app.use("/array", array_routes);

app.listen(3300, () => {

    console.log(`Example app listening on port 3300`);
});