// import { Injectable } from '@angular/core';
// import {
//   HttpInterceptor,
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthInterceptor implements HttpInterceptor {

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // recupera o token JWT do navegador
//     const token = localStorage.getItem('token');

//     // anexa o token JWT no cabeçalho da requisição
//     if (token) {
//       req = req.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//     }

//     return next.handle(req);
//   }
// }