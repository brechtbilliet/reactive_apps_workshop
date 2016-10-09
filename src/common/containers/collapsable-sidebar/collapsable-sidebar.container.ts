import {Component, ViewEncapsulation} from "@angular/core";
@Component({
    selector: "collapsable-sidebar",
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="collapsable-part" [class.is-collapsed]="isCollapsed">
            <button class="btn btn-primary btn-collapsable" (click)="toggle()">
                <i class="fa" [class.fa-chevron-right]="isCollapsed" 
                    [class.fa-chevron-left]="(isCollapsed) === false"></i>
            </button>
            <ng-content *ngIf="!isCollapsed"></ng-content>
        </div>
    `
})
export class CollapsableSidebarContainer {
    isCollapsed = false;

    toggle(): void {
        this.isCollapsed = !this.isCollapsed;
    }
}