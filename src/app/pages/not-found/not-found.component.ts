import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div>
      <img
        src="https://media.giphy.com/media/A9EcBzd6t8DZe/giphy.gif"
        alt="not-found"
      />
    </div>
  `,
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  constructor() {}
}
