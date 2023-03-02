let question1 = {
    titre:  "Quel est l'age du capitaine?",
    reponse : [43, 44, 58],
    reponseCorrecte: 1,
    getBody : function() {
        let body = this.titre.toUpperCase() + "\n";
        for(let i = 0; i<this.reponse.length; i++){
            body += (i+1) + " : " + this.reponse[i] + "\n";
        } 
        return body;
    },
    addReponse : function(reponses){

        this.reponse.push(reponses);
    },
    isCorrecteReponse : function(answerUser){
            if(answerUser == this.reponseCorrecte){
                return true;
            }else{
                return false;
            }
S
    }
    
};
console.log(question1);
question1.addReponse(40);
console.log(question1);

let bodyQuestion1 = question1.getBody();
console.log(bodyQuestion1);




let answerUser = prompt(bodyQuestion1);
if(question1.isCorrecteReponse(answerUser)){
    console.log("Bravo vous avez gagné");
}else{
    console.log("c'est nul");
}