function refreshCard(card,type) {
    const targetPara = card.parentElement.parentElement.getElementsByTagName('p')[0];
    const text = getRandomText(type);
    targetPara.innerHTML = text;
};

function deleteCard(card) {
    const targetCard = card.parentElement.parentElement;
    targetCard.parentElement.removeChild(targetCard);
};

function addCard(list,type) {
    const clone = document.importNode(document.getElementById(`card-${type}-template`).content,true);
    //console.log(list, list.parentElement)
    let card_list = list.parentElement.getElementsByClassName('card-list')[0];
    card_list.appendChild(clone);
    let card = card_list.children[card_list.children.length-1].getElementsByTagName('button')[0];
    refreshCard(card,type);
};

function getRandomText(type) {
    const list = document.getElementById(type).getElementsByTagName('p');
    let selected = list[Math.floor(Math.random()*list.length)];
    //console.log(selected,selected.innerHTML);
    return selected.innerHTML;
};


let col = document.getElementsByClassName('card');
for (let i = 0; i < col.length; i++) {
    let card = col[i];
    card.getElementsByTagName('button')[0].onclick();
};
col = document.getElementsByTagName('button');
let buttons = [];
for (let i = 0; i < col.length; i++) {
    let button = col[i];
    if (button.innerHTML == 'add') {
        buttons.push(button);
    };
};
buttons.forEach(button => {button.onclick();button.onclick();})
