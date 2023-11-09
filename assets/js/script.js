///////////////// Team 1 /////////////
let team1table = document.getElementById("team1table");
let score1span = document.getElementById("score1");
let score1 = parseInt(document.getElementById("score1").innerHTML);
let team1inc = document.getElementById("team1inc");
let team1dec = document.getElementById("team1dec");
let team1name = document.getElementById("team1name");
let name1btn = document.getElementById("name1btn");

///////////////// Team 2 /////////////

let team2table = document.getElementById("team2table");
let score2span = document.getElementById("score2");
let score2 = parseInt(document.getElementById("score2").innerHTML);
let team2inc = document.getElementById("team2inc");
let team2dec = document.getElementById("team2dec");
let team2name = document.getElementById("team2name");
let name2btn = document.getElementById("name2btn");
//----------------- ------------TEAM 1-----------------------------//

team1inc.addEventListener("click", function () {
  score1 += 1;
  score1span.innerHTML = score1;
});

team1dec.addEventListener("click", function () {
  if (score1 > 0) {
    score1 -= 1;
    score1span.innerHTML = score1;
  }
});

if (typeof score1span == Number) {
}

function promptScore1() {
  score1 = prompt("1. Takımın Skorunu Giriniz. (TAM SAYI)");
  console.log("promptan dönen değer " + typeof score1);
  if (score1 != null && score1 != "" && score1 < 100 && score1 >= 0) {
    score1 = Number(score1);
    if (isNaN(score1)) {
      alert("Lütfen geçerli bir sayı giriniz!");
      score1 = 0;
      score1span.innerHTML = score1;
    } else {
      if (Number.isInteger(score1) == false) {
        alert("Ondalıklı Sayı Girdiniz!");
        score1 = 0;
        score1span.innerHTML = score1;
      } else {
        console.log("promptan sonra dönen değer " + typeof score1);
        score1span.innerHTML = score1;
      }
    }
  } else {
    alert('Lütfen 0 ile 99 Arasında "Tam Sayı" Giriniz!');
    score1 = 0;
    score1span.innerHTML = score1;
  }
  console.log(typeof score1);
}
team1table.addEventListener("click", function () {
  promptScore1();
});

name1btn.addEventListener("click", function () {
  function editName1() {
    name1btn = prompt("1. Takımın İsmini Giriniz");
    if (name1btn != null && name1btn != "") {
      team1name.innerText = name1btn;
    } else {
      alert("Lütfen Boş Bırakmayınız!");
    }
  }
  editName1();
});

//----------------- ------------TEAM 2-----------------------------//

team2inc.addEventListener("click", function () {
  score2 += 1;
  score2span.innerHTML = score2;
});

team2dec.addEventListener("click", function () {
  if (score2 > 0) {
    score2 -= 1;
    score2span.innerHTML = score2;
  }
});

if (typeof score2span == Number) {
}

function promptScore2() {
  score2 = prompt("2. Takımın Skorunu Giriniz. (TAM SAYI)");
  console.log("promptan dönen değer " + typeof score2);
  if (
    score2 != null &&
    score2 != "" &&
    score2 != " " &&
    score2 < 100 &&
    score2 >= 0
  ) {
    score2 = Number(score2);
    if (isNaN(score2)) {
      alert("Lütfen geçerli bir sayı giriniz!");
      score2 = 0;
      score2span.innerHTML = score2;
    } else {
      if (Number.isInteger(score2) == false) {
        alert("Ondalıklı Sayı Girdiniz!");
        score2 = 0;
        score2span.innerHTML = score2;
      } else {
        console.log("promptan sonra dönen değer " + typeof score2);
        score2span.innerHTML = score2;
      }
    }
  } else {
    alert('Lütfen 0 ile 99 Arasında "Tam Sayı" Giriniz!');
    score2 = 0;
    score2span.innerHTML = score2;
  }
  console.log(typeof score2);
}
team2table.addEventListener("click", function () {
  promptScore2();
});

name2btn.addEventListener("click", function () {
  function editName2() {
    name2btn = prompt("2. Takımın İsmini Giriniz");
    if (name2btn != null && name2btn != "") {
      team2name.innerText = name2btn;
    } else {
      alert("Lütfen Boş Bırakmayınız!");
    }
  }
  editName2();
});
