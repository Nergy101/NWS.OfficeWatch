import { Injectable } from '@nestjs/common';
@Injectable()
export class MailService {
  constructor() {}

  async sendMail(receiverEmail: string, subject: string) {
    var body = this.generateBodyHtml(receiverEmail, subject);
    var email = { receiverEmail, body };
    //etc
  }

  private generateBodyHtml(receiverEmail: string, subject: string): string {
    return `
    <h1>
      Hello ${receiverEmail}!
    </h1>
    
    <a href="https://office-watch.com">Visit OfficeWatch now</a>
    `;
  }
}
