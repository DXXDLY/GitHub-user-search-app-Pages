import React, { useEffect, useState } from 'react'

const useFormattedDate = (data) => {
    const [formattedDate, setFormattedDate] = useState('')
    useEffect(() => {
        const date = new Date(data);
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        setFormattedDate(formattedDate)
    }, [data])
    return formattedDate
}

export default useFormattedDate