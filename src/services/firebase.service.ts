import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  DocumentReference,
} from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { FirebaseCollection } from '../enum/firebase';
import { transSnap, transSnapSingle } from './firebase-helper';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  public setUserIdSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);

  constructor(
    private readonly afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  /**
   * @param collectionName Name of the collection from FirebaseCollection enum
   * @returns Observable of all records of selcted collection
   */
  public getAll<T>(collectionName: FirebaseCollection): Observable<T[]> {
    return transSnap(this.afs.collection<T>(collectionName).snapshotChanges());
  }

  /**
   * @param collectionName Name of the collection from FirebaseCollection enum
   * @param id Document id that you want get
   * @returns Observable of single record of selected collection based on provided id
   */
  public getOne<T>(
    collectionName: FirebaseCollection,
    id: string
  ): Observable<T> {
    return transSnapSingle(
      this.afs.collection<T>(collectionName).doc(id).snapshotChanges()
    );
  }

  /**
   * @param collectionName Name of the collection from FirebaseCollection enum
   * @param id Document id that you want get
   * @returns Observable of single record of selected collection based on provided id
   */
  public getOneWithSub<T, K>(
    collectionName: FirebaseCollection,
    subCollectionName: FirebaseCollection,
    id: string,
    subId: string
  ): Observable<K> {
    return transSnapSingle(
      this.afs
        .collection<T>(collectionName)
        .doc(id)
        .collection<K>(subCollectionName)
        .doc(subId)
        .snapshotChanges()
    );
  }

  /**
   * @param collectionName Name of the collection from FirebaseCollection enum
   * @param data Object that you want to create
   * @returns Created document reference promise
   */
  public add<T>(
    collectionName: FirebaseCollection,
    data: T
  ): Promise<DocumentReference<T>> {
    return this.afs.collection<T>(collectionName).add(data);
  }

  /**
   * @param collectionName Name of the collection from FirebaseCollection enum
   * @param id Document id that you want update
   * @param data Object that you want to update
   * @returns Void promise
   */
  public update<T>(
    collectionName: FirebaseCollection,
    id: string,
    data: T
  ): Promise<void> {
    return this.afs.collection<T>(collectionName).doc(id).update(data);
  }

  /**
   * @param collectionName Name of the collection from FirebaseCollection enum
   * @param id Document id that you want update
   * @param data Object that you want to update
   * @returns Void promise
   */
  public set<T>(
    collectionName: FirebaseCollection,
    id: string,
    data: T
  ): Promise<void> {
    return this.afs.collection<T>(collectionName).doc(id).set(data);
  }

  /**
   * @param collectionName Name of the collection from FirebaseCollection enum
   * @param subCollectionName Name of the sub collection from FirebaseCollection enum
   * @param id Document id that you want update
   * @param subId Sub Document id that you want update
   * @param data Object that you want to update
   * @returns Void promise
   */
  public setSub<T, K>(
    collectionName: FirebaseCollection,
    subCollectionName: FirebaseCollection,
    id: string,
    subId: string,
    data: K
  ): Promise<void> {
    return this.afs
      .collection<T>(collectionName)
      .doc(id)
      .collection<K>(subCollectionName)
      .doc(subId)
      .set(data);
  }

  /**
   * @param collectionName Name of the collection from FirebaseCollection enum
   * @param id Document id that you want delete
   * @returns Void promise
   */
  public remove<T>(
    collectionName: FirebaseCollection,
    id: string
  ): Promise<void> {
    console.log('remove', collectionName);
    return this.afs.collection<T>(collectionName).doc(id).delete();
  }
}
