let question = [`
quel est l'age du capitaine? 
1: 45
2: 34
3: 55`,

` 
Qui etait le premier president du tchad? 
1: François T
2: Idriss D
3: Felix M`,

`
Quelle est la superficie du tchad? 
1: 1.284.000
2: 1.100.000
3: 55.000`]

let compteurBonneReponse = 0;
let bonneReponse = [1, 1, 1];

alert("Bienvenue sur ce question ! " + "\n" + question.length + " Vous seront posées");
for(let i =0; i<question.length; i=i+1){
    let intituleQuestion = "Question " + (i+1) + "/" + question.length + "\n";
    let reponseUser = prompt(intituleQuestion + question[i]);
    
   

    console.log(reponseUser);
    if(reponseUser == bonneReponse[i]) {

        console.log("Bonne reponse");
        compteurBonneReponse= compteurBonneReponse + 1
    }else{
        console.log('Tu es nul!');
    }
}
alert(compteurBonneReponse + " Reponses sur " + question.length + " sont correctes");