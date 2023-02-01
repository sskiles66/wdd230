const unlist = document.body.querySelector("#list");
const input = document.body.querySelector("#favchap");
const button = document.body.querySelector("button");

function doSomething(){
    let val = input.value;
    
    const lis = document.createElement("li");
    const span = document.createElement("span");
    const button2 = document.createElement("button");

    lis.appendChild(span);
    lis.appendChild(button2);

    span.innerHTML = val;
    button2.innerHTML = "❌";
    unlist.appendChild(lis);

    input.value = "";

    input.focus();

    button2.addEventListener("click", () => {
        lis.remove();
    })

    
}



button.addEventListener("click", doSomething);