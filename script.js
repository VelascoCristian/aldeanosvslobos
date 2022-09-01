function choosePlayers() {
    removeMenu();
    document.getElementById("phrase").textContent = "Selecciona la cantidad de jugadores";
    document.getElementById("phrase").style.fontFamily = "sans-serif,Impact,Charcoal";
    createSelect();
    createButtom()
}

function removeMenu() {
    document.getElementById("btn-play").style.display = "none";
    document.getElementById("btn-tutorial").style.display = "none";
    document.getElementById("werewolf").style.display = "none";
}

function createSelect() {
    let select = document.createElement("Select");
    select.setAttribute("id", "createPlayers");
    document.body.appendChild(select);

    let option1 = document.createElement("option");
    let option2 = document.createElement("option");
    let option3 = document.createElement("option");
    let option4 = document.createElement("option");
    option1.setAttribute("value", "5");
    option2.setAttribute("value", "6");
    option3.setAttribute("value", "7");
    option4.setAttribute("value", "8");
    let nod1 = document.createTextNode("5");
    let nod2 = document.createTextNode("6");
    let nod3 = document.createTextNode("7");
    let nod4 = document.createTextNode("8");
    option1.appendChild(nod1);
    option2.appendChild(nod2);
    option3.appendChild(nod3);
    option4.appendChild(nod4);
    document.getElementById("createPlayers").appendChild(option1);
    document.getElementById("createPlayers").appendChild(option2);
    document.getElementById("createPlayers").appendChild(option3);
    document.getElementById("createPlayers").appendChild(option4);
}

function createButtom() {
    let btn = document.createElement("BUTTON");
    btn.setAttribute("id", "createButtom");
    let text = document.createTextNode("Seleccionar");
    btn.appendChild(text);
    document.body.appendChild(btn);
}