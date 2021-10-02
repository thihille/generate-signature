import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'generate-signature';

  signatures = [];

  signatureName: string = '';
  signatureMail: string = '';
  signaturePhone: string = '';

  ngOnInit(): void {}

  onSubmit() {
    
    this.signatures.push({
      name: this.signatureName,
      mail: this.signatureMail,
      phone: this.signaturePhone
    })
  }
}
