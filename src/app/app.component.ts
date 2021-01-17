import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { filter, scan } from 'rxjs/operators';
import { shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const source = of(1, 2, 3);

    source.pipe(scan(console.log)).subscribe();

    source.pipe(filter(item => {
      console.log(`Item: ${item} - item !== 2 ${item !== 2}`);
      return item !== 2;
    })).subscribe();

    // grab url and share with subscribers
    const lastSouce = this.source.pipe(
      tap(_ => console.log('executed')),
      shareReplay(1)
    );

    // requires initial subscription
    const initialSubscriber = lastSouce.subscribe(console.log);


    // logged: 'my-path'
    const lateSubscriber = lastSouce.subscribe(console.log);
  }

}
