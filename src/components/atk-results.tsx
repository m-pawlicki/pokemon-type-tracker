import { TYPEATK } from "./poke-type";
import "../styles/type-badge.css";
import "../styles/effect-box.css";

interface ATKProps {
    type: string;
    multiplier: number;
}

export function ATKResults({type, multiplier}: ATKProps) {

    function getATKEffectiveness(inputType: string, multiplier: number) {
        if (inputType === "none") { return []; }
        return Object.entries(TYPEATK[inputType])
        .filter(([k, v]) => v === multiplier)
        .map(([k, v]) => k);
    }

    let result = getATKEffectiveness(type, multiplier);


    if (result.length !== 0) {
        return(
            <>
            <div className="dex-screen">
                <h2 className="effect-title">Does {multiplier}× Damage To</h2>
                <div className="badge-box">
                {result.map((type) => (
                    <>
                        <span className="badge">
                            <p className="inner">
                            <span className={type + " name"}><img src={"./icons/" + type + ".svg"} className="icon" alt="icon" /> {type}</span>
                            </p>
                        </span>
                    </>
                )   
                    )}
                </div>
                </div>
            </>
            )}
    else {
            return(
            <></>
            );
    }
}

export default ATKResults;