window.addEventListener('load',()=>{
    const result=document.querySelector(".result");
    const input=document.querySelector(".hex");

    document.addEventListener('input',event=>{
        result.style.backgroundColor=input.value;
    });

});