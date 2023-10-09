import React from "react";
import "../styles/effect-box.css";
import "../styles/index.css"
import TypeBadge from "./type-badge";

function EffectBox() {
    return(
        <React.Fragment>
            <div className="center">
                <div className="dex-screen">
                    <TypeBadge />
                </div>
            </div>
        </React.Fragment>
    )
}

export default EffectBox;