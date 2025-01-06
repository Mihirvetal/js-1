function longestWord(str){
    let words = str.split(" ")
    let result = " "
    for(let i of words){
        if(i.length> result.length){
            result = i
        }

    }
    return result
}

console.log(longestWord("The quick brown fox jumped over the lazy dog"));