# garage

URL: http://garage16.s3-website-us-east-1.amazonaws.com/

#### Garage Routes:

ROUTE  |  HTTP  | Description  
-------|--------|-------------
/garage/ | GET | List of ALL garages
/garage/create | POST | Create new garage
/garage/:id | GET | Get a single garage data by ID
/garage/edit/:id | PUT | Update single garage data
/garage/delete/:id | DELETE | Delete single garage data



#### Car Routes:

ROUTE  |  HTTP  | Description  
-------|--------|-------------
/car/ | GET | List of car  
/car/:id | GET | Get single data Car
/car/edit/:id | PUT | Update single car data
/car/add | POST | ADD single car data
/car/delete/:id | DELETE | delete single car data


how to run server:?
* git clone https://github.com/handipriyono/garage.git
* cd server
* NPM install
* npm start ( in folder server )

how to run client? :
* in other terminal, navigate to client folder:
* -> cd client
* npm start ( in client folder )
