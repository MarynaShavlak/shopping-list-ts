# React To-Do App
This project was created as a test task for the [COAX Software](https://coaxsoft.com/) Internship Program for Frontend Developers.

This project is a simple to-do app created using React. It allows users to manage their tasks efficiently with features such as adding new to-dos, viewing previously added to-dos, and deleting any to-do.

## Features
📝 **Add a New To-Do:**
Users can add a new to-do with a title and priority.

📋 **View All To-Dos:**
All previously added to-dos are displayed for easy reference.

🗑️ **Delete To-Do:**
Users can delete any to-do they no longer need.

🔄 **Prevent Missing To-Dos After Page Reload:**
A feature has been implemented to ensure that to-dos are not lost when the page is reloaded.

🔢 **Priority Between 1 and 999**:
The priority of each to-do can only be a number between 1 and 999. 1 is set as the default priority.

🔔 **Notification for Duplicate Title:**
If a user attempts to create a new task with a title that already exists, a notification will be shown using react-toastify to inform the user about the duplicate title.

## Technology Stack

- **React:** Used for building the frontend of the application.
- **[styled-components](https://styled-components.com/):** Used for styling components in a more maintainable and scoped way.
- **[prop-types](https://github.com/developit/proptypes):** Used for validating the props passed to components, enhancing code robustness.
- **[nanoid](https://github.com/ai/nanoid#readme):** Used for generating unique IDs when creating task items.
- **Local Storage:** Utilized to save tasks and their state after a page reload.
   - **Custom Local Storage Hook:** Created a custom hook to abstract the interaction with local storage, enhancing code modularity and reusability.

## Design

The design for this project can be viewed on Figma. [Click here to view the design](https://figma.com/file/H6LBTWa4xb1Lf9obFLqN8M/Todo-List-UI-(Community)?node-id=0%3A1&mode=dev).

## Getting Started
To run the project locally, follow these steps:

**Clone the repository:**
 ```
git clone https://github.com/MarynaShavlak/coax-software-todo-list.git
cd coax-software-todo-list
```
**Install dependencies:**
```
bash
npm install
```
**Run the app:**
```
bash
npm start
```
The app will be accessible at http://localhost:3000 in your web browser.


## Additional Notes
- Make sure to have [Node.js](https://nodejs.org/en) and [npm](https://www.npmjs.com/) installed on your machine.
- This project uses [React](https://react.dev/) for the frontend and [react-toastify](https://github.com/fkhadra/react-toastify#readme) for notifications.
- The state of the to-dos is preserved to prevent data loss after a page reload. This is achieved using browser storage mechanisms such as **localStorage**. The implementation details can be found in the source code.