import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="jumbotron">
            <h1>Welcome to an Angular 2 App!</h1>
        </div>
    `,
    styles: [`
        .jumbotron { box-shadow: 0 2px 0 rgba(0,0,0,0) }
    `]
})

export class AppComponent {

}