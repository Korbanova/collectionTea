import {Component, ElementRef, Input, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
})
export class PopupComponent {
  @ViewChild('popup')
  popup!: TemplateRef<ElementRef>;
  private modalRef!: NgbModalRef;

  @Input() data: string = '';

  constructor(private modalService: NgbModal) {
  }

  open(): void {
    this.modalRef = this.modalService.open(this.popup,{ size: 'lg', centered: true });
  }

  closeModal() {
    this.modalRef.close();
  }
}
