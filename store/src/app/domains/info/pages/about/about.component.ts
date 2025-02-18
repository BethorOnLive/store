import { Component, signal, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../../../shared/components/counter/counter.component';
import { WaveAudioComponent } from '../../../info/components/wave-audio/wave-audio.component';
import { Popover } from 'flowbite';

@Component({
  selector: 'app-about',
  imports: [CommonModule, CounterComponent, WaveAudioComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit{

  @ViewChild('popoverButton', { static: false }) popoverButton!: ElementRef;
  @ViewChild('popoverElement', { static: false }) popoverElement!: ElementRef;

  private popoverInstance!: Popover;

  ngAfterViewInit() {
    this.popoverInstance = new Popover(
      this.popoverElement.nativeElement,
      this.popoverButton.nativeElement,
      { 
        placement: 'top',
        triggerType: 'none'
      }
    );
  }

  duration = signal(5);
  message = signal('Hello');
  products = signal([1,2,3,4,5]);

  changeDuration(event: Event){
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber)
  }

  changeMessage(event: Event){
    const input = event.target as HTMLInputElement;
    this.message.set(input.value)
  }

  public togglePop() {
    if (this.popoverInstance.isVisible()) {
      this.popoverInstance.hide();
    } else {
      this.popoverInstance.show();
    }
  }
}
