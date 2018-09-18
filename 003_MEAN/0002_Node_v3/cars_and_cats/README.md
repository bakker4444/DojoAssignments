# Coding Dojo Bootcamp Assignment
## MEAN / Node / Cars and Cats

### Assignment details

We are going to make another node server in this assignment, but we are going to **complicate** it. Create a folder called **cars_and_cats**, this will be your **root folder** for this project.  Within this folder, create:

* A file called app.js.  This is where you will build your node server.
* A folder called views.  This is where you will keep your HTML files.
* A folder called images for images.
* A folder called stylesheets for CSS.


Your server must be capable of handling the following URL requests:

1. Have `localhost:7077/cars` go to a simple HTML page that shows some cool pictures of different cars.  These car pictures should be stored in your **images** folder on your server.  **DON'T just link to pictures of cars stored somewhere else!!**
2. Have `localhost:7077/cats` show a simple HTML page with some cool pictures of cats.  Again, make sure these pictures are **stored on your server**.
3. Have `localhost:7077/cars/new` show a simple form where the user can add a new car information. For the /cars/new HTML page, no need to store this information in the database nor is there a need to validate the entries. Simply have the form there.


 The point of this exercise is to build your node server so it serves all of the content of your website.

**Helpful hints**

**Serving CSS stylesheets**

Here is an example of how to handle a browser request for a stylesheet:
```
  else if(request.url === '/stylesheets/style.css'){
    fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
     response.writeHead(200, {'Content-type': 'text/css'});
     response.write(contents);
     response.end();
    })
  }
```

**Serving images**
```
  else if(request.url === '/images/pizza.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/pizza.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
```