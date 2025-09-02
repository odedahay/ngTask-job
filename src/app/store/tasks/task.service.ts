import { inject, Injectable } from "@angular/core";
import { Firestore, collection, collectionData } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Task } from "./tasks.model";


@Injectable({
  providedIn: 'root'
})
export class TaskService{
    private firestore: Firestore = inject(Firestore);

    getTasks() : Observable<Task[]>{
        const tasksCollection = collection(this.firestore, 'tasks');
        return collectionData(tasksCollection, {idField: 'id'}) as Observable<Task[]>;
    }
}