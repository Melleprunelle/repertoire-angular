import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.scss']
})
export class ContactComponent implements OnInit {
  
contacts: Contact[];
selectedContact: Contact;

constructor(private contactService: ContactService) { 
}
    
getServices(): void {
this.contacts = this.contactService.getContacts();
}

ngOnInit() {
    this.getContacts();
}
  

onSelect(contact: Contact): void {
  this.selectedContact = contact;
}

}


