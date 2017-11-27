import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { CONTACTS } from './liste-contacts';

@Injectable()
export class ContactService {
  constructor() {}
    
  getContacts(): Contact[] {
    return this.Contacts;
  }
}
