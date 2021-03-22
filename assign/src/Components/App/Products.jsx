
import React from 'react';
import Product from './Product';
import {connect} from 'react-redux';
import {selectsongitems} from '../../selectors/song_selector'


import { Row, Col } from 'antd';


const Products=(props)=>{
    //console.log("data is",this.props.songs)
    //console.log("hello",props.song);
    return (
        <main>
            <Row type="flex" justify="center" gutter={[16, 24]}>
              
              {props.songs.map((data)=>{
                return (
                    
                       <Col xs={24} s={12}  md={8}  xl={6} key={data.trackId}>
                          <Product data={data} />
                        </Col>
                    
                );
              })}
                  
            </Row>
            
            
              
              
            
        </main>
    )
}
//Using re-selectors 
const mapStateToProps=(state)=>{
    
    return{
        songs: selectsongitems(state), 
    } 

}

export default connect(mapStateToProps,null)(Products);
