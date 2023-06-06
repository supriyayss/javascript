
const str = "How are you mate";
const words = str.split(" ");
const t = words.map((word)=>{
    console.log(word)
    return word.charAt(0).toUpperCase() + word.slice(1, word.length-1) + word.charAt(word.length-1).toUpperCase()
})

