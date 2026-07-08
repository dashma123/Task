# Task Manager API
A REST API for managing tasks.

## Technology Used 
Node.js
Express.js
MongoDB
Mongoose
dotenv
## Installation
-git clone <repository-url>
-cd task-manager-api
-npm install
## .env file 
PORT=3000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/task-manager
## run the project
npm run dev 
## features 
-Create a task
-View all tasks
-View a single task
-Update a task
-Delete a task
-Filter tasks by status
-Pagination
-Input validation
## API Endpoints
GET /api/tasks
GET /api/tasks/:id
PATCH /api/tasks/:id
DELETE /api/tasks/:id
## Validation
The API validates incoming data before processing the request.
1.The task title is required.
2.The title cannot be empty.
3.The status must be pending, in progress, or done.
4.An invalid task ID returns a 400 Bad Request response.
## Testing
I tested all the endpoints using Postman and cURL. I verified that creating, reading, updating, and deleting tasks worked correctly. I also tested filtering, pagination, validation, and error handling to make sure the API behaved as expected.
## Progress log
Day 1: Set up the project and installed the required packages.
Day 2: Connected the application to MongoDB.
Day 3: Implemented CRUD operations.
Day 4: Added validation for task data.
Day 5: Implemented filtering and pagination.
Day 6: Tested all API endpoints using Postman and fixed minor issues.
Day 7: Completed the documentation and did a final review of the project.


