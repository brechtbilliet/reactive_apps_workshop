import {Component, ViewEncapsulation} from "@angular/core";
import {Store} from "@ngrx/store";
import {ApplicationState} from "../../../statemanagement/state/ApplicationState";
import {ToggleSidebar} from "../../../statemanagement/actions/containers/sidebar";
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
    isCollapsed$ = this.store.select((state:ApplicationState) => state.containers.collapsableSidebar.isCollapsed);

    constructor(private store: Store<ApplicationState>) {
    }

    toggle(): void {
        this.store.dispatch(new ToggleSidebar());
    }
}