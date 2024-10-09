//import React from 'react'
import ReactDOM from 'react-dom'
import { Album } from './album'

const App = () => {
    return (
        <div>
            <Album name="LALA"/>
        </div>
    )
}

const rootElement = document.getElementById("root")
// Render is deprecated...? https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
// ReactDOM.render(<App />, rootElement)
const root = ReactDOM.createRoot(rootElement) // Create a root
root.render(<App />) // Render the app inside the root