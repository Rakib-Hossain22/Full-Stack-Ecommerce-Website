import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCYOqB9o0WNxTAJ70y-TmtkRQilRqNVa7k",
  authDomain: "shop-ee18e.firebaseapp.com",
  projectId: "shop-ee18e",
  storageBucket: "shop-ee18e.appspot.com",
  messagingSenderId: "1056117964762",
  appId: "1:1056117964762:web:b0a8c6fc9822a3069c4ae3"
};

const app = initializeApp(firebaseConfig);

export default app;