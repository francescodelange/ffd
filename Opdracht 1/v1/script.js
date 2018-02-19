var source;

function dragStarted(evt) {
    //Begin draggen
    source = evt.target;
    //Selecteer data
    evt.dataTransfer.setData("text/plain", evt.target.innerHTML);
    //Zeg wat er moet gebeuren
    evt.dataTransfer.effectAllowed = "move";
}

function draggingOver(evt){
//Drag over
evt.preventDefault();
//Zeg wat er moet gebeuren
evt.dataTransfer.dropEffect = "move";
}

function dropped(evt){
//Drop
evt.preventDefault();
evt.stopPropagation();
//Tekst bijwerken van het gedragde item
source.innerHTML = evt.target.innerHTML;
//Tekst bijwerken van het gedropde item
evt.target.innerHTML = evt.dataTransfer.getData("text/plain");
}