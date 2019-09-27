const array_list = (data) => {
let length, nama2;
 for (let i = 0; i< data.length; i++){
     console.log(`${data}`);
     result = data.push(nama2)
     console.log(`${result}`)
 }
return result
}

const tambah_array = (data) => {
var array = [];
array.push(data);
return data
}

module.exports = {
array_list,
tambah_array
}
