import { Injectable } from '@angular/core';

import { Observer, Subject, Subscription } from 'rxjs';

import { ImageConfig } from '../control-panel/image-config';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  observable: Subject<ImageConfig> = new Subject<ImageConfig>();

  constructor() { }

  next(config: ImageConfig) {
    this.observable.next(config);
  }

  subscribe(observer: any): Subscription {
    return this.observable.subscribe(observer);
  }

}
