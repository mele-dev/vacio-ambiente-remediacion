import { Directive, forwardRef, inject } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { ApiRestService } from '../services/api-rest.service';

@Directive({
  selector: '[appTaken]',
  standalone: true,
})
export class TakenDirective implements AsyncValidator {
  apiService = inject(ApiRestService);
  async validate(control: AbstractControl): Promise<ValidationErrors | null> {
    const valor = control.value;
    console.log({ valor });
    return {
      taken: true,
    };
  }
}
