import firebase_app from "../config";
import { getFirestore, doc, getDoc,collection,getDocs } from "firebase/firestore";

const db = getFirestore(firebase_app)
export async function getDocument(collection, id) {
    let docRef = doc(db, collection, id);

    let result = null;
    let error = null;

    try {
        result = await getDoc(docRef);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function getAllDocuments(store) {
    const Posts = await getDocs(collection(db, store));
    let response = []
    Posts.forEach(doc =>{
        response.push(doc.data());
    })
    return response;

}