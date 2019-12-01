import {
  Component,
  ContentChild,
  Input, TemplateRef
} from '@angular/core';
import { TabTitleComponent } from '../tab-title/tab-title.component';
import { TabContentComponent } from '../tab-content/tab-content.component';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {

  @ContentChild(TabTitleComponent, { static: false })
  tabTitle: TabTitleComponent;

  @ContentChild(TabContentComponent, { static: false })
  tabContent: TabContentComponent;

  @Input()
  contentRef: TemplateRef<any>;

  _active = false;

  @Input()
  set active(value) {
    this._active = value;
  };

  get active() {
    return this._active;
  }

  id = new Date().getUTCMilliseconds();

  constructor() {}
}
