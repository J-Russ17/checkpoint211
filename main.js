let newDeck = () => {
    return fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(response => response.json())
        .then(data => {
            return data.deck_id;
        });
}

newDeck()
    .then(deck => {
        drawCard(deck);
    });

    let drawCard = (deck) => {
        fetch(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=52`)
            .then(res => res.json())
            .then(data => {
                const arrOfCards = data.cards
                // console.log(arrOfCards);
            });
    }
      

function splitNumber(number) {
    if (number >= 10 && number <= 99) {
        let firstDigit = Math.floor(number / 10);
        let secondDigit = number % 10;

        if (firstDigit === 1) {
            firstDigit = 'A';
        }

        if (secondDigit === 1) {
            secondDigit = 'C';
        } else if (secondDigit === 2) {
            secondDigit = 'H';
        } else if (secondDigit === 3) {
            secondDigit = 'S';
        } else {
            secondDigit = 'D';
        }

        return { firstDigit, secondDigit };
    } else {
        return splitNumberby3(number);
    }
}

function splitNumberby3(number) {
    const numberStr = number.toString();

    if (numberStr.length !== 3) {
        console.log("Please provide a 3-digit number.");
        return;
    }

    let part1 = Number(numberStr.slice(0, 2)); 
    let part2 = Number(numberStr.charAt(2));
    
    if(part1 === 10){
        part1 = '0'
    } else if(part1 === 11){
        part1 = 'J'
    } else if(part1 === 12){
        part1 = 'Q'
    } else {
        part1 = 'K'
    }

    if (part2 === 1) {
        part2 = 'C';
    } else if (part2 === 2) {
        part2 = 'H';
    } else if (part2 === 3) {
        part2 = 'S';
    } else {
        part2 = 'D';
    }

    console.log("Your card is: " + (part1 + part2))
    return part1 + part2
}


function splitAndLog() {
    let userNumber = document.getElementById('solution').value;

    if (userNumber) {

        userNumber = parseInt(userNumber);

        userNumber -= 15;

        if (userNumber >= 10 && userNumber <= 99) {
            const { firstDigit, secondDigit } = splitNumber(userNumber);
            let cardCode = firstDigit + secondDigit;
            console.log("Your card is: " + cardCode);
        } else if (userNumber >= 100 && userNumber <= 999) {
            splitNumberby3(userNumber);
        } else {
            console.log("Please enter a valid two-digit or three-digit number.");
        }
    } else {
        console.log("Please enter a valid number.");
    }
}