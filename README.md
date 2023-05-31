# 06-Store-API-Node.js
This is project 6/50 of my React Projects series. It's a store API applying All CRUD operations with All Errors handled globally.

GET  /api/v1/products/ returns the first 10 products in the DB.

POST /api/v1/products/ creates a new product to DB if it doesn't has any validation error according to Product schema else it will return an error.

GET /api/v1/products/:id return the product with that id if it exists in DB else it will return not found.

PATCH /api/v1/products/:id updates the product with that id to the new Data in the request body if it follows the schema else it will return an error.

DELETE /api/v1/products/:id deletes the product with that id in DB if it exists else it will return not found.

The project handle Invalid id error and not found errors.

## Topics covered
Node.js, Express.js, mongoose, MongoDB
