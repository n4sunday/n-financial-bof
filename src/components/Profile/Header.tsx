import React from 'react';

import DisplayName from './DisplayName';

interface IProps {
    text: string;
}

const Header = ({ text }: IProps) => {
    return (
        <div className="flex justify-between">
            <div className="text-4xl font-bold">{text}</div>
            <div>
                <DisplayName />
            </div>
        </div>
    )
}

export default Header