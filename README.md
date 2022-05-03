# nlp-evaluation

Overall this is a natural language processor that analysises any http adress.


*** Here I will give a short description of every file in the src/client/js folder as the others were barely changed ***

1. apicall.js

The API key is fetched from the server side via get request, along the url and input text from formhandler.js.
That data is being transformed into JSON data and added to the innerHTML of each category.

2.checkstring.js

This folder checks for url validation. If input text is a url, the function returns true via ternary operator.

3.checkstring.test.js

This folder runs a test whether the google search page is a url.

4.formHandler.js

This folder puts it all together. The API key is fetched from index.js inside the getkey function.
After it got fetched the information are passed to the getAnalysis function imported from apicall.js.

5.selection.js

All selectors for the different categories.
