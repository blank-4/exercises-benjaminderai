var heure = 23
if (heure < 10) {
    console.log("C'est le matin");
  } else if (heure < 20){
    console.log("C'est l'après-midi");
  } else {
    console.log("c'est le soir");
  }

for ( var i = 0 ; i < 100 ; i++ ) {
  console.log ("je compte jusqu'a " + i);
}

for ( var i = 0 ; i < 100 ; i = i + 2 ) {
  console.log ("je compte jusqu'a " + i);
}

for ( var i = 100 ; i > 0 ; i = i - 2 ) {
  console.log ("je compte jusqu'a " + i);
}

for ( var i = 100 ; i > 0 ; i = i - 2 ) {
  console.log ("je compte jusqu'a " + i);
}

var i = 0;
while (i <= 1000) {
  console.log(i);
  i++;
}

var position = "Belleville";

switch(position) {
  case "mairie des lilas":
     console.log ("tu est sur la ligne 11 ou la ligne 2");
      break;
  case <case2>:
     console.log ("tu est sur la ligne 11");
  case "mairie des lilas":
      console.log ("tu est sur la ligne 11 ou la ligne 2");
       break;
  case <pere lachaise>:
      console.log ("tu est sur la ligne 3 ou 2");
       break;
  default:
      console.log ("Je ne sais pas ou tu es.");
}