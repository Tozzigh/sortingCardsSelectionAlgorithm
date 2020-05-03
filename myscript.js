var arrayColors = ["red", "black"];
var arraySeeds = ["\u2660", "\u2663", "\u2665", "\u2666"];
var arrayNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

var arrayCardNumb = [];
var arrayObjects = [];
var arrayFin = [];

function drawCards() {
    var randColor = random(arrayColors);
    var randSeed = random(arraySeeds);
    var randNumb = random(arrayNumber);

    card = document.createElement("div");
    card.className = "cards";
    card.style.height = "100px";
    card.style.width = "50px";
    card.style.borderRadius = "10%";
    card.style.backgroundColor = "white";

    seed = document.createElement("div");
    seed.className = "seed";
    seed.style.fontSize = "30px";
    colore = document.createTextNode(randSeed);
    seed.appendChild(colore);
    seed.style.color = randColor;

    seed2 = document.createElement("div");
    seed2.className = "seed2";
    seed2.style.fontSize = "30px";
    colore2 = document.createTextNode(randSeed);
    seed2.appendChild(colore2);
    seed2.style.color = randColor;

    numb = document.createElement("div");
    numb.className = "numb";
    numb.style.fontSize = "30px";
    numero = document.createTextNode(randNumb);
    numb.appendChild(numero);
    numb.style.color = "black";

    card.appendChild(numb);
    card.appendChild(seed);
    card.appendChild(seed2);
    document.getElementById("cardsList").appendChild(card);

    if (randNumb === "J") {
        card.id = "11";
    } else if (randNumb === "Q") {
        card.id = "12";
    } else if (randNumb === "K") {
        card.id = "13";
    } else {
        card.id = randNumb;
    }

    while (arrayCardNumb.includes(card.id)) {
        card.id = (parseFloat(card.id) + 0.1).toString()
    }

    arrayCardNumb.push(card.id)
    arrayObjects.push(card)
    arrayFin.push(card)
}

function random(a) {
    return a[Math.floor(Math.random() * a.length)]
}

function cardNumb() {
    for (let x = 0; x < document.getElementById("original").value; x++) {
        drawCards();
    }
}

function sortNumb() {
    var count = 0;
    for (let x = 0; x < arrayCardNumb.length - 1; x++) {
        var min = x;
        for (let y = x + 1; y < arrayCardNumb.length; y++) {
            if (parseFloat(arrayCardNumb[y]) < parseFloat(arrayCardNumb[min])) {
                min = y;
            }
        }
        if (x != min) {
            var arrayHolder = [];
            swap(arrayCardNumb, min, x);
            swap(arrayObjects, min, x);
            for (let x in arrayObjects) {
                arrayHolder.push((arrayObjects[x]).cloneNode(true));
                sortLi = document.createElement("div");
                sortLi.id = "sortLi" + x.toString();
                sortLi.style.margin = "0px 0 30px 0px";
                document.getElementById("sortList").appendChild(sortLi);

            }
            indexSort = document.createTextNode(count.toString());
            document.getElementById("sortLi" + (count.toString())).appendChild(indexSort);
            for (let x in arrayHolder) {
                document.getElementById("sortLi" + (count.toString())).appendChild((arrayHolder[x]));

            }
            count = count + 1;
        }
    }
}

function swap(array, x, min) {
    var temp = array[x];
    array[x] = array[min];
    array[min] = temp;
    return array;
}