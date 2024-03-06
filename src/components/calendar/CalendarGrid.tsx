import React from "react";
import "../../styles/calendar styles/table.css";

type Daily = {
    dailiesOne: string,
    dailiesTwo: string,
    dailiesThree: string,
    dailiesFour: string,
    dailiesFive: string,
    dailiesSix: string,
    dailiesSeven: string
}

const shareData: Daily[] = [{
    dailiesOne:  ` `,
    dailiesTwo:  ` `,
    dailiesThree: ` `,
    dailiesFour: ` `,
    dailiesFive: ``,
    dailiesSix:  ``,
    dailiesSeven: ``
},
{
    dailiesOne:  ``,
    dailiesTwo:  ``,
    dailiesThree: ``,
    dailiesFour: ``,
    dailiesFive: ``,
    dailiesSix:  ``,
    dailiesSeven: ``
},
{
    dailiesOne:  ``,
    dailiesTwo:  ``,
    dailiesThree: ``,
    dailiesFour: ``,
    dailiesFive: ``,
    dailiesSix:  ``,
    dailiesSeven: ``
},
{
    dailiesOne:  ``,
    dailiesTwo:  ``,
    dailiesThree: ``,
    dailiesFour: ``,
    dailiesFive: ``,
    dailiesSix:  ``,
    dailiesSeven: ``
},
{
    dailiesOne:  ``,
    dailiesTwo:  ``,
    dailiesThree: ``,
    dailiesFour: ``,
    dailiesFive: ``,
    dailiesSix:  ``,
    dailiesSeven: ``
},
{
    dailiesOne:  ``,
    dailiesTwo:  ``,
    dailiesThree: ``,
    dailiesFour: ``,
    dailiesFive: ``,
    dailiesSix:  ``,
    dailiesSeven: ``
},
{
    dailiesOne:  ``,
    dailiesTwo:  ``,
    dailiesThree: ``,
    dailiesFour: ``,
    dailiesFive: ``,
    dailiesSix:  ``,
    dailiesSeven: ``
},
];

const table = [
    shareData, shareData, shareData, shareData, shareData, shareData, shareData, shareData, shareData, shareData, shareData, shareData, shareData, shareData, shareData, shareData, shareData, shareData, shareData, shareData, shareData, shareData, shareData, shareData
]

const GeneratorGread = () => {
    return (
        <> 
        {table.map((item) => {
            console.log(item)
            return <tr className="table_horizontal">
                {
                    shareData.map((gread) => (<td className="table_vertical">{gread.dailiesOne}</td>))
                }
            </tr>
        })}
        </>
    )
}

export default GeneratorGread;