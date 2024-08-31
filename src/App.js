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
        <StyledApp>
            <header></header>
            <main>
                <Home plan={plan} />
                <div className="spacer">
                    <button onClick={LoadOpvarmingData}>Opvarming</button>
                    <button onClick={LoadJannickData}>Jannick</button>
                    <button onClick={LoadAnitaData}>Anita</button>
                    <button onClick={CleanData}>Clean Data</button>
                </div>
            </main>
            <footer></footer>
        </StyledApp>
    )
}

const StyledApp = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    background: linear-gradient(45deg, rgb(255, 104, 192) 11.1%, rgb(104, 84, 249) 81.3%);

    main {
        display: flex;
        flex-direction: column;
        .spacer {
            display: flex;
            gap: 1rem;
            padding: 1rem;
            button {
                padding: 0.5rem 0.7rem;
                border: none;
                border-radius: 5px;
                background-color: #eee;
                color: #000;
                cursor: pointer;
                &:hover {
                    background-color: #9d9d9d88;
                }
            }
        }
    }
`

export default App
