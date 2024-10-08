import React from 'react'

const usePrevious = (value: string) => {
    const ref = React.useRef(value)

    React.useEffect(() => {
        ref.current = value
    }, [value])
    return ref.current
}

export default usePrevious