import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  timer:any;
  toastMessage:any;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  open(message:string, type = 'info') {
    if (message) {
        this.document.getElementById('#one-platform-toaster-div')?.classList.remove('no-display');
        this.document.getElementById('#one-platform-toaster-div')?.classList.remove('one-platform-' + type + '-toast');
        switch (type) {
            case 'info': this.document.getElementById('#one-platform-toaster-icon')!.innerHTML= 'info'; break;
            case 'success': this.document.getElementById('one-platform-toaster-icon')!.innerHTML = 'check_circle'; break;
            case 'warn': this.document.getElementById('#one-platform-toaster-icon')!.innerHTML = 'warning'; break;
            case 'error': this.document.getElementById('#one-platform-toaster-icon')!.innerHTML = 'error'; break;
            default: type = 'info'; this.document.getElementById('#one-platform-toaster-icon')!.innerHTML = 'info';
        }
        this.document.getElementById('#one-platform-toaster-text')!.innerHTML = message;
        this.toastMessage = message;
        this.document.getElementById('#one-platform-toaster-div')?.classList.add('one-platform-' + type + '-toast');
        this.timer = setTimeout(() => {
            this.document.getElementById('#one-platform-toaster-div')?.classList.remove('one-platform-' + type + '-toast');
            this.document.getElementById('#one-platform-toaster-div')?.classList.add('no-display');
        }, 5000);
    }
}

close() {
    clearTimeout(this.timer);
    this.document.getElementById('#one-platform-toaster-div')!.classList.add('no-display');
}
}
