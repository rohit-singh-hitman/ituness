 import React,{Component} from 'react';
//import {Card,CardMedia,CardContent,Typography} from '@material-ui/core';
import translate from '../../i18n/translate';
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;


class Product extends Component{

render(){
    console.log(this.props.data);
    return (
        <>
           <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="songs"
        src={this.props.data.artworkUrl100}
      />
    }

    
  >

    <Meta
      
      title={translate('title',{data:this.props.data.trackName})}
      description={this.props.data.artistName.length<50?translate('description',{value:this.props.data.artistName}):"Various ARtist"}
    />
  </Card>
        
        </>
    )
}

}
export default Product;
