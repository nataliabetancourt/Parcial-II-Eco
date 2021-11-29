const firebaseConfig = {
    apiKey: "AIzaSyBTtSK9MsE2eByauKIvu528U6OvJvXe1Kk",
    authDomain: "eco-parcial-ii.firebaseapp.com",
    projectId: "eco-parcial-ii",
    storageBucket: "eco-parcial-ii.appspot.com",
    messagingSenderId: "955781056111",
    appId: "1:955781056111:web:75d717fe36c6947876ef9a"
};

export function getFirebaseConfig(){
    if (!firebaseConfig || !firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    } else {
        return firebaseConfig;
    }
}
