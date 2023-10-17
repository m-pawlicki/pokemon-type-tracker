import { TYPEATK } from "./poke-type";
import "../styles/type-badge.css";

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
            <h2>Does {multiplier}× Damage To</h2>
            {result.map((type) => (
                <>
                    <div className="badge">
                        <p className="inner">
                        <span className={type + " name"}><img src={"icons/" + type + ".svg"} className="icon" /> {type}</span>
                        </p>
                    </div>

                </>
            )
                
                )}
            </>
            )}
    else {
            return(
            <></>
            );
    }
}

export default ATKResults;