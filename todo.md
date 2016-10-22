## Second excercise

We just fetched our data from the store instead of the service.

Now when we remove or update something we want to notify the store with the correct actions.

There are 3 actions: 
<ul>
<li>DATA_WINES_REMOVE</li>
<li>DATA_WINES_UPDATE_RATE</li> <li>DATA_WINES_UPDATE_STOCK</li>
</ul>
For that we have created 3 actioncreators:
<ul>
<li>removeWine(id)</li>
<li>updateRateWine(id, myRating)</li>
<li>updateStockWine(id, inStock)</li>
</ul>

Go to src/stock/containers/stock-page/stock-page.container.ts and implement the missing functions

Open the redux devtools with **ctrl-L** and check the actions being dispatched and see the ui getting updated correctly everywhere.