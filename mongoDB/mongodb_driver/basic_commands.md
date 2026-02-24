## Basic Commands
# mongosh -  Open a connection to your local MongoDB instance. All other commands 
# show dbs 
            - Show all databases in the current MongoDB instance
# use <dbname>
            - Switch to the database provided by dbname
                use myDatabase
# db 
    - Show current database name
# show collections 
                    - Show all collections in the current database
# db.dropDatabase() 
                    - Delete the current database
# exit 
        - Exit the mongosh session

## Create
- Each of these commands is run on a specific collection
db.<collectionName>.<command>

# insertOne
            - db.users.insertOne({ name: “Kyle” })
              Create a new document inside the specified collection
              Add a new document with the name of Kyle into the users collection

# insertMany
              - db.users.insertMany([{ age: 26 }, { age: 20 }])
                Create multi new documents inside a specific collection
                Add two new documents with the age of 26 and 20 into the users collection
