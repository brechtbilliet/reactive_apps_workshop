## Fourth excercise
go to src/stock/containers/stock-page/stock-page.container.ts

We have implemented the filter functionality and the matching wines.

You can update the favoritewines so it uses a stream instead of an object. As a result your constructor should be empty.

You can create a stream of how many wines there are and render it in the view (look for todo).

You can create a stream of how much money your winecellar is worth and render it in the view (look for todo).

Refactor the collapsable sidebar in src/common/containers/collapsable-sidebar/collapsable-sidebar.container.ts to use streams and make sure you don't have any subscribes anymore.

## Bonus excercise
Busy handling: We have created a customhttp service in app/customHttp.ts When a GET request or POST request happens we want to notify the store that the busy flag should be shown. The actions are:
<ul>
<li>CONTAINER_APPLICATION_ENABLE_BUSY_FLAG</li>
<li>CONTAINER_APPLICATION_DISABLE_BUSY_FLAG</li>
</ul>

Like before, use the action classes:
<ul>
<li>EnableBusyFlag</li>
<li>DisableBusyFlag</li>
</ul>

Then go over to src/app/containers/application/application.container.ts and make sure the spinner component gets the right value out of the store.

The busy flag should be shown when fetching data and adding data (We will explain later why there is only a spinner for POST and GET)