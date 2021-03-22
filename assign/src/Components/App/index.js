
import React,{Component} from 'react';
import {Redirect, Route,Switch} from 'react-router-dom';
//import { DatePicker, message } from 'antd';
//import { Input } from 'antd';
//import { AudioOutlined } from '@ant-design/icons';
//import Apifetch from './Api/Apifetch';
//import { Button, Tooltip } from 'antd';
//import Products from '../../Products';
//import {connect} from 'react-redux';
//import {songs} from './actions/index';
//import Search from '../Search';
//import Product from '../../Product';
//import { Grid } from '@material-ui/core';
import Navbar from './Navbar';
import Home from './Home';
import Content from './Content';
import Footer from './Footer'
//import {FormattedMessage} from 'react-intl';
import translate from '../../i18n/translate';
import { FormattedMessage } from 'react-intl';




class App extends Component{
render(){
    return (
        <>
    <Navbar />
    <Switch >
<Route exact path='/' component={Home} />
<Route exact path='/search' component={Content} />
<Redirect to="/" />

</Switch>
    
    <Footer />
        </>
    );
    }

}



export default App;
/*
<Switch >
<Route exact path='/' component={Home} />
<Route exact path='/contact' component={Contact} />
<Route exact path="/about" component={About} />
<Route  exact path="/service" component={Service} />
<Route  exact path="/gallery" component={Gallery} />
<Redirect to="/" />

</Switch>

/*
const mapStateToProps= (state)=>{
    return {
        data:state.data,
    input:state.input,
    result:state.result,
    }

};
const mapDispatchToProps= (dispatch)=>{
    return {
       inputhandle:(term)=>dispatch({type:'HANDLE_data',payload:term}),
       inputsearch:(data)=>dispatch({type:'HANDLE_input',value:data}),
       setResult:(input)=>dispatch({type:'FETCH_DATA',val:input}),
    }

};
export default connect(mapStateToProps,mapDispatchToProps)(App);
*/