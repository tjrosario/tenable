# tenable
README

Per Bullet 5:

When replacing the query string parameter with 1000, a lazy loading / infinite scroll feature would be implemented to allow the user to page through parts of the returned data so the UI would not render all 1000 rows of DOM.  

Added performance enhancement would include updating the API to accept a 'page' parameter so that the frontend can supply a index and ONLY return those results whenever they click a 'show more' button or as they scroll through the page.
