
## Terminology
# Database 
A container for collections. This is the same as a database in SQL and
usually each project will have its own database full of different collections.
# Collection
A grouping of documents inside of a database. This is the same as a table in
SQL and usually each type of data (users, posts, products) will have its own
collection.
# Document
A record inside of a collection. This is the same as a row in SQL and usually
there will be one document per object in the collection. A document is also
essentially just a JSON object.
# Field
A key value pair within a document. This is the same as a column in SQL.
Each document will have some number of fields that contain information
such as name, address, hobbies, etc. An important difference between SQL
and MongoDB is that a field can contain values such as JSON objects, and
arrays instead of just strings, number, booleans, etc.
