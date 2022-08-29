import React from "react";

export type ContactItemPropsType = {
    description: string
    value: string
}

export const ContactItem = ({description, value}: ContactItemPropsType) => {
    return (
        <div>
            <strong>
                <span>{`${description}:`}</span>
            </strong>
            <span>{value}</span>
        </div>
    )
}