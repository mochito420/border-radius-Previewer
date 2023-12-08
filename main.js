        /* Previewer Div*/
const previewer = document.querySelector('.previewer'); 
        /* Textbox Percentage*/ 
const textbox = document.querySelector('.text')
const radius1 = document.querySelector('.strong1');
const radius2 = document.querySelector('.strong2');
const radius3 = document.querySelector('.strong3');
const radius4 = document.querySelector('.strong4');
        /* Input Range Even Listener*/ 
const rangeLeftInput = document.querySelector('.range-left'); 
        rangeLeftInput.addEventListener('input',()=>{
            let leftValue = rangeLeftInput.value;
            previewer.style.borderBottomLeftRadius = `${leftValue}% ${leftValue}%`
                radius4.innerText = `${leftValue}%`
    })
const rangeTopInput = document.querySelector('.range-top');
        rangeTopInput.addEventListener('input',()=>{
            let topValue = rangeTopInput.value;
            previewer.style.borderTopLeftRadius = `${topValue}%`
                radius1.innerText = `${topValue}%`;
    })
const rangeRightInput = document.querySelector('.range-right');
        rangeRightInput.addEventListener('input',()=>{
            let rightValue = rangeRightInput.value;
            previewer.style.borderTopRightRadius = `${rightValue}%`
                radius2.innerText = `${rightValue}%`
    })
const rangeBottomInput = document.querySelector('.range-bottom');
        rangeBottomInput.addEventListener('input',()=>{
            let bottomValue = rangeBottomInput.value;
            previewer.style.borderBottomRightRadius = `${bottomValue}%`
                radius3.innerText = `${bottomValue}%`
    })

        /* Reset Button*/ 
const reset = document.querySelector('.reset-button');
    reset.addEventListener('click',(e)=>{
        rangeTopInput.value=0;
        rangeLeftInput.value=0;
        rangeBottomInput.value=0;
        rangeRightInput.value=0;
        previewer.style="";
        radius1.innerText = "0%";
        radius2.innerText = "0%";
        radius3.innerText = "0%";
        radius4.innerText = "0%";
    })
        /*Copy Button*/
const customAlert = document.querySelector('.custom-alert');
const copyButton = document.querySelector('.copy-button');
    copyButton.addEventListener('click',(e)=>{
        navigator.clipboard.writeText(textbox.innerText);
        customAlert.removeAttribute('hidden');
            setTimeout(() => {
                customAlert.setAttribute('hidden', 'true');
            }, "1000");            
    });