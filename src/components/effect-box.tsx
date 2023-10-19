import TypeBadge from "./type-badge";
import { PageType, TypeSelection } from "./type-selector";

interface EffectBoxProps {
    typeSelector: TypeSelection;
}

function EffectBox({ typeSelector }: EffectBoxProps) {

    return (
        <>
            <div className="dex-color">
                { renderBadges(typeSelector) }
            </div>
        </>
    );
}

function renderBadges(typeSelector: TypeSelection) {
    switch(typeSelector.page) {
        case PageType.ATTACK:
            return renderAttack(typeSelector.firstType);
        case PageType.DEFENSE:
            return renderDefense(typeSelector.firstType, typeSelector.secondType);
    }
}

function renderAttack(type: string) {
    return <TypeBadge firstType={type} secondType="none" pageType='ATK' />
}

function renderDefense(typeOne: string, typeTwo: string) {
    return <TypeBadge firstType={typeOne} secondType={typeTwo} pageType='DEF' />
}

export default EffectBox;