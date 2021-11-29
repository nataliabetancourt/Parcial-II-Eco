import { getDatabase, ref, push, onValue, set, update } from 'firebase/database';

export class bookCard {
    constructor(book) {
        this.book = book;
    }

    render(){
        //Box where the elements are
        let card = document.createElement("div");
        card.className = "cards";

        //Book title
        let title = document.createElement("p");
        title.className = "bookTitle";
        title.innerHTML = this.book.title;

        //Book average
        let average = document.createElement("p");
        average.className = "average";
        average.innerHTML = this.book.average;

        //Input to put in score
        let addAverage = document.createElement("input");
        addAverage.className = "averageInput";
        addAverage.placeholder = "Ingresa el puntaje"

        //Button to add score
        let addBtn = document.createElement("button");
        addBtn.className = "addBtn";
        addBtn.innerHTML = "Agregar";

        //Functions for when the button is pressed
        //let sum = 0;
        addBtn.addEventListener("click", (e, ev)=>{
            if(parseFloat(addAverage.value) >= 0 && parseFloat(addAverage.value) <= 5){
                //Create score object
                const score = {
                    score: parseFloat(addAverage.value)
                }

                //Add score to database
                const db = getDatabase();
                const newScoreRef = push(ref(db, 'books/' + this.book.id + '/scores'));
                set(newScoreRef, score);

                //Calculate average
                this.getAverage(average);
                
            } else {
                alert("Solo ingresa valores de 0,0 a 5,0");
            }
        })

        card.appendChild(title);
        card.appendChild(average);
        card.appendChild(addAverage);
        card.appendChild(addBtn);

        return card;
    }

    getAverage(average){
        let sum = 0;
        const db = getDatabase();
        const scoreRef = ref(db, 'books/' + this.book.id + '/scores');
            onValue(scoreRef, (snapshot)=>{
                const scoreData = snapshot.val();
                const total = Object.keys(scoreData).length;
                    
                //Go through data and add all scores for that book
                Object.keys(scoreData).forEach((k, i)=>{
                    sum += scoreData[k].score;
                });

                //Create average and show changes
                let newAverage = sum/total;
                let bookAverage = newAverage.toFixed(1);
                average.innerHTML = bookAverage;
                const bookRef = ref(db, 'books/' + this.book.id);
                update(bookRef, {"average": bookAverage});
            });
    }

}