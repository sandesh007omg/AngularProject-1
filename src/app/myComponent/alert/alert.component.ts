import { Component } from '@angular/core';
import { Alert, AlertService } from 'src/app/service/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  alert: Alert | undefined;

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertService.getAlert().subscribe((alert) => {
      this.alert = alert;
      setTimeout(() => {
        this.alert = undefined;
      }, 5000);
    });
  }
  dismissAlert(): void {
    this.alertService.dismissAlert();
  }
}
