import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertSubject = new Subject<Alert>();
  private clearSubject = new Subject<void>();
  private readonly emptyAlert: Alert = { message: '', type: undefined };

  getAlert(): Observable<Alert> {
    return this.alertSubject.asObservable();
  }

  showError(message: string, type?: any): void {
    const alert: Alert = { message, type };
    this.alertSubject.next(alert);
  }
  dismissAlert(): void {
    this.alertSubject.next(this.emptyAlert);
    this.clearSubject.next();
  }
}

export interface Alert {
  message: string;
  type: 'danger' | 'success' | 'info' | 'warning' | undefined;
}
