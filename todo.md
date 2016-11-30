## Second excercise

We just fetched our data from the store instead of the service.

Now when we remove or update something we want to update the store by dispatching the correct actions.

There are 3 actions: 
<ul>
<li>DATA_WINES_REMOVE</li>
<li>DATA_WINES_UPDATE_RATE</li> 
<li>DATA_WINES_UPDATE_STOCK</li>
</ul>
For that we have created 3 action classes:
<ul>
<li>RemoveWine</li>
<li>UpdateRate</li>
<li>updateStock</li>
</ul>

Go to 'src/stock/containers/stock-page/stock-page.container.ts' and implement the missing functions.

Open the redux devtools with **ctrl-L** and check the actions being dispatched and see the ui getting updated correctly everywhere.

## Third excercise
Implement the collapsable-sidebar to use redux.
Go to 'src/common/containers/collapsable-sidebar/collapsable-sidebar.container.ts'

There is one action: CONTAINER_COLLAPSABLESIDEBAR_TOGGLE with one action class ToggleSidebar

We created an action class for that action: ToggleSidebar

Use that action to toggle the sidebar and fetch the `isCollapsed` property from the state. When you collapse the sidebar, and navigate to about and back... The sidebar should remain collapsed. You can also verify this in the store devtools (**ctrl-L**).

## Bonus exercise
Implement the add-stock-page to use redux.
Go to 'src/stock/containers/add-stock-page/add-stock-page.container.ts'

Dispatch the `DATA_WINES_ADD` action via the `AddWine` class.
