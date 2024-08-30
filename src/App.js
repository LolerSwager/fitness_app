import "./App.css"
import Home from "./Pages"
import JannickData from "./Json/Jannick_plan.json"
import AnitaData from "./Json/Anita_plan.json"
import OpvarmingData from "./Json/Opvarming_plan.json"
import { useState } from "react"
import styled from "styled-components"

function App() {
    const storedPlan = localStorage.getItem("PlanData")
    let initialPlan = null

    if (storedPlan) {
        try {
            initialPlan = JSON.parse(storedPlan)
        } catch (e) {
            console.error("Error parsing JSON from localStorage:", e)
            initialPlan = null
        }
    }

    const [plan, setPlan] = useState(initialPlan)

    const LoadOpvarmingData = () => {
        localStorage.setItem("PlanData", JSON.stringify(OpvarmingData))
        setPlan(OpvarmingData)
    }

    const LoadJannickData = () => {
        localStorage.setItem("PlanData", JSON.stringify(JannickData))
        setPlan(JannickData)
    }

    const LoadAnitaData = () => {
        localStorage.setItem("PlanData", JSON.stringify(AnitaData))
        setPlan(AnitaData)
    }

    const CleanData = () => {
        localStorage.removeItem("PlanData")
        setPlan(null)
    }

    return (
        <StyledMain>
            <Home plan={plan} />
            <div className="spacer">
                <button onClick={LoadOpvarmingData}>Load Opvarming</button>
                <button onClick={LoadJannickData}>Load Jannick</button>
                <button onClick={LoadAnitaData}>Load Anita</button>
                <button onClick={CleanData}>Clean Data</button>
            </div>
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

    .spacer {
        display: flex;
        gap: 1rem;
        padding: 1rem;
        button {
            padding: 0.5rem;
            border: none;
            border-radius: 5px;
            background-color: #eee;
            color: #000;
            cursor: pointer;
            &:hover {
                background-color: #707070;
            }
        }
    }
`

export default App
