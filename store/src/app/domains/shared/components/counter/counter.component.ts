import { Component, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required:true}) duration = 0;
  @Input({required:true}) message = '';
  counter = signal(0);
  setIntervalRef: number | undefined;

  constructor(){
    // No ASYNC (promise, suscribe)
    // before render
    // run once
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges){
    // before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);

    const duration = changes['duration'];
    console.log("duration...", duration);
    if(duration && duration.currentValue != duration.previousValue){
      this.doSomething()
    }
  }

  ngOnInit(){
    // after redender
    // run once
    // aync, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration => ', this.duration);
    console.log('message => ', this.message);

    this.setIntervalRef = window.setInterval(()=>{
      this.counter.update(statePrev => statePrev + 1);
      console.log('setInterval');
    }, 1000)
  }

  ngAfterViewInit(){
    // after render
    // children were rendered
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
    window.clearInterval(this.setIntervalRef);
  }

  doSomething(){
    console.log('Este método hace algo cuando duration cambia y es diferente');
    console.log('-'.repeat(10));
  }
}
