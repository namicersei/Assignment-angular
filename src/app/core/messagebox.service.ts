import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Message } from './message';
import { AngularFireObject } from 'angularfire2/database';



@Injectable()
export class MessageboxService {
  msg_list: AngularFireList<Message>;
 
  constructor(private db: AngularFireDatabase) {
      this.msg_list = db.list('/messages');
   }
// get_msgs() {
// this.msg_array = this.db.list('/messages');
// return(this.msg_array);
// }


}
