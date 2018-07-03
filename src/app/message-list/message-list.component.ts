import { Component, OnInit } from '@angular/core';
import { MessageboxService } from '../core/messagebox.service';
import { Message } from '../core/message';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { element } from 'protractor';




@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
msg_array: AngularFireList<Message>; // Messages content
conversation;
  constructor(private box: MessageboxService, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.getMsg();
this.Display();

  }

getMsg() {
this.msg_array = this.db.list('/messages');


}
 // For displaying the conversation
Display() {

this.msg_array.snapshotChanges().subscribe((snapshots: any) => {

this.conversation = snapshots;

});
}
}
