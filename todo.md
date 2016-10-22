## Second excercise

We just fetched our data from the store instead of the service.

Now when we remove or update something we want to update the store by dispatching the correct actions.

There are 3 actions: 
<ul>
<li>DATA_WINES_REMOVE</li>
<li>DATA_WINES_UPDATE_RATE</li> 
<li>DATA_WINES_UPDATE_STOCK</li>
</ul>
For that we have created 3 actioncreators:
<ul>
<li>removeWine(id)</li>
<li>updateRateWine(id, myRating)</li>
<li>updateStockWine(id, inStock)</li>
</ul>

Go to 'src/stock/containers/stock-page/stock-page.container.ts' and implement the missing functions.

Open the redux devtools with **ctrl-L** and check the actions being dispatched and see the ui getting updated correctly everywhere.

## Third excercise
Implement the collapsable-sidebar to use redux.
Go to 'src/common/containers/collapsable-sidebar/collapsable-sidebar.container.ts'

There is one action: CONTAINER_COLLAPSABLESIDEBAR_TOGGLE

We created an actioncreator for that action: toggleSidebar()

Use that action to toggle the sidebar and fetch the `isCollapsed` property from the state. When you collapse the sidebar, and navigate to about and back... The sidebar should remain collapsed. You can also verify this in the store devtools (**ctrl-L**).
