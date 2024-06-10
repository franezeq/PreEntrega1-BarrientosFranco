// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcaOMHz9zpF6xdsrubaPejn-8F4ODDyko",
  authDomain: "ecommerce-meraki.firebaseapp.com",
  projectId: "ecommerce-meraki",
  storageBucket: "ecommerce-meraki.appspot.com",
  messagingSenderId: "901348186511",
  appId: "1:901348186511:web:1d052d8a060e45cefd93fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const data = getFirestore(app);

export async function getProds(){
    const response = await getDocs(collection(data, "products"));
    const listaProds=[];
    response.forEach((docu) => listaProds.push({id:docu.id, ...docu.data()}))

    return listaProds;
}
export async function getProdsByCategory(category) {
    const q = query(collection(data, "products"), where("categoria", "==", category));
    const querySnapshot = await getDocs(q);
    const listaProds = [];
    querySnapshot.forEach((docu) => {
      listaProds.push({ id: docu.id, ...docu.data() });
    });
    return listaProds;
  }
  
  
  export async function getProductById(id) {
    try {
      const docRef = doc(data, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      } else {
        console.log("El producto no existe");
        return null;
      }
    } catch (error) {
      console.error("Error al obtener el producto:", error);
      return null;
    }
  }