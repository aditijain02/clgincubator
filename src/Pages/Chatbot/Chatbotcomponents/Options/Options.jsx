const Options=(props)=>{
const options=[
    {
        text:"IT",
        handler:props.actionProvider.handleIT,
        id:1,
    },
    {text:"CSE",
    handler:props.actionProvider.handleCSE,
    id:2},
    {text:"ECE",
    handler:props.actionProvider.handleECE,
    id:3},
    {text:"Civil",
    handler:props.actionProvider.handleCivil,
    id:4},
    {text:"Mechanical",
    handler:props.actionProvider.handleMechanical,
    id:5},
   
];

const buttonMarkup=options.map((option)=>(

<button key={option.id} onClick={option.handler}>
    {option.text}
</button>
));

return <div >{buttonMarkup}</div>;


}

export default Options;