import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBQ-O3kvbokm_dlaMbPUTG56M5YEhuGq34",
    authDomain: "bd-news-c5c51.firebaseapp.com",
    projectId: "bd-news-c5c51",
    storageBucket: "bd-news-c5c51.appspot.com",
    messagingSenderId: "465944831572",
    appId: "1:465944831572:web:edc460157d3b3ee6ef6fc1"
};

const app = initializeApp(firebaseConfig);

export default app;