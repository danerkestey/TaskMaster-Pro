# TaskMaster Pro

*TaskMaster Pro* is an intuitive task management application. Built with a dynamic backend powered by C# and .NET Core, paired with a React frontend, and an in-memory SQLite database, it streamlines task creation, editing, and management. From day-to-day chores to critical project milestones, simplify your to-do lists and effectively manage your tasks with TaskMaster Pro.

## Tools & Technology Used

- **Frontend**: React
- **Backend**: C#, .NET Core
- **Package Manager**: Yarn
- **API Documentation**: Swagger
- **UI Components**: React-Modal, Styled Components
- **Database**: SQL in-memory database

## Setup & Running the Application

### Prerequisites

Ensure you have `dotnet` and `yarn` installed on your machine.

### Backend Setup

1. Navigate to the backend directory:
    ```bash
    cd path-to-your-repo/backend
    ```

2. Build the backend project:
    ```bash
    dotnet build
    ```

3. Run the backend:
    ```bash
    dotnet run
    ```

The backend should now be running on `http://localhost:5065`.

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
    ```bash
    cd path-to-your-repo/frontend
    ```

2. Install the required dependencies:
    ```bash
    yarn install
    ```

3. Run the frontend:
    ```bash
    yarn start
    ```

The frontend should now be running on `http://localhost:3000`.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.