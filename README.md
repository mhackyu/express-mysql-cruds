# express-mysql-cruds

Simple CRUDS operation in nodejs using express, mysql and ejs package. [Demo](https://limitless-wave-73560.herokuapp.com/)

## Getting Started

### Installation

#### IMPORTANT: Before you start, download store.sql [here](https://mega.nz/#!uENWRBYI!8MyLepP3Efr5BJT1eGe8ixWVgrSvUvuQOIncsaNDhSk) and import it to your localhost.

Step 1: Clone this project.
```
$ git clone https://github.com/mhackyu/express-mysql-cruds.git
```

Step 2: Go to express-mysql-cruds directory
```
$ cd express-mysql-cruds
```

Step 3: Run:

```
$ npm install
```

Step 4: Configure database *src/db/db.config.js*
```
const  connection  =  mysql.createConnection({
	host:  'localhost',
	user:  'root',
	password:  'password',
	database:  'store'
});
```

Step 5: Run the server
```
$ npm start
```

Step 6:
Browse [localhost:4000](http://localhost:4000) 

And you're done!  


## Built With
* [Node.js](https://nodejs.org/en/) 
* [Express](https://expressjs.com/) 
* [mysql](https://www.npmjs.com/package/mysql) 
* [ejs](http://ejs.co/)

## Author

* **Mark Christian Paderes** - *Initial work* - [mhackyu](https://github.com/mhackyu)
