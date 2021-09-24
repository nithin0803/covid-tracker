import React from 'react'
import './App.css'
import numeral from "numeral";

function Tablecountry({countries,setsorting}) {
    const newCases= ()=>{
        setsorting(0)
        sessionStorage.setItem("sorting",0)
    }
    const cases= ()=>{
        setsorting(1)
        sessionStorage.setItem("sorting",1)
    }
    // const active= ()=>{
    //     setsorting(3)
    // }
    // const critical= ()=>{
    //     setsorting(4)
    // }
    // const recovered= ()=>{
    //     setsorting(5)
    // }
    const deaths= ()=>{
        setsorting(2)
        sessionStorage.setItem("sorting",2)
    }
    
    return (
        <div className="table">
                <tr>
                    <th>Country</th>
                    <th><button className="new" onClick={newCases}>New Cases</button></th>
                    <th>Active</th>
                    <th>Critical</th>
                    <th>Recovered</th>
                    {/* <th><button onClick={active}>Active Cases</button></th>
                    <th><button onClick={critical}>Critical Cases</button></th>
                    <th><button onClick={recovered}>Recovered</button></th> */}
                    <th><button className="cper" onClick={cases}>Cases/MP</button></th>
                    <th><button className="dper" onClick={deaths}>Deaths/MP</button></th>
                    
                </tr>
            {countries.map(({country,cases,deaths})=>(
                <tr>
                    <td>{country}</td>
                    <td>{numeral(cases.new).format("0,0")}</td>
                    <td>{numeral(cases.active).format("0,0")}</td>
                    <td>{numeral(cases.critical).format("0,0")}</td>
                    <td>{numeral(cases.recovered).format("0,0")}</td>
                    <td>{numeral(cases["1M_pop"]).format("0,0")}</td>
                    <td>{numeral(deaths["1M_pop"]).format("0,0")}</td>
                </tr>

            )) }
            
        </div>
    )
}

export default Tablecountry
