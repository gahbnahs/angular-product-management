import { Component,  OnChanges, Input, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() rating:number=0;
  starWidth:number=0;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnChanges() {

    this.starWidth= this.rating * 15/5;
  }
  
  onClick(){
    this.ratingClicked.emit(` starcomponent was clicked!${this.rating}`)
  }
}
