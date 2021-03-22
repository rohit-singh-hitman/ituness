import { Layout, Menu, Breadcrumb } from 'antd';
import Search from '../../Components/Search';
import styled from 'styled-components';
import Products from './Products';
import React from 'react'
import {FormattedMessage} from 'react-intl';
import 'antd/dist/antd.css';
import translate from '../../i18n/translate';
const {Content} = Layout;

const Styleddiv1 =  styled.div`
background:#fff;
 padding: 24;
 min-height: 280px;
`;
const Styleddiv2 =  styled.div`
font-size:3.5rem;
 background: #fff;
  padding: 24;
  text-align: center;
`;
const Styleddiv3 =  styled.div`
background: #fff;
 padding: 24;
`;

const Contents = () => {

    return (
        <Layout className="layout tex">
            <Content style={{ padding: '0 50px' }}>
         <Styleddiv1>
          <Search />
          </Styleddiv1>

          <Styleddiv2 >
          {translate('result')}
          </Styleddiv2>
          <Styleddiv3 >
          <Products />
          </Styleddiv3>
    </Content>
        </Layout>
    )
}

export default Contents;
