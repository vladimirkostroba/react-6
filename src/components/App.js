import React from "react";
import Layout from "./Layout/Layout";
import AppBar from "./AppBar/AppBar";
import TaskForm from "./TaskForm/TaskForm";
import TaskList  from "./TaskList/TaskList";

const App = () => {
    return(
        <Layout>
            <AppBar/>
            <main>
                <TaskForm/>
                <TaskList/>

            </main>
        </Layout>
    )
}

export default App