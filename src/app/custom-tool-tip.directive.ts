import { ApplicationRef, ComponentFactoryResolver, Directive,ElementRef,HostListener,Injector,Input } from '@angular/core';

@Directive({
  selector: '[CustomToolTip]'
})
export class CustomToolTipDirective {

  @Input() CustomToolTip = '';

  constructor(private elementRef: ElementRef,
    private appRef: ApplicationRef, 
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector) { }

  @HostListener('mouseenter') onMouseEnter()  {

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.CustomToolTip('');
  }
}
