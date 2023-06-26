import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import HighMap from '../Chart/HighMap';
import LineChart from '../Chart/LineChart';

export default function Summary({ report, selectedCountryId }) {
    const [mapData, setMapData] = useState({});
    //
    useEffect(() => {
        if(selectedCountryId) {
            import(
                `@highcharts/map-collection/countries/${selectedCountryId}/${selectedCountryId}-all.geo.json`).then((res) => setMapData(res))
            .catch((error) => console.log({ error }));
        }
    }, [selectedCountryId])
    return (
        <Grid container spacing={3}>
            <Grid item md={8} xs={12}>
                <LineChart data={report}/>
            </Grid>
            <Grid item md={4} xs={12}>
                <HighMap mapData={mapData}/>
            </Grid>
        </Grid>
    );
}