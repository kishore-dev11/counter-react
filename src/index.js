import { useState } from "react"
import ReactDom from "react-dom/client"
import Counter from "./Counter"

const root=ReactDom.createRoot(document.getElementById("root"))

root.render(<Counter />)