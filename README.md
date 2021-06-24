# kalpas-csv-scanner-app
This documentation highlights the functioning of this app.

### Steps on how to test the App:

1. To start the application, go to this url: https://gentle-plains-29655.herokuapp.com/,
where the app is being hosted.

2. To access the csv-scanner API, please use '/scanner' route behind the main route in your postman application, in order to autenticate yourself you must pass a header with the following key-value pair:-

Key: permission
Value: allow

To further test the scanner API, follow the steps mentioned under the next header.

3. To access the CRUD API, please use the '/cruder' route behind main route in your postman application. Same as before u must authenticate yourself by passing in the header mentioned in Step 2.


### Testing the Scanner API: - 
1. After accessing the csv-scanner API, use POST request and select the .csv file from the uploads folder to upload in form-data. You can also use your own file after editing the schema under 'models' folder. Use the key: 'filename' to successfully send over the file selected in value. This will push the file's contents in a remote database collection in mongoDB Atlas.

2. To view the file contents you must access the CRUD API and test it out, which is mentioned below...

### Testing the CRUD API: -
1. To view the .csv file's contents send a get route after accessing the API using /cruder route. This should list out all the contents sent in the provided .csv file.

2. To retrieve or view only one document, use the '/cruder/getOne' route, then send a parameter query using postman's params.

3. To create a new document, get to the original '/cruder' route and send a url encoded form using a POST request. Provide the variables key: {name,sex,age,height,weight} and pass a value to each of them.  You can always view all your data using Step 1.

4. To delete all documents from collection, you must get to the '/cruder/deleteAll' route and send a DELETE request from postman.

5. To delete one document from collection, you must get to the '/cruder/deleteOne' route and use query params to specify which document to delete. Use the name variable as the key and provide the name of the document you would like to delete.

6. To modify a document, return to the '/cruder' route and use a PUT request. Send a query param key and use the variable 'name' to modify the document you want. Use the form-url to set the key value pair to modify the data however you want. Use the same variable keys as before : {name,sex,age,height,weight}.


These are strictly RESTful APIs.