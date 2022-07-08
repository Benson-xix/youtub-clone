import React from "react"
import { ChakraProvider} from "@chakra-ui/react"
import { BrowserRouter as Router} from "react-router-dom"
import Zone from "./layouts/Zone"

const WeatherProject = () => {
    return (
        <ChakraProvider>
             <Router>
                  <div>
                    <Zone/>
                  </div>
             </Router>
           
         </ChakraProvider>
    )
}

export default WeatherProject
