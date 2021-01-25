import {NgModule} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import {TestPageComponent} from './test-page/test-page.component';
import {TestPageResolver} from './test-page/test-page.resolver';

const routes: Routes = [
  {
    path: '',
    component: TestPageComponent,
    resolve: {
      data: TestPageResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
