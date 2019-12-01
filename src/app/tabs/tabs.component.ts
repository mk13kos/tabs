import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  ContentChildren,
  QueryList,
  ViewChild
} from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { TabContentDirective } from './tab-content.directive';
import { TabContentComponent } from './tab-content/tab-content.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  @ViewChild(TabContentDirective, { static: true })
  contentHost: TabContentDirective;

  activeTab: TabComponent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterContentInit(): void {
    this.initTabs();
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TabContentComponent);
    const viewContainerRef = this.contentHost.viewContainerRef;

    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    const instance = componentRef.instance as TabContentComponent;

    instance.tabContentTemplate = this.activeTab.contentRef;
  }

  initTabs() {
    this.tabs.forEach((tab, index) => {
      if (index === 0) {
        tab.active = true;
        this.setActiveTab(tab);
      }
    });
    this.tabs.changes.subscribe(() => {
      if (!this.tabs.length) {
        this.contentHost.viewContainerRef.clear();
      } else {
        this.setFirstActive();
      }
    });
  }

  activateTab(tab: TabComponent) {
    this.tabs.forEach(item => item.active = item.id === tab.id);
    this.setActiveTab(tab);
  }

  setFirstActive() {
    if (!this.tabs.find(item => item.active)) {
      this.tabs.first.active = true;
      this.setActiveTab(this.tabs.first);
    }
  }

  setActiveTab(tab: TabComponent) {
    this.activeTab = tab;
    this.loadComponent();
  }

  trackByFunc(tab) {
    return tab.id;
  }
}
