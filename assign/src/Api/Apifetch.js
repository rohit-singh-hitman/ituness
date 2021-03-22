//import React from 'react';
import {create} from 'apisauce';



const Apifetch=(search)=>{
    const url=new URL('https://itunes.apple.com/search');
    console.log(search);
    const params={term:search};
    url.search=new URLSearchParams(params);
    
    return(
    fetch(url, {method:'POST'} )
    .then((results) =>{
        console.log(results);
        return results.json();
    }).then((jsonobj)=>{
        console.log(jsonobj.results);
        return jsonobj.results
    })
    .catch(err=>console.log('err',err))
    );
}

const Apicall =(search)=>{
    console.log(search);
    const api=create({
        baseURL:'https://itunes.apple.com/',

    })

    return(
    api.any({ method: 'POST', url:'/search', params: {term:search} })
    .then((results) =>{
        console.log(results.data.results);
        return results.data.results;
    }).catch(err=>console.log('err',err))
    )
}
    
export default  Apicall;

