import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import GlobalStyle from "./globalStyles"
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <GlobalStyle />
            <App />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root")
)
