import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  initializing = false;

  ngOnInit() {
    this.initializing = true;

    setTimeout(() => {
      this.initializing = false;
    }, 3000);
  }

}
