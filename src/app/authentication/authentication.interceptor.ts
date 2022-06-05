import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { ConfigurationService } from '.././shared/configuration.service';
import { LoaderService } from '../shared/loader.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(
    private _config: ConfigurationService,
    private loader: LoaderService,
    private spinner: NgxSpinnerService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Inside interceptor');

    const userToken = localStorage.getItem(
      this._config.getUserTokenSessionKey()
    );
    this.spinner.show();

    if (userToken) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + userToken),
      });

      return next.handle(cloned).pipe(
        finalize(() => {
          this.spinner.hide();
        })
      );
    }

    return next.handle(request).pipe(
      finalize(() => {
        this.spinner.hide();
      })
    );
  }
}
