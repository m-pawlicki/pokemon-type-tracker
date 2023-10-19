import { TYPEDEF } from "./poke-type";
import "../styles/type-badge.css";
import "../styles/effect-box.css";
import { MULTIPLIER } from "./type-badge";

interface DEFProps {
    typeOne: string;
    typeTwo: string;
    multiplier: number;
}

function DEFResults({typeOne, typeTwo, multiplier}: DEFProps) {

    function getDEFEffectiveness(inputTypeOne: string, inputTypeTwo: string, multiplier: number) {
        if (inputTypeOne === "none" && inputTypeTwo === "none") { return []; }
        else if (inputTypeOne === inputTypeTwo) {
        //If they're the same, just return either one once. Might make it so one is unable to pick the same type twice from the drop-downs in the future.
        return filteredTypes(inputTypeOne, multiplier);
        }
        else if (inputTypeTwo === "none") {
        return filteredTypes(inputTypeOne, multiplier);
        }
        else if (inputTypeOne === "none") {
        return filteredTypes(inputTypeTwo, multiplier);
        }
        let entriesOne = Object.entries(TYPEDEF[inputTypeOne]);
        let entriesTwo = Object.entries(TYPEDEF[inputTypeTwo]);
        let result: any = {};
        for (const [ok, ov] of entriesOne) {
        for(const [ik, iv] of entriesTwo) {
            if (ok === ik) {
            result[ok] = (ov*iv);
            }
        }
        }
        return Object.entries(result)
        .filter(([k, v]) => v === multiplier)
        .map(([k, v]) => k);
    }

    function filteredTypes(input: string, multiplier: number) {
        return Object.entries(TYPEDEF[input])
        .filter(([k, v]) => Number(v) === multiplier)
        .map(([k, v]) => k);
    }

    let result = getDEFEffectiveness(typeOne, typeTwo, multiplier);

    let multiText;
    switch(multiplier) {
        case MULTIPLIER.QUADRUPLE:
            multiText = "4";
            break;
        case MULTIPLIER.DOUBLE:
            multiText = "2";
            break;
        case MULTIPLIER.BASE:
            multiText = "1";
            break;
        case MULTIPLIER.HALF:
            multiText = "½";
            break;
        case MULTIPLIER.QUARTER:
            multiText = "¼";
            break;
        case MULTIPLIER.NONE:
            multiText = "0";
            break;
    }


    if (result.length !== 0) {
        return(
            <>
                <div className="dex-screen">
                <h2 className="effect-title">Takes {multiText}× Damage From</h2>
                <div className="badge-box">
                {result.map((type) => (
                    <>
                        <span className="badge">
                            <p className="inner">
                            <span className={type + " name"}><img src={"icons/" + type + ".svg"} className="icon" alt="icon" /> {type}</span>
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

export default DEFResults;