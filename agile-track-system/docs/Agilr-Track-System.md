# Agile Track System - Data Flow Diagrams

## Level 0 DFD (Context Diagram)
The Level 0 Data Flow Diagram (DFD) provides an overview of how users interact with the Agile Track System. Since this system does not use a database, data is managed within the application state.

### **Entities & Processes:**
- **Users (Team Members, Project Managers, Admins)**: Interact with the Agile Track System to manage tasks, track progress, and update project details.
- **Agile Track System API**: The central system that handles requests and processes data within the application state.

#### **Data Flow:**
1. Users send requests (login, create task, update progress, etc.) to the Agile Track System API.
2. The API processes the request and updates the application state.
3. The system returns a response to the user (success/failure messages, requested data, etc.).

### **Level 0 DFD Diagram:**
```
+---------------------+          +---------------------------+          +----------------+
|     Users          |  ----->  |  Agile Track System API   |  ----->  |  Application  |
| (Team, Managers)   |          |  (Handles logic & state)  |          |  State        |
+---------------------+          +---------------------------+          +----------------+
       |                                  |                                  |
       |                                  |                                  |
       v                                  v                                  v
+---------------------+          +---------------------------+          +----------------+
|  User Requests     |  <-----  |   API Responses           |  <-----  |  State Updates |
+---------------------+          +---------------------------+          +----------------+
```

---

## Level 1 DFD (Detailed Data Flow)
The Level 1 DFD expands on the Agile Track System API and its interactions with users and application state. This level details how API endpoints process data for different functionalities.

### **Processes & Data Flow:**
1. **User Authentication & Management**
   - Users send login requests to the Agile Track System API.
   - The system validates credentials and manages sessions in the application state.
   - A session token is generated and returned to the user.

2. **Task Management**
   - Users (team members, managers) can add, update, or delete tasks.
   - The API updates the application state accordingly.

3. **Progress Tracking**
   - Users update task statuses (To-Do, In Progress, Done).
   - The Agile Track System API processes these updates and modifies the application state.

4. **Sprint Planning & Tracking**
   - Project managers create and assign sprints.
   - The system tracks sprint progress within the application state.

5. **Project Dashboard & Reporting**
   - Users request an overview of project progress.
   - The API retrieves relevant data from the application state and returns a structured response.

### **Level 1 DFD Diagram:**
```
+---------------------+          +---------------------------+          +----------------+
|     Users          |  ----->  |  Authentication           |  ----->  |  Application  |
+---------------------+          +---------------------------+          |  State        |
       |                          |                                  +----------------+
       |                          |
       v                          v
+---------------------+  ----->  +---------------------------+  ----->  +----------------+
|  Task Requests     |          |  Task Management          |          |  Task Data     |
+---------------------+          +---------------------------+          +----------------+
       |                          |                                  
       |                          |
       v                          v
+---------------------+  ----->  +---------------------------+  ----->  +----------------+
|  Progress Updates  |          |  Progress Tracking        |          |  Sprint Data   |
+---------------------+          +---------------------------+          +----------------+
```

### **Conclusion**
The Agile Track System follows a structured data flow to ensure seamless interaction between users and the application state. With well-defined processes for authentication, task management, progress tracking, and reporting, the system efficiently handles agile project workflows without relying on a database.

