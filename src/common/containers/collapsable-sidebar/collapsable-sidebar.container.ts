import {Component, ViewEncapsulation, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {ApplicationState} from "../../../statemanagement/state/ApplicationState";
import {toggleSidebar} from "../../../statemanagement/actionCreators";
import {CommonSandbox} from "../../common.sandbox";
@Component({
    selector: "collapsable-sidebar",
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="collapsable-part" [class.is-collapsed]="isCollapsed$|async">
            <button class="btn btn-primary btn-collapsable" (click)="toggle()">
                <i class="fa" [class.fa-chevron-right]="isCollapsed$|async" 
                    [class.fa-chevron-left]="(isCollapsed$|async) === false"></i>
            </button>
            <ng-content *ngIf="!(isCollapsed$|async)"></ng-content>
        </div>
    `
})
export class CollapsableSidebarContainer {
    isCollapsed$ = this.sb.isCollapsed$;


    constructor(private sb: CommonSandbox) {
    }

    toggle(): void {
        this.sb.toggleSidebar();
    }
}