# task-manager-api
Task Manager RESTful API 
This is a RESTful API for managing tasks, built using Node.js, Express, and MongoDB. The API supports full CRUD operations (Create, Read, Update, Delete) on tasks, which include attributes like title, description, due date, priority, and completion status.
Models Task Model javascript Copy code { title: { type: String, required: true }, description: String, dueDate: Date, priority: { type: String, enum: ['low', 'medium', 'high'], default: 'low' }, completed: { type: Boolean, default: false } }, { timestamps: true } title: A string field that is required. It stores the name or brief identifier for the task. description: An optional string field that stores additional information about the task. dueDate: An optional date field for specifying the deadline. priority: A string field with three possible values: 'low', 'medium', or 'high'. The default value is 'low'. completed: A boolean field that indicates whether the task is finished. Defaults to false. timestamps: Automatically includes createdAt and updatedAt fields to track when the task was created and last modified. API Endpoints
Create a Task Endpoint: POST /tasks Description: Creates a new task. Request Body: json
{ "title": "task3", "description": "task1", "dueDate": "2024-10-02", "priority": "high", "completed": true } 
Get All Tasks Endpoint: GET /tasks
Description: Retrieves a list of all tasks. 
Get a Specific Task Endpoint: GET /tasks/:id Description: Retrieves details of a single task by its ID. 
error handling when id is not found 
Update a Task Endpoint: PUT /tasks/:id Description: Updates the information of an existing task. Request Body: Include any fields you want to update. 
Delete a Task Endpoint: DELETE /tasks/:id Description: Deletes a task by its ID. 
Setup and Installation Prerequisites Node.js MongoDB Installation npm install Install dependencies: npm install node express nodemon dotenv mongoose ejs
cd task-manager-api init -y
Set up environment variables:
Create a .env file in the root of your project. Add the following variables:
MONGO_URI=mongodb://localhost:3000/taskmanager PORT=3000 Start the server:
npx nodemon start server.js The API will run at http://localhost:3000. form will be open user can enter task and it redirect to /tasks endpoint where all tasks are listed. Or you can check in postman all api using all endpoint mentioned above. Usage You can use tools like Postman or cURL to interact with the API and test CRUD operations.

