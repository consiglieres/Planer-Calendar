const blockTable = ` 
<tr>  
    <td scope="row" id="time">Hi</td>   
    <td scope="row">Пивет</td>  
    <td scope="row">Пивет</td> 
    <td scope="row">Пивет</td> 
</tr>
`

setTable(blockTable)

function setTable(blockTable){
    for(let i = 0; i <= 24; i++){
        document.querySelector("table").insertAdjacentHTML("afterBegin", blockTable);
    };
};