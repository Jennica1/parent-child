import { useState } from "react";
import ChildTwo from "./ChildTwo";

export default function ParentTwo() {
    const [data, setData] = useStae();

    const childToParent = (childData) => {
        setData(childData);
    }
    return (
        <>
            {data}
            <ChildTwo childParent={childToParent}/>
        </>
    )
}