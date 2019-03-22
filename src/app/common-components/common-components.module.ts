import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonsComponent } from './buttons/buttons.component';
import { InputFieldsComponent } from './input-fields/input-fields.component';

@NgModule({
  declarations: [ButtonsComponent, InputFieldsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ButtonsComponent,
    InputFieldsComponent
  ]
})
export class CommonComponentsModule { }
