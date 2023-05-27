let showResult = document.querySelector("#show");

function decrement() {
    let content = parseInt(showResult.innerText);
    if(content <= 0 && content > -10) {
        content-=1;
        showResult.innerText = content;
    }
    else {
        showResult.innerText = 0;
    }
}
function increment() {

    let content = parseInt(showResult.textContent);
    if(content >= 0 && content < 10) {
        content+=1;
        showResult.textContent = content;
    }
    else {
        showResult.textContent = 0;
    }
}
