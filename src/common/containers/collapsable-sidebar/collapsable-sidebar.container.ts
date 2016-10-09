import {Component, ViewEncapsulation, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {ApplicationState} from "../../../statemanagement/state/ApplicationState";
import {toggleSidebar} from "../../../statemanagement/actionCreators";
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
export class CollapsableSidebarContainer implements OnDestroy {
    isCollapsed = false;

    private subscriptions: Array<Subscription> = [];

    constructor(private store: Store<ApplicationState>) {
        this.subscriptions.push(this.store.subscribe((state: ApplicationState) => {
            this.isCollapsed = state.containers.collapsableSidebar.isCollapsed;
        }));
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    toggle(): void {
        this.store.dispatch(toggleSidebar());
    }
}