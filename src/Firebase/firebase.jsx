import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID,
// };
const firebaseConfig = {
  apiKey: 'AIzaSyCNaAJzlUVZO6qzhkPBzQifQWNh1yH7LCA',
  authDomain: 'authecom-a17f0.firebaseapp.com',
  projectId: 'authecom-a17f0',
  storageBucket: 'authecom-a17f0.appspot.com',
  messagingSenderId: '819778217663',
  appId: '1:819778217663:web:c3f1f29d60b6276838480a',
  measurementId: 'G-QM4NZ659YC',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)