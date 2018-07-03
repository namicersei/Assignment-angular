import { Component, OnInit } from '@angular/core';
import { Message } from '../core/message';
import { MessageboxService } from '../core/messagebox.service';


@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {

  // Msg:Message;
  constructor(private box: MessageboxService) { }

  ngOnInit() {
  }
   send_msg(msg: string) {
     let Msg: Message;
     Msg = new Message(msg);
     this.box.msg_list.push(Msg);
    }
}
