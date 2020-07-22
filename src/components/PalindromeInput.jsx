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
                hasWrite &&
                    ((isPalindrome) ? <p className="palindrome__valid">Yes, it is! 😃</p> : <p className="palindrome__invalid">No, is not 😕</p>)
            }
        </div>
    )
};

export default PalindromeInput