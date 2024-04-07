



function animate(notText) 

{
    let notTxt = document.getElementById(notText);

    let textNode = notTxt.childNodes[0]; 

    let text = textNode.data;

setInterval(function () 

{

 text = text[text.length - 1] + text.substring(0, text.length - 1);

  textNode.data = text;

}, 300);
}


let count = "" 

addEventListener("click", ()=>{
  
      document.getElementById("notCount").innerText =`${count}`

      count++

      node.remove()
  })







   
