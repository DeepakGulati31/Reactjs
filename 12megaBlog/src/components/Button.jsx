import React from 'react'

function Button({
    children,                            //children  yha pe text h jo bhi button me text dege
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`} {...props}>
            {children}
        </button>
    )
}

export default Button


// example of forward ref is:
// we are making a login form and us login form me ek inputfield  alg h or vahi same  inputfield username password  hr jgh use krege
// or ek jgh hmara login page h inputfield  ka refernce login page me chaiye to use krege forwardref