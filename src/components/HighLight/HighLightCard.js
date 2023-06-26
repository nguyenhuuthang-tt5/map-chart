import { Grid, Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  wrapper: (props) => {
    if(props.type === 'confirmed') return { borderLeft: '5px solid #c9302c' };
    if(props.type === 'recovered') return { borderLeft: '5px solid #28a745' };
    else return { borderLeft: '5px solid gray' };
  }
})

export default function HighLightCard({ title, count, type }) {
  const styles = useStyles({ type });

  return (
    <Grid item xs={12} md={4}>
      <Card className={styles.wrapper}>
        <CardContent>
          <Typography component="p" variant="body2">
            {title}
          </Typography>
          <Typography component="span" variant="body2">
            {count}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
