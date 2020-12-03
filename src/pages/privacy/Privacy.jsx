import React, { useEffect } from "react";
import pdf from "../../images/Privacy.pdf";

const Privacy = () => {
    useEffect(() => {
        window.open(pdf);
    });

    return <div className="page" />;
};

export default Privacy;
