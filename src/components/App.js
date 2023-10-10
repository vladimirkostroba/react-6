import React from "react";
import Layout from "./Layout/Layout";
import AppBar from "./AppBar/AppBar";
import TaskForm from "./TaskForm/TaskForm";

const App = () => {
    return(
        <Layout>
            <AppBar/>
            <main>
                <TaskForm/>

            </main>
        </Layout>
    )
}

export default App