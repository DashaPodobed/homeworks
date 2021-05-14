import React from "react";
import {makeStyles, Slider, Typography} from "@material-ui/core";

type SuperDoubleRange = {
    value: number[]
    onChangeSuperDoubleRange: (event: any, newValue: number | number[]) => void
}
const SuperDoubleRange: React.FC<SuperDoubleRange> = (
    {
        value,
        onChangeSuperDoubleRange

    }
) => {
    const useStyles = makeStyles({
        root: {
            width: 300,
        },
    });

    const classes = useStyles();

    function valuetext(value: number) {
        return `${value}°C`;
    }

    return (

        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
            </Typography>
            <Slider
                value={value}
                onChange={onChangeSuperDoubleRange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </div>
    )
}
export default SuperDoubleRange