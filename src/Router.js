import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components//Auth/LoginForm';
import SignupForm from './components/Auth/SignUp';
import Dashboard from './components/dashboard';
import ForgotPassword from './components/Auth/ForgotPassword';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} hideNavBar={true} />
                <Scene key="signup" component={SignupForm} hideNavBar={true} />
                <Scene key="forgotPassword" component={ForgotPassword} hideNavBar={true} />
            </Scene>


            <Scene key="main">
                <Scene key="dashboard" component={Dashboard} hideNavBar={true}  />
            </Scene>

        </Router>
    );
};

export default RouterComponent;

