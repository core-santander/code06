import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  template: `<p>&copy; Santander 2.018`,
  styles: ['p {color: violet;}']
})
export class CopyrightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
