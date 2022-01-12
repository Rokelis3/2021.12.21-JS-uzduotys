//1a
console.log('Tamsiai žaliai nuspalvinti h1 tagą;');

const h1 = document.querySelector('h1');
h1.style.color = '#004D00';

//1b
console.log('Tagui i pridėti klasę small;');

const i = document.querySelector('i');
i.classList.add('small');

//1c
console.log('Iš tago h1 pašalinti klasę main;');

h1.classList.remove('main');

//1d
console.log('Tik tam h2 tagui, kuris iškart eina po h1 tago, pridėti klasę first ir pašalinti klasę main;');

const pirmasH2 = document.querySelector('h1+h2')

pirmasH2.classList.add('first');
pirmasH2.classList.remove('main');

//1e
console.log('Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai');

const spanPirmas = document.querySelector('h2 span:first-child');

spanPirmas.style.fontSize = '10px';
spanPirmas.style.color = 'grey';

//2a
console.log('Suskaičiuoti kiek yra h2 tagų;');

console.log(document.getElementsByTagName('h2').length);

//2b
console.log('Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first');

console.log(document.querySelectorAll('h2:not(.first)').length);

//2c
console.log('Visus h2 tagus nuspalvinti šviesiai mėlynai');

document.querySelectorAll('h2').forEach(elementas => {elementas.style.color = 'aqua'});

//2d
console.log('Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;');

const h2KurieYraDive = document.querySelectorAll('div.prices > h2');

h2KurieYraDive.forEach(element => {
    element.classList.add('price-tag');
});

//2e
console.log('Pabraukti visus tagus su klase new;');

document.querySelectorAll('.new').forEach(e => {
    e.style.textDecoration = 'underline';
});

//2f
console.log('Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai)');

console.log(document.querySelectorAll('ul').length);

//2g
console.log('Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;');

document.querySelectorAll('ul').forEach(e => {
    e.style.border = "1px solid black";
});

//2h
console.log('Suskaičiuoti kiek yra naujų gyvūnų (su klase new);');

console.log(document.querySelectorAll('.new').length);

//2i
console.log('Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;');

console.log(document.querySelectorAll('#zirafos li.new').length);
console.log(document.querySelectorAll('#plesrunai li.new').length);
console.log(document.querySelectorAll('#gyvates li.new').length);
console.log(document.querySelectorAll('#zoliaedziai li.new').length);


//3a
console.log('Padaryti tai ką liepia mygtukai Header1 sekcijoje;');

document.querySelector('#h1-color').addEventListener('click', () => {
    document.querySelector('h1').style.color = '#00FF00';

});
document.querySelector('#h1-font').addEventListener('click', () => {
    document.querySelector('h1').style.fontSize = '10px';
});

//3b
console.log('Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;');

i.addEventListener('click', () => {
    i.style.fontWeight = 'bold';
});

//3c
console.log('Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;');

const kainos = document.querySelectorAll('.prices h2');

kainos.forEach(h2 => {
h2.addEventListener('click', () => {
    if( h2.style.backgroundColor != 'grey'){
        h2.style.backgroundColor = 'grey';
    }
    else{
        h2.style.backgroundColor = 'white';
    };
})
});

//3d
console.log('Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;');

document.querySelector('#contacts').addEventListener('click', () => {
    document.querySelector('#contacts').style.color = 'orange';
});

//3e
console.log('Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;');

document.querySelector('#contacts u').addEventListener('click', () => {
    document.querySelector('#contacts').style.fontSize = '20px';
});

//3f
console.log('Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element');

document.querySelector('#contacts b').addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelector('#contacts').style.color = null;
    document.querySelector('#contacts').style.fontSize = null;
});

//3g
console.log('Padaryti tai ką liepia mygtukai Header2 sekcijoje;');

document.querySelector('#h1-color-back').addEventListener('click', (e) => {
    e.stopPropagation()
    document.querySelector('h1').style.color = '#004D00';
});
document.querySelector('#h1-font-back').addEventListener('click', (e) => {
    e.stopPropagation()
    document.querySelector('h1').style.fontSize = null;
});

//4a
console.log('Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event');

document.querySelectorAll('li.new').forEach(naujas => {
    naujas.addEventListener('dblclick', () => {
    naujas.style.color = 'red';
    })
});

//4b
console.log('Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.');

document.querySelectorAll('li~li').forEach(e =>{
    e.addEventListener('click', () => {
    e.style.fontSize = '130%';
    })
});

//4c
console.log('Padaryti, kad paspaudus ant “PATINKA”, atitinkamai (tėvinei) sekcijai būtų priskirta klasė like;');

const buttonas = document.querySelectorAll('.like-button');

buttonas.forEach(e => {
    e.addEventListener('click', () => {
    // e.parentNode.classList.add('like')
    e.closest('ul').classList.add('like')
    })
});

//5a
console.log('Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;');

let naujaKaina = document.createElement('h2');
let kainosDiv = document.querySelector('.prices');

naujaKaina.innerHTML = 'Senjorai tik: 1.99 eur';

kainosDiv.insertBefore(naujaKaina, kainosDiv.children[0]);

//5b
console.log('Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;');

let naujaKaina2 = document.createElement('h2');
let kainosDiv2 = document.querySelector('.prices');

naujaKaina2.innerHTML = 'Senjorų grupė iki 10: tik 5.99 eur';

kainosDiv2.appendChild(naujaKaina2);

naujaKaina2.classList.add('new');

naujaKaina2.addEventListener('click', () =>{
    naujaKaina2.style.color = 'green';
});

//5c
console.log('Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like');

const ulai = document.querySelectorAll('ul');

for(let i = 0; i < ulai.length; i++){
    const nepatinka = document.createElement('li');
    nepatinka.innerHTML = 'NEPATINKA';
    nepatinka.classList.add('nepatinka');
    ulai[i].insertBefore(nepatinka, ulai[i].children[1]);
};

const visiNepatinka = document.querySelectorAll('.nepatinka');

visiNepatinka.forEach(e => {
    e.addEventListener('click', () => {
    e.closest('ul').classList.remove('like');
    })
});


//5d
console.log('Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2. Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. Mygtukai turi daryti tai kas ant jų parašyta');
//Klonuoju turimą fieldsetą.
const kopija = document.querySelector('fieldset');

const body = document.querySelector('body');

body.appendChild(kopija.cloneNode(true));

//Susidedu į reikiamą vietą ir pakeičiu mygtukų tekstus.
const header3 = document.querySelector('fieldset:last-child');

body.insertBefore(header3, body.children[8]);

header3.id = 'treciasHeaderis';

document.querySelector('#treciasHeaderis legend').innerHTML = 'HEADER 3';

const pirmasMygtukas = document.querySelector('#treciasHeaderis button');

pirmasMygtukas.innerHTML = 'Pabraukti H1 tagą';

const antrasMygtukas = document.querySelector('#treciasHeaderis button+button');

antrasMygtukas.innerHTML = 'Nepabraukti H1 tagą';


pirmasMygtukas.addEventListener('click', (e) =>{
    e.stopPropagation()
    document.querySelector('h1').style.textDecoration = "underline"
});

antrasMygtukas.addEventListener('click', (e) =>{
    e.stopPropagation()
    document.querySelector('h1').style.textDecoration = null;
});




