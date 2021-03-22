import {FormattedMessage} from 'react-intl';

const translate =(id,value={})=><FormattedMessage id={id} values={{...value}}/>
console.log(translate);
export default translate;