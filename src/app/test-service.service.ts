import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { from, Observable, of, throwError,  } from 'rxjs';
import { plainToClass, classToPlain } from "class-transformer";
import { catchError, retry ,map} from 'rxjs/operators';
import { Stat } from 'src/shared/stat.model';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }
/* getConfig() {

  return this.http.get<any>("https://ecp-test.enel.com/iup-ms/v1/bim/bimprojectstats").pipe(
   map((res: Response) => {
     console.log(res);
        return res;
    }),
    
      catchError(this.handleError)
  );
} 

getConfig2() {
  return this.http.get<Stat>("https://ecp-test.enel.com/iup-ms/v1/bim/bimprojectstats")
}

private handleError(error: HttpErrorResponse) {
  console.error('server error:', error);
  if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
  }
  return Observable.throw(error || 'Node.js server error');
}

getTypedPagedMilstones() {
  return this.http.get("https://ecp-test.enel.com/iup-ms/v1/bim/bimprojectstats").pipe(
    map((res: Response) => {
      let obj = <Stat>res.json();
      this.pageResponse.total = res.json().Total;
  }),
  catchError(this.handleError)
  
  );
} */
getInfoProjectStats():Observable<Stat>{

  
  return from([{BimProjectCount: 10,
    NoBimProjectCount:10},
    {BimProjectCount: 22,
      NoBimProjectCount:22 } ])
 
  
}
postInfo(stat: Stat){
  let jsonStat = classToPlain(stat);
  console.log('jsonStat'+ jsonStat);
}


}