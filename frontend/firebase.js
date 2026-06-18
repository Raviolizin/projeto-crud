// Importações do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";

// Configurações do projeto
const firebaseConfig = {
  apiKey: "AIzaSyAtGBv8Yz0sLfy8Am3LBMnvdmWM0qTjgZo",
  authDomain: "crud-produtos-87e77.firebaseapp.com",
  projectId: "crud-produtos-87e77",
  storageBucket: "crud-produtos-87e77.firebasestorage.app",
  messagingSenderId: "81908844160",
  appId: "1:81908844160:web:6ae9a0f89b1413291cc865",
  measurementId: "G-HNTT3WS6PV"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase conectado com sucesso!");