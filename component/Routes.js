import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import CameraComponent from './Camera'

const Routes = () => (
    <Router>
        <Scene key = "root">
            <Scene key = "home" component = {Home} title = "Home" initial = {true} />
            <Scene key = "camera" component = {CameraComponent} title = "Camera" />
        </Scene>
    </Router>
);
export default Routes