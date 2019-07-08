import { Injectable } from '@angular/core';
import {catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import { MatSnackBar } from '@angular/material';
import {AngularFirestore} from "@angular/fire/firestore";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {HostelModel} from "../models/hostel.model";

@Injectable({
  providedIn: 'root',
})
export class ErrorsManagerService {
  hostelForm: FormGroup;
  hostel: HostelModel;

  constructor(
    public snackBar: MatSnackBar,
    private afs: AngularFirestore,
    private router: Router,


  ) {
  }

  manageErrors(obs) {
    return obs.pipe(
      catchError((err) => {
        console.error(err);
        this.snackBar.open(err.message, '', {
          duration: 5000,
        });
        return of(null);
      }),
    );
  }


  getHostels$() {
    this.afs.collection('Vaniina_Team_Projet_1').doc('current').valueChanges();
  }
  getHostelById$(id: string) {
    this.afs.collection('Vaniina_Team_Projet_1').doc('current' + id).valueChanges()
      .pipe(
        tap((hostel: HostelModel) => this.hostel = hostel)
      )
      .subscribe();
  }
  createHostel$() {
    this.afs.collection('Vaniina_Team_Projet_1').add(this.hostelForm.value);
   }
  updateHostel$() {
    this.afs.collection('Vaniina_Team_Projet_1').doc('current').update(this.hostelForm.value);
  }
  deleteHostel$() {
    this.afs.collection('Vaniina_Team_Projet_1').doc('current').delete();
    this.router.navigateByUrl('/');
  }
}
