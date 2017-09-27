import { Component, OnInit, OnChanges, Input, ElementRef, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit, OnChanges {

  @Input() select: String;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: Http, private _notificationsService: NotificationsService ) {
    this.createForm();
   }

  ngOnInit() {
    this.contactForm.controls.plan.setValue('');
  }

  ngOnChanges() {
    this.contactForm.get('plan').setValue(this.select);
  }

  createForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.pattern('[^ @]*@[^ @]*')])],
      phone: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      plan: ['', Validators.required],
      extras: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  submit(): void {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    const headerObj = {
      headers: new Headers(headerDict),
    };
    this.http.post('http://ideenegocios.com.ar:3000/efecto-web', JSON.stringify(this.contactForm.value), headerObj)
    .subscribe((res: Response) => {
      this._notificationsService.success(
        'Listo!',
        'Mensaje enviado con éxito',
        {
            timeOut: 5000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: false,
            maxLength: 25
        }
      );
    });
  }
}
