function Question(titre, reponse, reponseCorrecte) {
    this.titre = titre;
    this.reponse = reponse;
    this.reponseCorrecte = reponseCorrecte;
    this.getBody = function() {1
        let body = this.titre.toUpperCase() + "\n";
        for(let i = 0; i<this.reponse.length; i++){
            body += (i+1) + " : " + this.reponse[i] + "\n";
        } 
        return body;
    },
    this.addReponse = function(reponses){

        this.reponse.push(reponses);
    },
    this.isCorrecteReponse = function(answerUser){
            if(answerUser == this.reponseCorrecte){
                return true;
            }else{
                return false;
            }
S
    }
    
};

let question1 = new Question("quel est l'age du capitaine?", [43,44,45], 1)
console.log(question1);
question1.addReponse(40);
console.log(question1) ;

let bodyQuestion1 = question1.getBody();
console.log(bodyQuestion1);

let answerUser = prompt(bodyQuestion1);
if(question1.isCorrecteReponse(answerUser)){
    console.log("Bravo vous avez gagné");
}else{
    console.log("c'est nul");
}

let question2 = new Question("Qui etait le premier president sdu tchad?", ["François","Feliw","Deby"], 1)
answerUser = prompt(question2.getBody());
if(question2.isCorrecteReponse(answerUser)){
    console.log("Bravo vous avez gagné");
}else{
    console.log("c'est nul");
}

