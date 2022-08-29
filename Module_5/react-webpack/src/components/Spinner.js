import React from "react";

import Loading from '../asset/images/loading.gif';

function Spinner(){
    return (
        <div className="d-flex">
            <img className="loading" src={Loading} alt="" />
        </div>
    )
}

export default Spinner;