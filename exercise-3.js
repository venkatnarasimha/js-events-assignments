window.addEventListener('load',()=>{

    const encode = document.querySelector('.encoder');
    const result = document.querySelector('.output-text');
    const inputValue = document.querySelector('.input-text');
    const decode = document.querySelector('.decoder');
    encode.addEventListener('click', event => {
            result.value = encodeURIComponent(inputValue.value);
            console.log(encodeURIComponent(inputValue.value));
    });
    decode.addEventListener('click', event => {
        result.value = decodeURIComponent(inputValue.value);
    
    });
});