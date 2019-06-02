import 
React from 
'react';

import 
'./Container.css';

import 
Characters from 
'../Characters';



const 
Container = props 
=> (

<div

className={

props.shake ?
'container d-flex flex-wrap justify-content-center shake' :
'container d-flex flex-wrap justify-content-center'

}

>

{props.Characters.map((a,
i) 
=> <Characters
name={a}
key={i}
clickEvent={props.clickEvent}
/>)}

</div>

);



export 
default Container;
