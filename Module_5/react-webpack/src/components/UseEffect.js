// mounted: khi 1 component được gán vào trong DOM
// unmouted: khi 1 component được gỡ khỏi DOM

// useEffect
// Side Effect: DOM thay đổi, dữ liệu thay đổi
// + callback sẽ luôn được gọi khi component được mounted DOM

// useEffect(callback)
// + callback sẽ được gọi khi state thay đổi

// useEffect(callback, [])

// useEffect(callback, [deps])

import React, { useState } from "react";
import Toggle from "./Toggle";
function UseEffect() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {
                show || <Toggle />
            }
        </div>

    )
}

export default UseEffect;