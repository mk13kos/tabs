import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabComponent } from "./tab/tab.component";
import { TabTitleComponent } from "./tab-title/tab-title.component";
import { TabContentComponent } from "./tab-content/tab-content.component";
import { TabContentDirective } from './tab-content.directive';

@NgModule({
  declarations: [
    TabsComponent,
    TabComponent,
    TabTitleComponent,
    TabContentComponent,
    TabContentDirective
  ],
  exports: [
    TabsComponent,
    TabComponent,
    TabTitleComponent,
    TabContentComponent,
    TabContentDirective
  ],
  imports: [
    CommonModule,
  ],
  entryComponents: [
    TabContentComponent
  ]
})
export class TabsModule {}
