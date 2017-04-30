export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_DIFF = 'SET_DIFF';

export const increment = () =>  {
    return {
        type: INCREMENT
    };
};

export const decrement = () =>  {
    return {
        type: DECREMENT
    };
};

export const setDiff = (value) =>  {
    return {
        type: SET_DIFF,
        diff: value
    };
};


