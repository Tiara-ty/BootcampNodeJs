const manipulate = (data) => {
    let urutan, length, first, second, last, all

    urutan = data.sort()
    length = data.length 
    first = data[0]
    second = data[1]
    last = data[length -1]
    all = data

    let = result = {
        urutan, 
        length, 
        first, 
        second, 
        last, 
        all
    }

    return result //panggil variabel
}

const merge = function (data,input) {
    return data.concat(input)
}

const insert = (data,input) => {
    data.push(input)
}

module.exports = {
    manipulate,
    merge : merge,
    add : insert
}