const btnEl = document.getElementById("btn")
const emojiname = document.getElementById("emoji-name")
const emojiapi = [] // empty array
async function emojis() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=788337b10bd3303b9e7ac3a8038744822aee10b8")

   let data = await response.json()
//    console.log(data);
    for(let i=0; i< 2694; i++) {
        emojiapi.push({
            emojiname : data[i].character,
            emoId : data[i].unicodeName,
        })
    }
}
console.log(emojiapi);
emojis()
btnEl.addEventListener("click" , () => {
    // console.log("click");
    const randomNum = Math.floor(Math.random() * emojiapi.length)
    // console.log(randomNum);
    btnEl.innerText = emojiapi[randomNum].emojiname
    emojiname.innerText = emojiapi[randomNum].emoId
})
