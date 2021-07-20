import React from 'react';
import { ProfileStore } from '../../store';

const DisplayName = () => {
    const { user } = ProfileStore()
    return <div className="rounded-3xl w-[220px] flex flex-col items-end">
        <div className="text-xl font-bold">
            {user?.name}
        </div>
        <div>
            {user?.email}
        </div>
    </div>
}

export default DisplayName