import { Component, OnInit } from '@angular/core';
import ContactUsModel from 'src/app/models/contact-us.model';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

    public contactUs = new ContactUsModel();


    constructor() { }

    ngOnInit(): void {
    }

    public send() {
        console.log(this.contactUs);
    }


}
