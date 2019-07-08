import { Component, OnInit } from '@angular/core';
import {HostelModel} from "../models/hostel.model";
import {FormGroup} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/firestore";
import {ErrorsManagerService} from "../services/errors-manager.service";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  hostel: HostelModel;
  hostelForm: FormGroup;

  constructor(
    private afs: AngularFirestore,
    private errorsManagerService: ErrorsManagerService,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.errorsManagerService.getHostels$()
  }
}
