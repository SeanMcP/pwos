import React from 'react'
import classList from '@seanmcp/class-list'

import './Button.scss'

function Button({ children, className, modifiers = [], ...props }) {
    const fullModifiers = modifiers.map(mod => `Button--${mod}`)
    return (
        <button
            className={classList(
                'Button',
                props.type && `Button--${props.type}`,
                className,
                ...fullModifiers
            )}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
