import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";

export class LABM {
    
    constructor (
        private db : AngularFirestoreCollection
    ) {}

    alta ( document : any ) {
        return this.db.add({...document})
    }

    baja ( id : any ) {
        return this.db.doc( id ).delete()
    } 

    modificacion ( id : any, document : any ) {
        return this.db.doc( id ).update( {...document} )
    }

    leer () {
        return this.db.get()
    }

    leerAutomaticamente () {
        return this.db.snapshotChanges()
    }

}