import {ContainersState} from "./ContainersState";
import {DataState} from "./DataState";

export type ApplicationState = Readonly<{
    containers: ContainersState;
    data: DataState;
}>;