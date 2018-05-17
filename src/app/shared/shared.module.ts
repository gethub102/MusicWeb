import {NgModule} from '@angular/core';

import {MouseActionDirective} from './mouse-action.directive';

@NgModule({
  declarations: [
    MouseActionDirective
  ],
  exports: [MouseActionDirective]
})
export class SharedModule {

}
