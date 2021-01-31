window.addEventListener('load' ,()=>{
    const counter=document.querySelector(".text");

    const minusButton=document.querySelector(".minus");
    minusclick=event=>{
        console.log('clciled -')
        counter.innerHTML=counter.value--;
    }
    minusButton.addEventListener('click',minusclick);

    const plusButton=document.querySelector(".plus");
    plusClick=event=>{
        console.log('clicled +')
        counter.innerHTML=counter.value++;
    }
    plusButton.addEventListener('click',plusClick);
});