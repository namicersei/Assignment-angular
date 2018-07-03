export class Message {
    $key: string;
    content: string;
    constructor(private msg: string) {
        this.content = msg;
    }
  }
