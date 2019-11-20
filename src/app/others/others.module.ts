import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChildrenComponent } from './children/children.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { BaseViewComponent } from './components/base-view/base-view.component';

@NgModule({
  declarations: [
    ChildrenComponent,
    FirstCompComponent,
    HighlightDirective,
    BaseViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BaseViewComponent
  ]
})
export class OthersModule { }
