"use strict";

//constructor
function Player(name, isAlive){
    this.name = name;
    this.isAlive = true;
}

var count = 1;

function removeElement(id) {
    document.getElementById(id).style.display = "none";
};

function cleanHome() {
    removeElement("btn-play");
    removeElement("btn-tutorial");
    removeElement("homeWerewolf");
};

function setAttribute(element, key, value) {
    element.style[key] = value
}

function phaseSelectPlayer() {
    //Change phrase
    document.getElementById("phrase").textContent = "Introduce el nombre del jugador";
    setAttribute(document.getElementById("phrase"), "fontFamily", "sans-serif,Impact,Charcoal");
    setAttribute(document.getElementById("phrase"), "textShadow", "none");
    setAttribute(document.getElementById("phrase"), "padding", "0.5%");
    //Change the container size
    document.getElementById("containerMenu").setAttribute("style", "width: 80vw;");
};

function nameOfPlayer(number) {
    let input = document.createElement("input");
    input.setAttribute("id", "player" + number);
    input.setAttribute("type", "text");
    input.setAttribute("autofocus", "");
    input.setAttribute("value", "");
    input.setAttribute("autocomplete", "off");
    document.body.appendChild(input);
};

function createButton(id, onClick, name) {
    let btn = document.createElement("button");
    btn.setAttribute("id", id);
    let text = document.createTextNode(name);
    btn.setAttribute("onclick", onClick);
    btn.appendChild(text);
    document.body.appendChild(btn);
};

function addAnotherPlayer(){
    count++;
    if(count == 8){
        removeElement("addAnotherPlayer");
    }
    nameOfPlayer(count);
};

//Phase 1 
function choosePlayers() {
    cleanHome();
    phaseSelectPlayer();
    nameOfPlayer(count); //"count" To change the css id
    createButton("addAnotherPlayer", "addAnotherPlayer()", "+");
    createButton("btnPlayerSelection", "toSelectType()", "->");
    document.getElementById("btnPlayerSelection").onclick = function() {
        toSelectType()
    }
};

function hideInputPlayers() {
    removeElement("player1");
    removeElement("player2");
    removeElement("player3");
    removeElement("player4");
    removeElement("player5");
    removeElement("player6");
    removeElement("player7");
    removeElement("player8");
}

//Phase 2
function addType(){

}

function toSelectType() {
    document.getElementById("phrase").textContent = "Selecciona los tipos de clase";
    createButton("farmer", "addType()", "Granjero");
    createButton("werewolf", "addType()", "Lobo");
    createButton("seer", "addType()", "Vidente");
    removeElement("addAnotherPlayer");
    hideInputPlayers()
    document.getElementById("farmer").onclick = function() {
        addType()
    }
}