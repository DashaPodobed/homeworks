import React, { useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const onChangeRange = (newValue: number) => {
        setValue1(newValue)
    }

    const [value, setValue] = React.useState<number[]>([20, 80]);

    const onChangeSuperDoubleRange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[])
    };

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    onChangeRange={onChangeRange}
                />
            </div>

            <div>
                <span>{value[0]}</span>

                <SuperDoubleRange
                    value={value}
                    onChangeSuperDoubleRange={onChangeSuperDoubleRange}
                />

                <span>{value[1]}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11
