import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

import { getFirebaseConfig } from './firebase-config';
import { bookCard } from './book-card';

// Inicializar firebase
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig);

//Page elements
const bookSection = document.getElementById("bookSection");

function getBooks(){
    //Get database
    const db = getDatabase();
    const bookRef = ref(db, 'books');

    //Get updates from database info
    onValue(bookRef, (snapshot) => {
        const data = snapshot.val();
        bookCards(data);
    });
}

function bookCards(data){
    if(data){
        bookSection.innerHTML = "";
        Object.keys(data).forEach((k, i) => {
            const cards = new bookCard(data[k]);
            bookSection.appendChild(cards.render());
        });
    }
}

getBooks();
