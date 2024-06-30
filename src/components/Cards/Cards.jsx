import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: { cases, recovered, deaths, updated } }) => {
    if (!cases) {
        return 'Loading...';
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={9} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography gutterBottom>Infected</Typography>
                        <Typography variant="h5" className={styles.inf}>
                            <CountUp start={0} end={cases} duration={2.5} separator="," />
                        </Typography>
                        <Typography>{new Date(updated).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={9} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography gutterBottom>Recovered</Typography>
                        <Typography variant="h5" className={styles.rec}>
                            <CountUp start={0} end={recovered} duration={2.5} separator="," />
                        </Typography>
                        <Typography>{new Date(updated).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={9} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography gutterBottom>Deaths</Typography>
                        <Typography variant="h5" className={styles.dea}>
                            <CountUp start={0} end={deaths} duration={2.5} separator="," />
                        </Typography>
                        <Typography>{new Date(updated).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;
