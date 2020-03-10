import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { scan, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const source = of(1, 2, 3);

    source.pipe(scan(console.log)).subscribe();


    source.pipe(scan(console.log)).subscribe();

    source.pipe(filter(item => {
      console.log(`Item: ${item} - item !== 2 ${item !== 2}`);
      return item !== 2;
    })).subscribe();
  }
}
