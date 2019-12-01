import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'tab-title',
  templateUrl: './tab-title.component.html',
  styleUrls: ['./tab-title.component.css']
})
export class TabTitleComponent {

  @ViewChild('tabTitleTemplate', { static: false })
  tabTitleTemplate: TemplateRef<any>;

  constructor() {}
}
