import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  logError(message: string, stack: string) {
    // Send errors to server here
    if (message != null) console.log('LoggingService: ' + message);
  }
}
