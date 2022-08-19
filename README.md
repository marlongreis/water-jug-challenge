# Water Jug Challenge
Build an application that solves the Water Jug Riddle for dynamic inputs (X, Y, Z). The
simulation should have a UI (if SPA) to display state changes for each state for each jug
(Empty, Full or Partially Full).

You have an X-gallon and a Y-gallon jug that you can fill from a lake. (Assume lake has unlimited amount
of water.) By using only an X-gallon and Y-gallon jug (no third jug), measure Z gallons of water.


### GOALS
1. Measure Z gallons of water in the most efficient way.
2. Build a UI where a user can enter any input for X, Y, Z and see the solution.
3. If no solution, display “No Solution”.

####  LIMITATIONS

> ####  Actions allowed: Fill, Empty, Transfer.
DELIVERABLES
The application source code should be on Github and a link should be provided. If this is not an
option, a public link to the application source code or a zip archive is also acceptable.

# Solution
For this project, the following technologies were used:

 1. NodeJS
 2. TypeScript
 3. Jest
 4. Commit atomic
 5. Lint
 6. Express

# Solution
For this project, the following technologies were used:

 1. NodeJS
 2. TypeScript
 3. Jest
 4. Commit atomic
 5. Lint
 6. Express


### Environment

To run the project first run the build command

    npm run build
   
Then build the container image

    sudo docker-compose -f docker-compose.yml --env-file local.env up -d


### Routers

**Jug**

    POST: http://localhost:8082/api/v1/jug
    body:
    {
         "solved": true,
         "moreEfficient": 4,
         "message": "Most efficient way is with 4 steps"
    }

#### Response status 200

    {
        "solved": true,
        "moreEfficient": 4,
        "message": "Most efficient way is with 4 steps"
    }




# Testes

The application was developed using TDD as a methodology for this reason the test coverage is quite high. Unit, integration, e2e and mutation tests were performed.

Before run the command
   
    npm  install


**Unit tests**
Used to test application behaviors.

    npm run test:unit


**Unit tests**
Used to test application behaviors.

    npm run test:unit

**Integrated tests**

    npm run test:integration

**Coverage tests**

    npm run test:ci

**All tests**

    npm run test



