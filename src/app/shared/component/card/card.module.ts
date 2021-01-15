import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { CardComponent } from './card.componet';

@NgModule({
    declarations:[
        CardComponent
    ],
    exports: [
        CardComponent
    ],
    imports: [
        CommonModule
    ]
})

export class CardModule{}