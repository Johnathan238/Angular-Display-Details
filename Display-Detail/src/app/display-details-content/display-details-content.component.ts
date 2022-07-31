import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details-content',
  templateUrl: './display-details-content.component.html',
  styleUrls: ['./display-details-content.component.css']
})
export class DisplayDetailsContentComponent implements OnInit {
  disContents = ['DROP', 'OP']
  disContentitems = ''

  displayContentDom() {
    this.disContents.push(this.disContentitems)
    console.log(this.disContents);
  }

  onUpdatedisContentitems(event: any) {
    this.disContentitems = event.target.value
  }

  blueBackground() {
    this.disContents.indexOf( this.disContentitems) > 5 ? 'blue' : 'red'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
