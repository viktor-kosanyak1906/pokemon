const $btn = document.getElementById('btn-kick');
const $btn_two = document.getElementById('btn-kick_two');

const character = {
    name : 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar:document.getElementById('progressbar-enemy'),
}

$btn.addEventListener('click',function () {
    console.log('Kick');
    changeHP(random(10),character);
});
$btn_two.addEventListener('click',function () {
    console.log('Kick-enemy');
    changeHP(random(10),enemy);
});

function init() {
    console.log('Start Game!');
    renderHP(character);
    renderHP(enemy);
}
function renderHP(person) {
    renderHPLife(person);
    renderProgressbarHP(person);
}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(count,person) {
   const randomKick = Math.random();
   if (person.damageHP < count) {
       person.damageHP = 0;
       alert('Бедный ' + person.name +'Проиграл бой!')  
       $btn.disabled = true;

   } else if (randomKick > 0.5){    // Зделал так чтоб при нажатии ХП отнималось только у одного из них,тоесть один промазал один попал...
    enemy.damageHP -= count;
    console.log(randomKick);
   } else if (randomKick < 0.5) {
       character.damageHP -= count;
   } 
    renderHP(person);
}

function random(num) {
    return Math.ceil(Math.random()* num);
}
init();