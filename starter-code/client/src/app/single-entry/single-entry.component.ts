import { Component, OnInit } from '@angular/core';
import { JournalService } from '../services/journal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  myJournal;
  constructor(public route: ActivatedRoute, public listJournals:JournalService) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.listJournals.getOneJournal(params['id']).subscribe(list => {
        this.myJournal = list;
      })
    })
  }

}
