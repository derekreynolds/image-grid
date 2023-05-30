import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Image Grid';

  pixels: number = 20;

  opacity: number = 0.5;

  color: string = '#000000';

}
