import React, {useState} from 'react';

const PalindromeInput = () => {

    const [isPalindrome, setIsPalindrome] = useState(false)
    const [hasWrite, setHasWrite] = useState(false)

    const handleChange = event => {
        const original = event.target.value;
        const formatOriginal = original.toLowerCase().replace(/ /g, '');
        setHasWrite(Boolean(formatOriginal))
        const reversed = formatOriginal.split('').reverse().join('');
        setIsPalindrome(formatOriginal === reversed)
    };

    return (
        <div className="palindrome">
            <input className="palindrome__input" type="text" onChange={handleChange}/>
            {
                hasWrite && ((isPalindrome) ? <p>Yes, it is! :D</p> : <p>No, is not :C</p>)
            }
        </div>
    )
};

export default PalindromeInput