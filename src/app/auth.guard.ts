import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ServicesService } from './services.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loginService = inject(ServicesService);
  if (localStorage.getItem('logined')!=="true") {
    router.navigate(['/login']);
    return false;
  }else{
    return true;

  }

};
