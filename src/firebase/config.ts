import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDpm0iSVGFvz3L-Cj6c_v1o3ySzlZmMBVw",
  authDomain: "fir-chat-app-5b540.firebaseapp.com",
  databaseURL: "https://fir-chat-app-5b540-default-rtdb.firebaseio.com",
  projectId: "fir-chat-app-5b540",
  storageBucket: "fir-chat-app-5b540.appspot.com",
  messagingSenderId: "455625934371",
  appId: "1:455625934371:web:caa3aba5a0b8480b9cd396",
};

export const app = initializeApp(firebaseConfig);
