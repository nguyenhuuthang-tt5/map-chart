import { Grid } from '@material-ui/core';
import React from 'react';
import HighLightCard from './HighLightCard';

export default function HighLight({ report }) {
    const data = report && report.length ? report[report.length - 1] : [];
    //
    const summary = [
        {
            id: 1,
            title: 'Số ca nhiễm',
            count: data.Confirmed,
            type: 'confirmed'
        },
        {
            id: 2,
            title: 'Số ca khỏi',
            count: data.Recovered,
            type: 'recovered'
        },
        {
            id: 3,
            title: 'Tử vong',
            count: data.Deaths,
            type: 'death'
        },
    ]
    return (
        <Grid container spacing={3}>
            {
                summary.map((data) => {
                    return <HighLightCard key={data.id} title={data.title} count={data.count} type={data.type} />
                })
            }
        </Grid>
    );
}