import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { CONTACTS } from '../liste-contacts';



@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss']
})
export class ContactComponent implements OnInit {
  
contacts = CONTACTS;
selectedContact: Contact;
constructor() { }

ngOnInit() {
  }

onSelect(contact: Contact): void {
  this.selectedContact = contact;
}

}


