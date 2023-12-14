import React, { useState } from "react";

import AsyncSelect, { useAsync } from "react-select/async";
import { useForm } from "react-hook-form";

export default function Country() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLeague, setSelectedLeague] = useState("");

  async function promiseOptionsCountry(inputValue: String) {
    const url = "https://basketball-highlights-api.p.rapidapi.com/countries";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d3a5b34ba8msh9ac7e9cbb4859dfp11808djsncf2e1658c256",
        "X-RapidAPI-Host": "basketball-highlights-api.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
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

  async function promiseOptionsLeague(inputValue: String) {
    const url = `https://basketball-highlights-api.p.rapidapi.com/leagues?countryName=${selectedCountry}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d3a5b34ba8msh9ac7e9cbb4859dfp11808djsncf2e1658c256",
        "X-RapidAPI-Host": "basketball-highlights-api.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const names = result.map(function (item: any) {
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
        value={selectedCountry}
        defaultOptions
        onChange={(option: any) => {
          setSelectedCountry(option.name);
        }}
        loadOptions={promiseOptionsCountry}
      />
      {!(selectedCountry === "") && (
        <AsyncSelect
          cacheOptions
          value={selectedLeague}
          defaultOptions
          onChange={(option: any) => {
            setSelectedLeague(option.name);
          }}
          loadOptions={promiseOptionsLeague}
        />
      )}
    </div>
  );
}
