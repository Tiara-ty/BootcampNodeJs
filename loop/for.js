module.exports = (data) => {
    var text = "";
    console.log (`before ${text}`)

    for (let i =0;i<data.length;i++){
        text += `value data of ${i} is ${data[i]} ||`
    }
    console.log(`After ${text}`)

    return text
}