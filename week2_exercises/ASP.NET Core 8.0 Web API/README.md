ASP.NET Core 8.0 Web API

This project is a starter ASP.NET Core 8.0 Web API built using the Controller-based architecture. It demonstrates the fundamentals of developing RESTful APIs, including CRUD operations, custom filters, authorization, exception handling, and Swagger integration.

Features

The project includes the following:

Controller-based ASP.NET Core 8 Web API project
ValuesController with GET, POST, PUT, and DELETE actions
Swagger (OpenAPI) enabled in the Development environment
Standard launch settings for easy execution
Custom Employee model and controller
Custom Action Filter for request processing
Custom Authorization Filter that validates the Authorization header for the Bearer scheme
Custom Exception Filter that logs exceptions to a file and returns an HTTP 500 response
Employee CRUD operations using hardcoded in-memory data
API Endpoints
Values API
GET /api/values – Returns sample values.
POST /api/values – Creates a new value.
PUT /api/values/{id} – Updates an existing value.
DELETE /api/values/{id} – Deletes a value.
Employee API
GET /api/employee – Returns all employee records.
GET /api/employee/error – Triggers an exception to demonstrate the custom exception filter.
POST /api/employee – Creates a new employee using data received through the request body.
PUT /api/employee/{id} – Updates an existing employee.
DELETE /api/employee/{id} – Deletes an employee by ID.
Custom Filters

The project demonstrates the use of ASP.NET Core filters:

Action Filter: Executes custom logic before or after controller actions.
Authorization Filter: Ensures the request contains an Authorization: Bearer <token> header before allowing access to the Employee controller.
Exception Filter: Handles unhandled exceptions by logging them to a file and returning a generic 500 Internal Server Error response.
Data Storage

Employee records are stored in an in-memory collection for demonstration purposes. No database integration is included, making the project simple and easy to understand.

Running the Project

The machine used for preparing this project did not have the .NET 8 SDK installed, so the application could not be executed locally.

To run the project:

Open the solution in Visual Studio or Visual Studio Code with .NET 8 installed.
Build and run the project.
Open Swagger to test the available endpoints.
Verify that GET /api/values returns the sample values.
Include an Authorization: Bearer <token> header when testing Employee endpoints, otherwise the custom authorization filter will return a 400 Bad Request response.
Summary

This project provides a simple introduction to ASP.NET Core 8 Web API development by demonstrating RESTful endpoints, controller-based architecture, custom filters, exception handling, Swagger documentation, and in-memory CRUD operations. It can serve as a foundation for building more advanced Web APIs with database connectivity and authentication.
