let nbQuestions = 3;

alert("Bienvenue sur ce question ! " + "\n" + nbQuestions + " Vous seront posées");
let reponseUser = prompt(`Question 1/3 
quel est l'age du capitaine? 
1: 45
2: 34
3: 55`);
let bonneReponse = 1;

console.log(reponseUser);
if(reponseUser == bonneReponse) {

    console.log("Bonne reponse");
}else{
    console.log('Tu es nul!');
}