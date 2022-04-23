import React from "react";

const RenderLocationItem = (po) => {
    return (
        <>
            {po.location.fullFront ? "Full Front: " : "" }
            {po.location.fullFront && po.location.fullFront.flashes} {po.location.fullFront ? "flash(es), " : "" }
            {po.location.fullFront && po.location.fullFront.spots} {po.location.fullFront ? "color(s)" : "" }
            <div></div>

            {po.location.fullBack ? "Full Back: " : "" }
            {po.location.fullBack && po.location.fullBack.flashes} {po.location.fullBack ? "flash(es), " : "" }
            {po.location.fullBack && po.location.fullBack.spots} {po.location.fullBack ? "color(s)" : "" }
            <div></div>

            {po.location.rightSleeve ? "Right Sleeve: " : "" }
            {po.location.rightSleeve && po.location.rightSleeve.flashes} {po.location.rightSleeve ? "flash(es), " : "" }
            {po.location.rightSleeve && po.location.rightSleeve.spots} {po.location.rightSleeve ? "color(s)" : "" }
            <div></div>
            {po.location.leftSleeve ? "Left Sleeve:" : "" }
            {po.location.leftSleeve && po.location.leftSleeve.flashes} {po.location.leftSleeve ? "flash(es)" : "" }
            {po.location.leftSleeve && po.location.leftSleeve.spots} {po.location.leftSleeve ? "color(s)" : "" }
            <div></div>
            {po.location.rightChest ? "Right Chest: " : "" }
            {po.location.rightChest && po.location.rightChest.flashes} {po.location.rightChest ? "flash(es), " : "" }
            {po.location.rightChest && po.location.rightChest.spots} {po.location.rightChest ? "color(s)" : "" }
            <div></div>
            {po.location.leftChest ? "Left Chest:" : "" }
            {po.location.leftChest && po.location.leftChest.flashes} {po.location.leftChest ? "flash(es)" : "" }
            {po.location.leftChest && po.location.leftChest.spots} {po.location.leftChest ? "color(s)" : "" }
        </>

    )

}

export default RenderLocationItem;