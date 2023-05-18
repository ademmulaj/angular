import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-butoni',
  templateUrl: './butoni.component.html',
  styleUrls: ['./butoni.component.css']
})
export class ButoniComponent {
//  @Input() teksti: string;
  @Input() color!: string;
  @Input() teksti! : string;
  @Output() btnClick = new EventEmitter();


  onClick(){
    this.btnClick.emit();
  }
}
 