import {   
    HttpEvent, 
    HttpInterceptor, 
    HttpHandler, 
    HttpRequest 
} from '@angular/common/http';

import { Observable } from 'rxjs';


export class Interceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler)
              :Observable<HttpEvent<any>> {  
               console.log(req);
               return next.handle(req);   
           }
}