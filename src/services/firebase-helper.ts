
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const transSnapSingle = <T>(
  snapshot: Observable<any>
): Observable<T> => {
  return snapshot.pipe(
    map((doc: any) => {
      const data = doc.payload.data();
      const id = doc.payload.id;
      if (data === undefined) {
        return null;
      }
      return { id, ...data };
    })
  );
};

export const transSnap = <T>(snapshot: Observable<any[]>): Observable<T[]> => {
  return snapshot.pipe(
    map((actions) => {
      return actions.map((a) => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    })
  );
};
