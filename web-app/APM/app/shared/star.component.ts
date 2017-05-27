import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})

export class StarComponent implements OnChanges {
    //rating is defined by an external source when it has @Input() decorator
    @Input() rating: number;
    starWidth: number;
    //a method is "exposed" when it has the @Output() decorator"
    //only way to pass data out of file
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();
    
    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }
    
    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}