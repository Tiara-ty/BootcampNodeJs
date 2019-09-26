

const ulang  = (data) => { 
    var text = "";
    var i = 0;
    while (i < 5) {
    text += `\n The number is` + i;
    i++;
}
return text
}

const dowhile = (data) => {
    var result = "";
    var i = 0;
    
    do {
      i = i + 1;
      result = result + i;
    } while (i < 10);
    
    return result
}


module.exports = {
    ulang,
    dowhile
    }
