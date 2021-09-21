import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import {
    MenuItem,
    FormControl,
    Select,
    Card,
    CardContent,
    Table,
} from "@material-ui/core";
import Infobox from "./Infobox";
import Tablecountry from "./Tablecountry";
import { sortcases, sortData, sortdeaths } from "./utili";
import Maps from "./Maps";

function App() {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState("Worldwide");
    const [countryInfo, setcountryInfo] = useState({ cases: "", deaths: "" });
    const [countryTable, setcountryTable] = useState([]);
    const [sorting, setsorting] = useState(0);
    var axios = require("axios").default;

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
                    if (sorting === 0) {
                        const sortedData = sortData(res.data.response);
                        setcountryTable(sortedData);
                    } else if (sorting === 1) {
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
                    console.log(info);
                });
            })
            .catch(function (error) {
                console.error(error);
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
                        title="New Cases"
                        cases={countryInfo.cases.new}
                        total={countryInfo.cases.total}
                    />
                    <Infobox
                        title="Active Cases"
                        cases={countryInfo.cases.active}
                        total={countryInfo.cases.total}
                    />
                    <Infobox
                        title="Critical Cases"
                        cases={countryInfo.cases.critical}
                        total={countryInfo.cases.total}
                    />
                    <Infobox
                        title="Recovered"
                        cases={countryInfo.cases.recovered}
                        total={countryInfo.cases.total}
                    />
                    <Infobox
                        title="Deaths"
                        cases={countryInfo.deaths.new}
                        total={countryInfo.deaths.total}
                    />
                </div>
                <Maps />
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
