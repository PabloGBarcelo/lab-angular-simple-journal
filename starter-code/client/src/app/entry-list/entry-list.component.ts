import { Component, OnInit } from '@angular/core';
import { JournalService } from '../services/journal.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  constructor(public listJournals:JournalService) { }
  myJournals;
  ngOnInit() {
    this.listJournals.getAllJournals().subscribe( list =>{
      this.myJournals = list;
    });
  }

}
