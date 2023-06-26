import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@material-ui/core';
import React from 'react';

export default function CountrySelector({ value, handleOnchange, countries }) {
    return (
        <FormControl>
            <InputLabel htmlFor='country-selector' shrink >Quốc gia</InputLabel>
            <NativeSelect 
                value={value} 
                onChange={handleOnchange} 
                inputProps={{ 
                    name: 'country', 
                    id: 'country-selector' 
                }}
            >
                {
                    countries.map((country) => {
                        return <option key={country.Slug} value={country.ISO2.toLowerCase()}>{ country.Country }</option>
                    })
                }
            </NativeSelect>
            <FormHelperText>Select your country</FormHelperText>
        </FormControl>
    );
}