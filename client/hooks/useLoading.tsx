import React, { useEffect, useState } from 'react'

function useLoading() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3500);
    }, []);

    return [loading, setLoading];
}

export default useLoading