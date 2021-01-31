
window.addEventListener('load', () => {
    const button = document.querySelector(".counter");
    const output=event=>{
        button.innerHTML=button.value++;
    }
    button.addEventListener('click',output);
});