import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-config-popup',
  templateUrl: './config-popup.component.html',
  styleUrls: ['./config-popup.component.scss']
})
export class ConfigPopupComponent {
  @Input() configType: string = '';
  @Output() close = new EventEmitter<void>();

  field: string = '';
  regex: string = '';

  closePopup() {
    this.close.emit();
  }

  onSubmit() {
    console.log('Field:', this.field);
    console.log('Regex:', this.regex);
    console.log('Config Type:', this.configType);
    this.closePopup();
  }
}
