import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-image-view-object',
  templateUrl: './image-view-object.component.html',
  styleUrls: ['./image-view-object.component.css']
})
export class ImageViewObjectComponent implements OnInit {

  @Input() imgURL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYh8ihrvMk1-x1XzNRvfvW85P0SV0IEoQx5mWSw1q3_AlO5g1z';
  constructor() { }

  ngOnInit() {
  }

}
