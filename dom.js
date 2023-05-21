const div = document.createElement('div');
div.innerHTML = 'Some div';
const body = document.body;
//console.log(body);
div.classList.add('wrapper');
body.appendChild(div);

const header = document.createElement('h1');
header.textContent = 'Dom';
div.insertAdjacentElement('beforebegin', header);


const ul = `
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
`;

div.innerHTML = ul;

const img = document.createElement('img');
//console.log(img);
img.src = './car.jpg';
img.width = 240;
img.classList.add('super');
img.alt = 'Neon';
div.appendChild(img);

const elemHTML = `
    <div class='pDiv'>
        <p>параграф1</p>
        <p>параграф2</p>
    </div>
`;
const ullist = div.querySelector('ul');
ullist.insertAdjacentHTML('beforebegin', elemHTML) //HTML так как добавляем разметку, а не элемент
const pDiv = document.querySelector('.pDiv');
// console.log(pDiv.children);
pDiv.children[1].classList.add('text');

pDiv.children[0].remove(); //pDiv.firstElementChild.remove()


function generateAutoCard(brand, color, year) {
    const curDate = new Date();
    const curYear = curDate.getFullYear();
    return `
        <div class="autoCard">
            <h2>${brand.toUpperCase()} ${year}</h2>
            <p>Автомобиль ${brand} - ${year} года. Возраст авто - ${curYear - year} лет</p>
            <p>Цвет ${color}</p>
            <button type='button' class='btn'>Удалить</button>
        </div>
    `;
}

const carsList = [
    {brand: 'Tesla', year: 2015, color: 'красный'},
    {brand: 'BMW', year: 2019, color: 'синий'},
    {brand: 'Reno', year: 2020, color: 'серебряный'},
]

const carsDiv = document.createElement('div');
carsDiv.classList.add('autos');

const carsHTML = carsList.map((car) => {
    return generateAutoCard(car.brand, car.color, car.year);
}).join('');

carsDiv.innerHTML = carsHTML;
console.log(carsDiv);
div.insertAdjacentElement('beforebegin', carsDiv);

let buttons = document.querySelectorAll('.btn');
console.log(buttons)

function handleClick(e) {
    const currentButton = e.currentTarget;
    currentButton.closest('.autoCard').remove()
}
buttons.forEach(button => {
    button.addEventListener('click', handleClick)
})