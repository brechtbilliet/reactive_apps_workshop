import {ContainersState} from "./ContainersState";
import {DataState} from "./DataState";
interface ApplicationStateStructure {
    containers: ContainersState;
    data: DataState;
}

export type ApplicationState = Readonly<ApplicationStateStructure>;