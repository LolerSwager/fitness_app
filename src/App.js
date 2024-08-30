import "./App.css"
import Home from "./Pages"
import DemoData from "./Json/Jannick_plan.json"
import { useState } from "react"
import styled from "styled-components"

function App() {
    // Initialize state with data from localStorage
    const [plan, setPlan] = useState(JSON.parse(localStorage.getItem("PlanData")))

    const loadDemoData = () => {
        // Store the demo data in localStorage
        localStorage.setItem("PlanData", JSON.stringify(DemoData))

        // Update the plan state with the new demo data
        setPlan(DemoData)
    }

    return (
        <StyledMain>
            <Home plan={plan} />
            <button onClick={loadDemoData}>Load Demo Data</button>
        </StyledMain>
    )
}

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    background: linear-gradient(45deg, rgb(255, 104, 192) 11.1%, rgb(104, 84, 249) 81.3%);
    //background-color: #2d2d2d;
`

export default App
