import { inject, Injectable } from "@angular/core";
import { DocumentReference, Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from "@angular/fire/firestore";
import { from, Observable } from "rxjs";
import { Task } from "./tasks.model";


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private firestore: Firestore = inject(Firestore);
  private tasksCollection = collection(this.firestore, 'tasks');

  getTasks(): Observable<Task[]> {
    return collectionData(this.tasksCollection, { idField: 'id' }) as Observable<Task[]>;
  }

  // add
  addTask(taskdata: Omit<Task, 'id'>): Observable<DocumentReference> {
    return from(addDoc(this.tasksCollection, taskdata))
  }

  // update
  updateTask(taskUpdate: Partial<Task> & {id: string }): Observable<void>{
    const taskDocRef = doc(this.firestore, `tasks/${taskUpdate.id}`);
    return from(updateDoc(taskDocRef, taskUpdate));
  }

  // delete
  deleteTask(taskId: string): Observable<void>{
    const taskDocRef = doc(this.firestore, `tasks/${taskId}`);
    return from(deleteDoc(taskDocRef));
  }
}