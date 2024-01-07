import firebase_app from "../config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)

export default  function addData(colllection, id, data) {
    let result = null;
    let error = null;
    console.log(db);
    try {
        setDoc(doc(db, colllection, id), data, {
            merge: true,
        }).then(output => result = output)
    } catch (e) {
        error = e;
    }

    return { result, error };
}