import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import pic from "../../free/Frame 6.png";
import translate from '../../i18n/translate';
import styled from 'styled-components';
const Col1 =  styled(Col)`
padding-top:5px;
padding-left:45px;
display:flex;
justify-content:center;
flex-direction: column;
`;
const Img1 =  styled(Col)`
align-items: right;
margin-bottom: 5px;
`;
const Header2 =  styled.h2`
margin:5px 0px;
`;
const Div2 = styled.div`
margin-top:5px;
`;

const Home = ()=>{
    return(
    <section id="header" className="d-flex flex-column">
        <div className="container-fluid ">
       <Row >
      <Col className=" mx-auto" span={20} >
      <Row >
      <Col  md={12}>
        <Col1>
      <h1 ><strong className="brand-name">{translate('music_title')}</strong></h1>
                       <Header2>{translate('music_desc')}</Header2>
                       <Div2 >
                       <NavLink to='/search' className="btn-get-started">{translate('button')}</NavLink>
                       </Div2>
        </Col1>
      </Col>
      <Col  md={12}>

      <Img1>
      <img src={pic} className="img-fluid animated" alt='hello'/>
      </Img1>

      </Col>

      </Row>
      </Col>
      </Row>
      </div>
      </section>
      );
}
export default Home;