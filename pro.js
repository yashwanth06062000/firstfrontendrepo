const text = "this is my first auto text write project";
let index = 0;

function wirteText(){
    
    document.body.innerText=text.slice(0,index);

    index++;

    if(index > text.length){
        index=0;
    }
}
setInterval(wirteText,100);




