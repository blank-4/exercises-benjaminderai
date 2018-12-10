function exercice2(){
        var exemple ={;
            firstname : "Benjamin"
    };
    console.log(exemple.firstname);
    exemple.firstname = "Chris";
    console.log(exemple.firstname);
    exemple.astname = "Ahona"
    console.log(exemple);
    deuxieme(exemple);
}

function deuxieme (obj) {
    for (var i in obj){
        console.log(i, obj[i]);
    }
}
exercice2();