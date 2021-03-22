import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import French from '../i18n/messages/fr.json';
import German from '../i18n/messages/ge.json';
import English from '../i18n/messages/en.json';
import Hindi from '../i18n/messages/hi.json';

export const Context = React.createContext();

const local = navigator.language;

let lang;
if (local === 'en') {
    lang = English;
}else {
    if (local === 'fr') {
        lang = French;
    } else {
        if(local === 'hi'){
            lang = Hindi;
        }else{
            lang = German;
        }
        
    }
}

const Wrapper = (props) => {
   
    const [locale, setLocale] = useState(local);

    const [messages, setMessages] = useState(lang);

    function selectLanguage(value) {
        console.log(value)
        const newLocale = value;
        setLocale(newLocale);
        if (newLocale === 'en') {
            setMessages(English);
        } else {
            if (newLocale === 'fr'){
                setMessages(French);
            } else {
                if (newLocale === 'hi'){
                    setMessages(Hindi);
                }else{
                setMessages(German);
                }
            }
        }
    }

    return (
        <Context.Provider value = {{locale, selectLanguage}}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>

    );
}


export default Wrapper;