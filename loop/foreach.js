module.exports = (data) => {
    var text = ""
    console.log(`before ${text}`)

    let loop = data.forEach ((value,index) => {
        text += `value of ${index} is ${value} ||`
    })

    console.log(`after ${text}`)
    let result = {
        loop,
        text
    }
    return result
}