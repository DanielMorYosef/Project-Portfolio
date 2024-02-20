let pageSide= document.getElementById('pageSide');
let storedElements = JSON.parse(localStorage.getItem('elements')) || [];

function create(){
    let creation= {
        tag:document.getElementById('elementInput').value,
        color:document.getElementById("colorInput").value,
        bgcolor:document.getElementById("bgcolorInput").value,
        width:parseInt(document.getElementById("widthInput").value),
        height:parseInt(document.getElementById("heightInput").value),
        text:document.getElementById("textInput").value,
    }
    
    let elem=document.createElement(creation.tag);
    elem.style.color= creation.color;
    elem.style.backgroundColor= creation.bgcolor;
    elem.style.width= creation.width+'px';
    elem.style.height= creation.height+'px';
    elem.innerHTML=creation.text;
    console.log(elem);
    pageSide.appendChild(elem);
    storedElements.push(creation);
    localStorage.setItem('elements', JSON.stringify(storedElements));
}

function deleteLastElement() {
    let lastElement = pageSide.lastChild;
    if (lastElement) {
        pageSide.removeChild(lastElement);
        storedElements.pop();
        localStorage.setItem('elements', JSON.stringify(storedElements));
    }
}

let btnDel= document.querySelector('.btnDel');
let btnCreate=document.getElementById('btn');
btnDel.addEventListener('click',deleteLastElement);
btnCreate.addEventListener('click', create);

window.onload = function () {
    storedElements.forEach(function (creation) {
        let elem = document.createElement(creation.tag);
        elem.style.color = creation.color;
        elem.style.backgroundColor = creation.bgcolor;
        elem.style.width = creation.width + 'px';
        elem.style.height = creation.height + 'px';
        elem.innerHTML = creation.text;
        pageSide.appendChild(elem);
    });
};