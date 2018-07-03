import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
src_audio = 'https://mp3masti.in/siteuploads/files/sfd5/2322/Kar%20Har%20Maidan%20Fateh%20(Sanju)(Mp3Masti.In).mp3';
  constructor() { }

  ngOnInit() {
  }


}
