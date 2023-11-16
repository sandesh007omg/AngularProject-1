import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styles: [
    `
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .modal {
        background: #fff;
        padding: 20px;
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        text-align: center;
        display: block;
      }

      button {
        margin: 0 10px;
      }
    `,
  ],
})
export class ConfirmationModalComponent {
  @Output() confirmed = new EventEmitter<boolean>();
  isVisible = true;

  constructor(
    public dialogRef: MatDialogRef<ConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string }
  ) {}

  onNoClick(): void {
    this.isVisible = false;
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.isVisible = false;
    this.dialogRef.close(true);
  }
}
