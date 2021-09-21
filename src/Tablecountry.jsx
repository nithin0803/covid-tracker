import React from 'react'
import './App.css'

function Tablecountry({countries,setsorting}) {
    const newCases= ()=>{
        setsorting(0)
    }
    const cases= ()=>{
        setsorting(1)
    }
    const deaths= ()=>{
        setsorting(2)
    }
    
    return (
        <div className="table">
                <tr>
                    <th>Country</th>
                    <th><button onClick={newCases}>New Cases</button></th>
                    <th><button onClick={cases}>Cases/MP</button></th>
                    <th><button onClick={deaths}>Deaths/MP</button></th>
                </tr>
            {countries.map(({country,cases,deaths})=>(
                <tr>
                    <td>{country}</td>
                    <td>{cases.new}</td>
                    <td>{cases["1M_pop"]}</td>
                    <td>{deaths["1M_pop"]}</td>
                </tr>

            )) }
            
        </div>
    )
}

export default Tablecountry
