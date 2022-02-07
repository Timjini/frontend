import React, { Component } from 'react'
import Home from './components/Home'
import {Routes,Route} from 'react-router-dom'
import Requests from './components/Requests'
import RequestEdit from './components/Requestedit'

class App extends Component {
    render () {
        return (
            <>
             
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='requests' element={<Requests />} />
                <Route path='requests/new' element={<RequestEdit />} />
            </Routes>
            </>
        )
    }
}

export default App