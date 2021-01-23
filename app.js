var clickerButton = document.getElementById('clickersaso');
var outcomeContainer = document.getElementById('todos');
var inputContainer = document.getElementById('maininput');

clickerButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputContainer.value;
    outcomeContainer.appendChild(paragraph);
    inputContainer.value="";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('click', function(){
        outcomeContainer.removeChild(paragraph);
    })


    
})