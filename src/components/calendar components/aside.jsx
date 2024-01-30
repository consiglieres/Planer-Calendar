import React from "react";
import { useState } from 'react';
// import { table } from "../../scripts/generationtable";
import { tableArrayX } from "../table.jsx";

export default function Aside(){


    return(<aside>
        <table>
            <tr>
                {tableArrayX.map(tableArrayX => <td id="table__x">{tableArrayX.name}</td>)}
            </tr>
        </table>
    </aside>)
};