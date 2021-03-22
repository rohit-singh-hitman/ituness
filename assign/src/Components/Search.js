
import React,{Component} from 'react';

import { Button} from 'antd';
import { Input } from 'antd';
import {connect} from 'react-redux';
import {Creator as result} from '../Types/types';
//import {requestsongs} from '../actions/index';
import { bindActionCreators } from 'redux';
import translate from '../i18n/translate';
import {FormattedMessage} from 'react-intl'
class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            data:'',
        };
    }
    search = ()=>{
        console.log(this.state.data);
        this.props.requestsongs(this.state.data);
        //Apifetch(this.state.data)
        //.then((jsonObj) => {
         //this.props.songs(jsonObj.results);
          //console.log(jsonObj.results);
          //setResult(resu.results);
      //});
      
    }
    render(){
        
        return (
            <>
            <FormattedMessage id="placeholder" defaultMessage="Search Songs">
                 {placeholder=>  
                     <Input placeholder={placeholder} onChange={(e)=>this.setState({data:e.target.value})}/>
                               }
              </FormattedMessage>
        
        <Button  onClick={()=>this.search()} >{translate("search")}</Button>

</>
    )
    }

}
const mapDispatchToProps = dispatch =>
   bindActionCreators(result,dispatch)
export default connect(null,mapDispatchToProps)(Search);


