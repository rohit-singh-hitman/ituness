import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {FormattedMessage} from 'react-intl';
import 'antd/dist/antd.css';
import translate from '../../i18n/translate';
const { Header, Content, Footer } = Layout;
const mydate=new Date()
    const year=mydate.getFullYear();
    console.log('year is',year);
const Footers = () => {
    return (
        <Layout className="layout">
            <Footer className='footer' style={{ textAlign: 'center' }}>
        {translate('edit',{val:year})}
        </Footer>
        </Layout>
    )
}

export default Footers;
