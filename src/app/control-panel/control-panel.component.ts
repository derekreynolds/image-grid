import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Subscription } from 'rxjs';
import { ImageConfig } from './image-config';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  imageConfig = {grid: {pixels: 20, opacity: 0.5, color: '#000000'}} as ImageConfig;

  constructor(public imageService: ImageService) {
  }

  ngOnInit(): void {

  }

  onChangePixels($event: Event) {
    this.imageConfig.grid.pixels = +($event.target as HTMLInputElement)?.value;
    this.imageService.next(this.imageConfig);  
  }

  onChangeOpacity($event: Event) {
    this.imageConfig.grid.opacity = +($event.target as HTMLInputElement)?.value;
    this.imageService.next(this.imageConfig); 
  }

  onChangeColor($event: Event) {
    this.imageConfig.grid.color = ($event.target as HTMLInputElement)?.value;
    this.imageService.next(this.imageConfig); 
  }

  onChangeImage($event: Event) {
    const files = ($event.target as HTMLInputElement)?.files;
    if(files && files?.length > 0) {
      let file = URL.createObjectURL(files[0]);
      let img = new Image(); 

      img.src = file;
      const self = this;
      img.onload = function (event) {
        let  loadedImage:any = event.currentTarget;
        let width = loadedImage.width;
        let height = loadedImage.height;

        self.imageConfig.fileName = file;
        self.imageConfig.width = width;
        self.imageConfig.height = height;
        self.imageService.next(self.imageConfig);  
      } 
      
     
    }
  }

}
