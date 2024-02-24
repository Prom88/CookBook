import React from "react"
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./screens/Home/Home"
import RecipeDetail from "./screens/recipe-detail/RecipeDetail"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = {<Home />} path="/"/>
                <Route element = {<RecipeDetail/>} path="/recipe/:id" />

                <Route path="*" element = {<div> Notfound</div>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router