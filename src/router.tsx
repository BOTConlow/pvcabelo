import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import { HomePage } from './pages/home'
import { ThanksPage } from './pages/thankspage'

export function AppRoutes() {

    return (

        <Router>
            <Routes>
                <Route index element={<HomePage />}/>
                <Route path='/thankspage' element={<ThanksPage />}/>
            </Routes>
        </Router>

    )

}