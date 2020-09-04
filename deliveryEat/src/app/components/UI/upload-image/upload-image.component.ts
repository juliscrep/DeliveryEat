import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent {

  url;
  @Output() fileSeleccionado: EventEmitter< File >;

  constructor() {
    this.fileSeleccionado = new EventEmitter();
   }

  imageUploadEvent(evt: any) {
    if (!evt.target) { return; }
    if (!evt.target.files) { return; }
    if (evt.target.files.length !== 1) { return; }

    const file = evt.target.files[0];

    if(!this.checkMaxSize(file)) { return; }

    this.fileSeleccionado.emit(file);

    this.showImage(file);
  }

  checkMaxSize( file ) {
    const sizeInMegas = file.size / 1024 / 1024;
    return sizeInMegas <= 5;
  }

  showImage( file ) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (event) => {
      this.url = event.target.result;
    }
  }

  deleteImage() {
    this.url = '';
    this.fileSeleccionado.emit(null);
  }
}
