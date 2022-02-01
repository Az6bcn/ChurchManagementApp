import { Component, Input, OnInit } from '@angular/core';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  private index = 1;
  private destroyByClick = true;
  private duration = 2000;
  private hasIcon = true;
  private position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  private preventDuplicates = false;
  private type: NbComponentStatus;
  private title: string;
  private message: string;
  constructor(private toastrService: NbToastrService) { }

  ngOnInit(): void {
    // if (this.type && this.title && this.message) {
    //   this.showToast(this.type, this.title, this.message);
    // }
  }

  showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? ` ${title}` : '';

    //this.index += 1;
    this.toastrService.show(
      body,
      `${titleContent}`, config);
  }
}
