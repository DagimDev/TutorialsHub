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


## Read
- Each of these commands is run on a specific collection
db.<collectionName>.<command>

# find
      - db.users.find()
        - Get all documents
        - Get all users
# find(<filterObject>)
                      - db.users.find({ name: “Kyle” })
                        db.users.find({ “address.street”: “123 Main St” })
                        Find all documents that match the filter object
                      - Get all users with the name Kyle
                      - Get all users whose adress field has a street field with the value 123 Main St
# find(<filterObject>, <selectObject>)
                                      - db.users.find({ name: “Kyle” }, { name: 1, age: 1 })
                                        db.users.find({}, { age: 0 })
                                        Find all documents that match the filter object but only
                                        return the field specified in the select object
                                      - Get all users with the name Kyle but only return their name, age, and _id
                                      - Get all users and return all columns except for age
# findOne
          - db.users.findOne({ name: “Kyle” })
            The same as find, but only return the first document that
            matches the filter object
          - Get the first user with the name Kyle
# countDocuments
                  - db.users.countDocuments({ name: “Kyle” })
                    Return the count of the documents that match the filter
                    object passed to it
                  - Get the number of users with the name Kyle


# Update
        - Each of these commands is run on a specific collection
          db.<collectionName>.<command>
# updateOne
          - db.users.updateOne({ age: 20 }, { $set: { age: 21 } })
            Update the first document that matches the filter object
            with the data passed into the second parameter which is the
            update object
          - Update the first user with an age of 20 to the age of 21
# updateMany
          - db.users.updateMany({ age: 12 }, { $inc: { age: 3 } })
            Update all documents that matches the filter object with the
            data passed into the second parameter which is the update
            object
          - Update all users with an age of 12 by adding 3 to their age
# replaceOne
          - db.users.replaceOne({ age: 12 }, { age: 13 })
            Replace the first document that matches the filter object
            with the exact object passed as the second parameter. This
            will completely overwrite the entire object and not just
            update individual fields.
            - Replace the first user with an age of 12 with an object that has the age of 13 as its only field

# Delete
        - Each of these commands is run on a specific collection
          db.<collectionName>.<command>
# deleteOne
          - db.users.deleteOne({ age: 20 })
            Delete the first document that matches the filter object
            - Delete the first user with an age of 20
# deleteMany
              - db.users.deleteMany({ age: 12 })
                Delete all documents that matches the filter object
                - Delete all users with an age of 12
