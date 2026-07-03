EF Core 8.0 Retail Store Lab

This project is a .NET 8.0 Console Application that demonstrates the fundamentals of Entity Framework Core 8.0 through five practical labs. It covers database configuration, model creation, migrations, data seeding, and querying using SQL Server.

Lab 1 – Project Setup

The project is configured with the required Entity Framework Core packages for SQL Server development, including:

EF Core SQL Server package for database connectivity.
EF Core Design package for migration support.
EF Core Tools package for managing migrations and database updates.
Console application targeting .NET 8.0.

This setup provides the foundation for building and interacting with a SQL Server database using Entity Framework Core.

Lab 2 – Database Context and Models

The database structure is implemented in Data/AppDbContext.cs, while the entity classes are located in the Models/ folder.

The AppDbContext class manages the database connection and exposes DbSet properties for each entity, allowing CRUD operations through Entity Framework Core. The model classes define the database tables and their relationships.

Lab 3 – Migrations and Database Creation

Entity Framework Core migrations are used to create and update the database schema.

After installing the .NET SDK, run the following commands:

dotnet tool install --global dotnet-ef
dotnet ef migrations add InitialCreate
dotnet ef database update

These commands install the EF Core CLI tool, generate the initial migration, and create the SQL Server database with the required tables.

Lab 4 – Data Seeding

Initial sample data is inserted into the database in Program.cs using the asynchronous methods:

AddRangeAsync()
SaveChangesAsync()

This provides sample records that can be used for testing and demonstrating database operations.

Lab 5 – Data Retrieval

The project demonstrates different techniques for retrieving data using Entity Framework Core in Program.cs, including:

ToListAsync() – Retrieves all records from a table.
FindAsync() – Retrieves a record using its primary key.
FirstOrDefaultAsync() – Retrieves the first matching record or returns null if no match is found.

These methods illustrate common querying approaches while following asynchronous programming practices.

Notes
Update the SQL Server connection string in Data/AppDbContext.cs before running the application.
If you prefer to store configuration in appsettings.json, configure AppDbContext using the application's configuration system or a Host Builder before executing the project.
Summary

This project provides a hands-on introduction to Entity Framework Core 8.0, covering project setup, database context creation, entity modeling, migrations, database creation, data seeding, and asynchronous data retrieval. It serves as a solid foundation for building data-driven .NET applications using SQL Server and Entity Framework Core.