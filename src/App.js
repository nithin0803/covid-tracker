import React, { useState, useEffect } from "react";
import "./App.css";

import {
    MenuItem,
    FormControl,
    Select,
    Card,
    CardContent,
}
from "@material-ui/core";
import Infobox from "./Infobox";
import Tablecountry from "./Tablecountry";
import { sortcases, sortData, sortdeaths, prettyPrintStat } from "./utili";
import Map from "./Maps";
import "leaflet/dist/leaflet.css";

function App() {
    const [countries, setCountries] = useState([]); // list of countries
    const [country, setCountry] = useState("Worldwide"); // country data
    const [countryInfo, setcountryInfo] = useState({ cases: "", deaths: "" });
    const [countryTable, setcountryTable] = useState([]);
    const [sorting, setsorting] = useState(
        !(sessionStorage.length == 0) ? sessionStorage.getItem("sorting") : "0"
    );
    const [mapcenter, setmapcenter] = useState({
        lat: 34.80746,
        lng: -40.4796,
    });
    const [mapzoom, setmapzoom] = useState(2.5);
    const [mapCountries, setmapCountries] = useState([]);
    const [casesType, setCasesType] = useState("cases");
    var axios = require("axios").default;
    const API__KEY = "080aeac5d59dd216460bb96cf19b628e";

    var options = {
        method: "GET",
        url: "https://covid-193.p.rapidapi.com/countries",
        headers: {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key":
                "5331161f74msh91a258668af46e8p1385b8jsn9957d239ba6c",
        },
    };
    useEffect(() => {
        async function fetchalldata() {
            var options4 = {
                method: "GET",
                url: "https://covid-193.p.rapidapi.com/statistics",
                headers: {
                    "x-rapidapi-host": "covid-193.p.rapidapi.com",
                    "x-rapidapi-key":
                        "5331161f74msh91a258668af46e8p1385b8jsn9957d239ba6c",
                },
            };
            await axios
                .request(options4)
                .then(function (res) {
                    if (sorting == 0) {
                        const sortedData = sortData(res.data.response);
                        setcountryTable(sortedData);
                    } else if (sorting == 1) {
                        const sortedData = sortcases(res.data.response);
                        setcountryTable(sortedData);
                    } else {
                        const sortedData = sortdeaths(res.data.response);
                        setcountryTable(sortedData);
                    }
                })
                .catch(function (error) {
                    console.error(error);
                });
            fetch("https://disease.sh/v3/covid-19/countries")
                .then((response) => response.json())
                .then((data) => {
                    setmapCountries(data);
                });
        }
        fetchalldata();
    }, [sorting]);

    useEffect(() => {
        async function fetchworldwide() {
            var options3 = {
                method: "GET",
                url: "https://covid-193.p.rapidapi.com/statistics?country=all",
                headers: {
                    "x-rapidapi-host": "covid-193.p.rapidapi.com",
                    "x-rapidapi-key":
                        "5331161f74msh91a258668af46e8p1385b8jsn9957d239ba6c",
                },
            };
            await axios
                .request(options3)
                .then(function (res) {
                    res.data.response.map((info) => {
                        setcountryInfo(info);
                    });
                })
                .catch(function (error) {
                    console.error(error);
                });
        }
        fetchworldwide();
    }, []);

    useEffect(() => {
        const getCountries = async () => {
            await axios.request(options).then(function (res) {
                setCountries(res.data.response);
            });
        };
        getCountries();
        return () => {};
    }, []);

    const onCountryChange = async (event) => {
        const countryCode = event.target.value;
        setCountry(event.target.value);
        const URL =
            countryCode === "Worldwide"
                ? "https://covid-193.p.rapidapi.com/statistics?country=all"
                : `https://covid-193.p.rapidapi.com/statistics?country=${countryCode}`;
        var options2 = {
            method: "GET",
            url: URL,
            headers: {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key":
                    "5331161f74msh91a258668af46e8p1385b8jsn9957d239ba6c",
            },
        };
        await axios
            .request(options2)
            .then(function (res) {
                res.data.response.map((info) => {
                    setcountryInfo(info);
                });
            })
            .catch(function (error) {
                console.error(error);
            });
        await fetch(`https://disease.sh/v3/covid-19/countries/${countryCode}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

                setmapcenter([data.countryInfo.lat, data.countryInfo.long]);
                setmapzoom(4);
            });
    };

    return (
        <div className="App">
            <div className="app__left">
                <div className="header">
                    <h1>COVID-19 TRACKER</h1>
                    <FormControl className="app__dropdown">
                        <Select
                            variant="outlined"
                            onChange={onCountryChange}
                            value={country}
                        >
                            <MenuItem value="Worldwide">Worldwide</MenuItem>
                            {countries.map((country) => (
                                <MenuItem value={country}>{country}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                <div className="status">
                    <Infobox
                        isRed
                        onClick={(e) => setCasesType("cases")}
                        active={casesType === "cases"}
                        title="New Cases"
                        cases={prettyPrintStat(countryInfo.cases.new)}
                        total={prettyPrintStat(countryInfo.cases.total)}
                    />

                    <Infobox
                        onClick={(e) => setCasesType("recovered")}
                        active={casesType === "recovered"}
                        title="Recovered"
                        cases={prettyPrintStat(countryInfo.cases.recovered)}
                        total={prettyPrintStat(countryInfo.cases.total)}
                    />
                    <Infobox
                        isRed
                        onClick={(e) => setCasesType("deaths")}
                        active={casesType === "deaths"}
                        title="Deaths"
                        cases={prettyPrintStat(countryInfo.deaths.new)}
                        total={prettyPrintStat(countryInfo.deaths.total)}
                    />
                </div>
                <Map
                    countries={mapCountries}
                    casesType={casesType}
                    center={mapcenter}
                    zoom={mapzoom}
                />
            </div>
            <Card className="app__right">
                <CardContent>
                    <Tablecountry
                        countries={countryTable}
                        setsorting={setsorting}
                    />
                </CardContent>
            </Card>
        </div>
    );
}

export default App;
