/*document.addEventListener('DOMContentLoaded', () => {

	// card options
	const cardArray = [
		{
			name: 'fries',
			img: 'images/fries.png'
		},
		{
			name: 'fries',
			img: 'images/fries.png'
		},
		{
			name: 'cheeseburger',
			img: 'images/cheeseburger.png'
		},
		{
			name: 'cheeseburger',
			img: 'images/cheeseburger.png'
		},
		{
			name: 'hotdog',
			img: 'images/hotdog.png'
		},
		{
			name: 'hotdog',
			img: 'images/hotdog.png'
		},
		{
			name: 'ice-cream',
			img: 'images/ice-cream.png'
		},
		{
			name: 'ice-cream',
			img: 'images/ice-cream.png'
		},
		{
			name: 'milkshake',
			img: 'images/milkshake.png'
		},
		{
			name: 'milkshake',
			img: 'images/milkshake.png'
		},
		{
			name: 'pizza',
			img: 'images/pizza.png'
		},
		{
			name: 'pizza',
			img: 'images/pizza.png'
		},
	]

	cardArray.sort(() => Math.random() - 0.5)


	// Create a gameboard
	// Primero cogemos el grid
	const grid = document.querySelector('.grid');
	const resultDisplay = document.querySelector("#result")
	var cardsChosen = [];
	var cardsChosenId = [];
	var cardsWon = [];

	function createBoard(){
		for (let i = 0; i < cardArray.length; i++){
			var card = document.createElement('img');
			card.setAttribute('src', 'images/blank.png');
			card.setAttribute('data-id', i);
			card.addEventListener('click', flipCard);
			grid.appendChild(card);

		}
	}

	function checkForMatch(){
		var cards = document.querySelectorAll('img')
		const optionOneId = cardsChosenId[0]
		const optionTwoId = cardsChosenId[1]
		if (cardsChosen[0] === cardsChosen[1]){
			alert('Has encontrado una coincidencia!')
			cards[optionOneId].setAttribute('src', 'images/white.png')
			cards[optionTwoId].setAttribute('src', 'images/white.png')
			cardsWon.push(cardsChosen)
		} else {
			cards[optionOneId].setAttribute('src', 'images/blank.png')
			cards[optionTwoId].setAttribute('src', 'images/blank.png')
			alert('Lo siento, intentalo de nuevo')
		}

		cardsChosen = []
		cardsChosenId = []
		resultDisplay.textContent = cardsWon.length
		if (cardsWon.length === cardArray.length/2){
			resultDisplay.textContent = 'Felicidades! Has encontrado todas'
		}
	}

	function flipCard(){
		var cardId = this.getAttribute('data-id');
		cardsChosen.push(cardArray[cardId].name)
		cardsChosenId.push(cardId)
		this.setAttribute('src', cardArray[cardId].img)
		if (cardsChosen.length === 2){
			setTimeout(checkForMatch, 500)
		}
	}

	createBoard();
})*/

document.addEventListener('DOMContentLoaded', () => {

	var cardArray = [
		{
			name: 'fries',
			img: 'images/fries.png'
		},
		{
			name: 'fries',
			img: 'images/fries.png'
		},
		{
			name: 'cheeseburger',
			img: 'images/cheeseburger.png'
		},
		{
			name: 'cheeseburger',
			img: 'images/cheeseburger.png'
		},
		{
			name: 'hotdog',
			img: 'images/hotdog.png'
		},
		{
			name: 'hotdog',
			img: 'images/hotdog.png'
		},
		{
			name: 'ice-cream',
			img: 'images/ice-cream.png'
		},
		{
			name: 'ice-cream',
			img: 'images/ice-cream.png'
		},
		{
			name: 'milkshake',
			img: 'images/milkshake.png'
		},
		{
			name: 'milkshake',
			img: 'images/milkshake.png'
		},
		{
			name: 'pizza',
			img: 'images/pizza.png'
		},
		{
			name: 'pizza',
			img: 'images/pizza.png'
		}
	]

	// Randomizamos el array
	cardArray.sort(() => Math.random() - 0.5)


	var grid = document.getElementById('grid')
	var cardObjects = []
	var cardsChosen = []
	var cardsChosenId = []
	var puntuacion = 0
	var resultText = document.getElementById('result')
	resultText.textContent = puntuacion

	// Creamos el grid
	function createBoard() {
		for(let i=0; i < cardArray.length; i++){
			// Creamos un nuevo elemento
			var card = document.createElement('img')
			card.setAttribute('src', 'images/blank.png')
			card.setAttribute('data-id', i)
			card.addEventListener('click', flipCard)
			grid.appendChild(card)
			cardObjects.push(card)
		}
	}

		// Funcion que decide si una carta se puede girar o no
	function flipCard() {
		var cardId = this.getAttribute('data-id')
		if (!cardObjects[cardId].hasAttribute('data-completed')){

			cardsChosen.push(cardArray[cardId].name)
			cardsChosenId.push(cardId)
			//Volteamos la carta
			this.setAttribute('src', cardArray[cardId].img)
			if (cardsChosen.length == 2){
				// Comprobamos el exito
				setTimeout(testSuccess, 500)
			}
		}
	}

	function testSuccess() {
		// Comprobamos si las dos cartas tienen el mismo nombre
		if (cardsChosen[0] == cardsChosen[1]){
			window.alert("Felicidades!! Ya te queda menos")
			cardObjects[cardsChosenId[0]].setAttribute('data-completed', '')
			cardObjects[cardsChosenId[1]].setAttribute('data-completed', '')
		
			// Actualizamos la puntuación
			puntuacion++
			resultText.textContent = puntuacion
		} else {
			cardObjects[cardsChosenId[0]].setAttribute('src', 'images/blank.png')
			cardObjects[cardsChosenId[1]].setAttribute('src', 'images/blank.png')
			window.alert("Sigue intentándolo!!")
		}

	// Actualizamos las dos cartas seleccionadas
	cardsChosen = []
	cardsChosenId = []


	}

	createBoard();

})