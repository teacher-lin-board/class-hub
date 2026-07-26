// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAT9VXm8gf5Pn4A1iu3xXF6X8Ve9NYlUAk",
  authDomain: "teacherboard-9224d.firebaseapp.com",
  projectId: "teacherboard-9224d",
  storageBucket: "teacherboard-9224d.firebasestorage.app",
  messagingSenderId: "801036213120",
  appId: "1:801036213120:web:2077de68b0a74395023f65"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);