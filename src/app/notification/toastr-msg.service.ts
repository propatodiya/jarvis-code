import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ToastrMsgService {
  public message: any;
  constructor(public toastr: ToastrService) {
  }

  errorMsg(error: any) {
    this.message = this.getErrorString(error) as string;
    return this.toastr.error('', this.message);
  }

  errorTimeOut(error: any) {
    this.message = this.getErrorString(error) as string;
    return this.toastr.error('', this.message, { timeOut: 3000, progressBar: true, closeButton: true });
  }

  successMsg(message: any) {
    this.message = this.getErrorString(message) as string;
    return this.toastr.success('', this.message);
  }

  successTimeOut(message: any) {
    this.message = this.getErrorString(message) as string;
    return this.toastr.success('', this.message, { timeOut: 3000, progressBar: true, closeButton: true });
  }

  warningMsg(warning: any) {
    this.message = this.getErrorString(warning) as string;
    return this.toastr.warning('', this.message);
  }

  warningTimeOut(warning: any) {
    this.message = this.getErrorString(warning) as string;
    return this.toastr.warning('', this.message, { timeOut: 3000, progressBar: true, closeButton: true });
  }

  infoMsg(info: any) {
    this.message = this.getErrorString(info) as string;
    return this.toastr.info('', this.message);
  }

  infoTimeOut(info: any) {
    this.message = this.getErrorString(info) as string;
    return this.toastr.info('', this.message, { timeOut: 3000, progressBar: true, closeButton: true });
  }

  getErrorString(message: any): string {
    this.message = '';
    if (message && message instanceof Array) {
      for (const err of message) {
        this.message = this.message + '\n' + err;
      }
    } else if (message && message instanceof Object) {
        if (message.message) {
          this.message = message.message;
        }
    } else if (message && typeof(message) === 'string') {
      this.message = message;
    }
    return this.message;
  }
}
