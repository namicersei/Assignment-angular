import { Component, OnInit } from '@angular/core';
import { CloudinaryOptions, CloudinaryUploader } from 'ng2-cloudinary';

@Component({
  selector: 'app-cloudinery',
  templateUrl: './cloudinery.component.html',
  styleUrls: ['./cloudinery.component.css']
})
export class CloudineryComponent implements OnInit {
  imageUrl: string;
  uploaded = 0;

  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'dvia0adci', uploadPreset: 'image_uploader' })
    );

    loading: any;
  constructor() { }

  ngOnInit() {
    this.uploaded = 0;
  }


  upload() {
    this.uploaded = 1;
    this.loading = true;
    this.uploader.uploadAll();
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
         const res: any = JSON.parse(response);
         this.imageUrl = res.url;
     };
     this.uploader.onErrorItem = function(fileItem, response, status, headers) {
        console.log('onErrorItem', fileItem, response, status, headers);
      };
  }

}
