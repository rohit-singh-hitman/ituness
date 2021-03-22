import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { Select } from 'antd';
import {FormattedMessage} from 'react-intl';

//import {LOCALES} from './i18n/constants';
//import {useContext} from 'react';
//import {AppContext} from './Components/Context';import Icon from '@ant-design/icons';
import {Context} from "../Wrapper";
import React, {useContext, useState} from 'react';
import Search from '../Search'
import Products from '../App/Products';
//import { injectIntl, intlShape } from 'react-intl';
import 'antd/dist/antd.css';
import translate from '../../i18n/translate';
const { Option} = Select;
const { Header} = Layout;

const Navbar= ()=> {
    const context = useContext(Context);
    const [current,setCurrent]=useState('mail');
    
      const handleClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
      };
    

    return (
        <Layout className="layout">
        <Menu 
        theme="dark"
        mode="horizontal"
       
        style={{ lineHeight: '64px',textTransform:'capitalize'}}
        onClick={handleClick} selectedKeys={current} >
        <Menu.Item key="home">
        <Link to="/"  exact />
         
          <FormattedMessage id="home"/>
        </Menu.Item>
        <Menu.Item key="search" >
        <Link to="/search"  exact />
          
          <FormattedMessage id="search"/>
        </Menu.Item>
        
        <Menu.Item key="favourite">
          <Link to="/"  exact />
          <FormattedMessage id="favourites"/>
          
        </Menu.Item>
      </Menu>
      <Select style={{ width: 200 }} value = {context.locale} onChange={context.selectLanguage}>
          
      <Option value="en">English</Option>
       <Option value="fr">français</Option>
       <Option value="ge">Deutsch</Option>
       <Option value="hi">हिंदी</Option>
     
 </Select>
 </Layout >
       
     
    );
    }



export default Navbar;


/*

const { SubMenu } = Menu;

class Navbar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="mail">
        <Link to="/search" target="_blank" exact />
          <Icon type="mail" />
          <FormattedMessage id="home"/>
        </Menu.Item>
        <Menu.Item key="app" >
        <Link to="/search" target="_blank" exact />
          <Icon type="appstore" />
          <FormattedMessage id="search"/>
        </Menu.Item>
        
        <Menu.Item key="alipay">
          <Link to="/search" target="_blank" exact />
          <FormattedMessage id="search"/>
          
        </Menu.Item>
      </Menu>
    );
  }
}



/*
 <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px',textTransform:'capitalize'}}
      >
        <Menu.Item key="/" component={Link} to='/'><FormattedMessage id="home"/></Menu.Item>
        <Menu.Item key="search" component={Link} to='/Content'><FormattedMessage id="search"/></Menu.Item>
        <Menu.Item key="/" component={Link} to='/'><FormattedMessage id="favourites"/></Menu.Item>
      </Menu>
      <Select style={{ width: 200 }} value = {context.locale} onChange={context.selectLanguage}>
          
             <Option value="en">English</Option>
              <Option value="fr">français</Option>
              <Option value="ge">Deutsch</Option>
              <Option value="hi">हिंदी</Option>
            
        </Select>
    </Header>
    
    
  </Layout>
*/