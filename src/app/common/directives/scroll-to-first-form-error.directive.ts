import { Directive, ElementRef, HostListener } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Directive({
  selector: '[kgScrollToFirstFormError]',
  standalone: true,
})
export class ScrollToFirstFormErrorDirective {
  constructor(
    private el: ElementRef,
    private formGroupDirective: FormGroupDirective
  ) {}

  @HostListener('ngSubmit') onSubmit() {
    if (this.formGroupDirective.control.invalid) {
      this.scrollToFirstFormError();
    }
  }

  private scrollToFirstFormError() {
    const firstErrorElement: HTMLElement =
      this.el.nativeElement.querySelector('.ng-invalid');

    firstErrorElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });

    setTimeout(() => {
      firstErrorElement.focus();
    }, 700);
  }
}
