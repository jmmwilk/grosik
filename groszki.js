var firstNumber;
var secondNumber;
var columns = [];
var kolory = ['green', 'blue', 'red']


function start() {
  document.getElementById('result').onkeydown = sprawdz;

  firstNumber = Math.round(Math.random() * 1000);
  secondNumber = Math.round(Math.random() * firstNumber);
  document.getElementById('result').value = ''
  document.getElementById('result').style.backgroundColor = 'white';

  document.getElementById('firstnumber').innerText = firstNumber;
  document.getElementById('secondnumber').innerText = secondNumber;
  
  var dolnaramka = document.getElementById('dolnaramka');

  dolnaramka.innerHTML = null;

  for (var count = 0; count < 3; count = count + 1) {
    var reszta= count % 3;
    
    var columnTitle = Math.pow(10, count)

    var kolumna = drawcolumn(kolory[reszta], columnTitle);
    
    dolnaramka.appendChild(kolumna);
  }

}


function sprawdz(event) {
  //console.log(event.keyCode);
  var odpowiedz = parseInt(document.getElementById('result').value)
  var roznica = firstNumber - secondNumber
  if (event.keyCode === 13 ) {
    console.log(odpowiedz)

    if (odpowiedz === roznica) {
      console.log('brawo jasiu')
      document.getElementById('result').style.backgroundColor = 'green'
      setTimeout( start, 2000 )
    } else {
      document.getElementById('result').style.backgroundColor = 'red'
    }
  }
}


function fillgroszek(event, color) {
  if (event.target.style.backgroundColor === color) {
    event.target.style.backgroundColor = 'white'
  } else {
    event.target.style.backgroundColor = color
  }
  
}


function drawcolumn(color, columnTitle) {
  //var tekst = '<div class="column">';



  var kolumna = document.createElement("div");
  kolumna.className = 'column';

  var titleBox = document.createElement('div')
  kolumna.appendChild(titleBox)
  var groszkiBox = document.createElement('div')
  groszkiBox.className = 'groszkiBox'
  kolumna.appendChild(groszkiBox)

  var title = document.createElement('div')
  title.innerText = columnTitle
  titleBox.appendChild(title)
  title.className = 'title'

  for (var licznik = 0; licznik < 20; licznik = licznik + 1) {
    var groszek = document.createElement("div");
    groszek.className = 'groszek';
    groszek.style.borderColor = color;
    groszek.onclick = function (event) {
      fillgroszek(event, color);
    };
    groszkiBox.appendChild(groszek);
  }

  return kolumna;
}
