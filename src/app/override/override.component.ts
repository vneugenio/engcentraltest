import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-override',
  templateUrl: './override.component.html',
  styleUrls: ['./override.component.css']
})
export class OverrideComponent {
  @Output() coords = new EventEmitter<object>();

  overrideForm = new FormGroup({
    x: new FormControl(''),
    y: new FormControl(''),
    state: new FormControl('')
  });

  sendData() {
    console.log('values ' + this.overrideForm.value.state);
    this.coords.emit(this.overrideForm.value);
  }

}
