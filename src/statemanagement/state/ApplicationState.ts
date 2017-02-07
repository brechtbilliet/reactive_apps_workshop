import {ContainersState} from "./ContainersState";
import {DataState} from "./DataState";
type ApplicationStateStructure = {
    containers: ContainersState;
    data: DataState;
}

export type ApplicationState = Readonly<ApplicationStateStructure>;