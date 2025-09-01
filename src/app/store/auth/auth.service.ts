import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, user } from '@angular/fire/auth';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
    private auth: Auth = inject(Auth);
    private firestore: Firestore = inject(Firestore);

    // Login
    login(email: string, password: string) {
        return from(signInWithEmailAndPassword(this.auth, email, password));
    }

    // Register
    register(email: string, password:string){
        return from(createUserWithEmailAndPassword(this.auth, email, password))
    }

    // Logout
    logout(){
        return from(signOut(this.auth));
    }

    // Create User Collection
    createUserDocument(uid: string, email: string, name: string | null){
        const userDocRef = doc(this.firestore, `users/${uid}`);
        const userData = {uid, email, name};

        return from(setDoc(userDocRef, userData));
    }
}
