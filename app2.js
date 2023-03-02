function Quiz(){
    this.questions = [];
    this.nbrCorrect = 0;

    this.addQuestion = function(question){
        this.questions.push(question);
    },
    this.launch = function(){
        for(let i = 0; i< this.questions.length; i++){
            let reponse = prompt(this.questions[i].getBody());
            if(this.questions[i].isCorrecteReponse(reponse)){
                console.log("Gagné");
                this.nbrCorrect ++;
            }else{
                console.log("Nul");
            }
        }
        this.showresult();
    }
    this.showresult = function(){
        let msg = "Resultats: \n" + this.nbrCorrect + " sur " + this.questions.length + " Correctes";
        alert(msg);
    }

}

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
    }
    
};

let quiz = new Quiz();
let question1 = new Question("quel est l'age du capitaine?", [43,44,45], 1);
quiz.addQuestion(question1);

let question2 = new Question("Qui etait le premier president sdu tchad?", ["François","Feliw","Deby"], 1);
quiz.addQuestion(question2);

let question3 = new Question("Qu'estce qui est jaune et qui attend'?", ["canard","jonathan","pigeon"], 2);
quiz.addQuestion(question3);

console.log(quiz);
quiz.launch();
