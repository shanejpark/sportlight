import React, { useState } from "react";

import AsyncSelect from "react-select/async";

interface props {
  selectedCountry: String;
  setSelectedCountry: Function;
  setSelectedLeague: Function;
}

export default function Country(props:props) {

  async function promiseOptionsCountry(inputValue: String) {
    const url = "https://basketball-highlights-api.p.rapidapi.com/countries";
    try {
      const response = await fetch(url, {
        method: "GET",
        cache: "force-cache",
        headers: {
          "X-RapidAPI-Key":
            "aa1fff7c82msh9d775d577faf9b8p16bed0jsne2743caa5c6a",
          "X-RapidAPI-Host": "basketball-highlights-api.p.rapidapi.com",
        },
      });
      const result = await response.json();
      const names = result.map(function (item: any) {
        return { label: item["name"], value: item["name"] };
      });
      console.log("wow");
      return names.filter((i: any) =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function promiseOptionsLeague(inputValue: String) {
    const url = `https://basketball-highlights-api.p.rapidapi.com/leagues?countryName=${selectedCountry}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        cache: "force-cache",
        headers: {
          "X-RapidAPI-Key":
            "aa1fff7c82msh9d775d577faf9b8p16bed0jsne2743caa5c6a",
          "X-RapidAPI-Host": "basketball-highlights-api.p.rapidapi.com",
        },
      });
      const result = await response.json();
      const names = result.data.map(function (item: any) {
        return { label: item["name"], value: item["name"] };
      });
      return names.filter((i: any) =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <AsyncSelect
        cacheOptions
        defaultOptions
        onChange={(option: any) => {
          props.setSelectedCountry(option.label);
        }}
        loadOptions={promiseOptionsCountry}
      />
      {!(props.selectedCountry === "") && (
        <AsyncSelect
          cacheOptions
          defaultOptions
          onChange={(option: any) => {
            props.setSelectedLeague(option.label);
          }}
          loadOptions={promiseOptionsLeague}
        />
      )}
    </div>
  );
}
