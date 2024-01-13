import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAiZYIpz6lmjQfRJCwjVGRbBVs8VxKUPQM",
  authDomain: "food-app-6292c.firebaseapp.com",
  databaseURL: "https://food-app-6292c-default-rtdb.firebaseio.com",
  projectId: "food-app-6292c",
  storageBucket: "food-app-6292c.appspot.com",
  messagingSenderId: "556734196338",
  appId: "1:556734196338:web:b26094fb9f5814bac8b0eb",
  measurementId: "G-TBSGNDNVV1"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
