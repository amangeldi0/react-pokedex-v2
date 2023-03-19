interface getNormalHeightWeightReturn {
    height: string;
    weight: string;
    lbs: string;
    feet: string;
}

const toLbs = (value: number): string => {
    const math = Math.floor(value * 2.2);
    return math
        .toString()
        .split('')
        .slice(0, math.toString().length - 1)
        .join('');
};

const toFeet = (value: number): string => {
    const math = value * 3.280839895;
    return math
        .toString()
        .split('')
        .slice(0, math.toString().split('').indexOf('.') + 2)
        .join('');
};

export const getNormalWeightHeight = (
    height: number,
    weight: number,
): getNormalHeightWeightReturn => {
    const weightLength: number = weight.toString().length;
    const heightLength: number = height.toString().length;

    const resultHeight: string = height
        .toString()
        .split('')
        .slice(0, heightLength - 1)
        .join('');
    const resultWeight: string = weight
        .toString()
        .split('')
        .slice(0, weightLength - 1)
        .join('');

    const lbs: string = toLbs(weight);
    const feet: string = toFeet(height);
    if (weightLength === 1 || heightLength === 1) {
        return {
            height: `0.${height}`,
            weight: `${resultWeight}.${weight.toString().split('')[weightLength - 1]}`,
            lbs,
            feet,
        };
    }

    return {
        height: `${resultHeight}.${height.toString().split('')[heightLength - 1]}`,
        weight: `${resultWeight}.${weight.toString().split('')[weightLength - 1]}`,
        lbs,
        feet,
    };
};
