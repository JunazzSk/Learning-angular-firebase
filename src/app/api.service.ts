import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc,  } from '@angular/fire/firestore';
import { __values } from 'tslib';

@Injectable({ providedIn:'root',
})
export class ApiService {
 


  firestore = inject(Firestore);

  constructor(){}
  public async getproducts() {
    const colRef= collection(this.firestore, 'products');
    const snap= await getDocs(colRef);
    return snap.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  }
  public async getProduct(id) {
    const colRef= collection(this.firestore, 'products');
    const docRef = doc(colRef,id)
    const snap= await getDoc(docRef);
    return {
      ...snap.data(),
      id: snap.id,
    };
  }
  public async addproduct(data){
const colRef= collection(this.firestore,'products');
return await addDoc(colRef,data);
  }

 async updateProduct(value, pid) {
    
const colRef= collection(this.firestore,'products');
const docRef = doc(colRef,pid)
return await updateDoc(docRef,value);
  }
public async deleteproduct(pid) 
 {
  return await deleteDoc(doc(collection(this.firestore, 'products'), pid));
  }
}
