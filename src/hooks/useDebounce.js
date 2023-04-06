// import { useState, useEffect } from "react";

// export default function useDebounce(value, delay) {
//     const [debounceValue, setDebounceValue] = useState(value);
//     useEffect(() => {
//         const debounceId = setTimeout(() => setDebounceValue(value), delay);
//         return clearTimeout(debounceId);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [value]);
//     return debounceValue;
// }

import { useState, useEffect } from "react";

function useDebounce(value, delay) {
    const [debounceValue, setdebounceValue] = useState(value);

    useEffect(() => {
        const delayId = setTimeout(() => setdebounceValue(value), delay);
        return () => clearTimeout(delayId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return debounceValue;
}

export default useDebounce;
