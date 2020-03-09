import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  source = of(1, 2, 3);
  private observable = Observable.create();

  ngOnInit(): void {
  }

  clicked(event: Event) {
    this.source.pipe(
      scan((acc, curr) => acc * curr)
    ).subscribe(console.log);
  }
}
