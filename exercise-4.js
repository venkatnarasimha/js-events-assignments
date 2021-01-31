window.addEventListener('load',()=>{

    const inputValue=document.querySelector(".text");
    const len=document.querySelector(".output");

    document.addEventListener('input',event=>{
        len.innerHTML=inputValue.value.length;
    });


});


