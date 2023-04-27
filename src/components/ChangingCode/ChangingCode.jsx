import { useEffect, useState } from 'react';

export default function ChangingCode({ code }) {
    const [typedCode, setTypedCode] = useState("");
  
    useEffect(() => {
      let i = 0;
      const intervalId = setInterval(() => {
        if (i >= code.length) {
          clearInterval(intervalId);
        } else {
          setTypedCode((prevTypedCode) => prevTypedCode + code.charAt(i));
          i++;
        }
      }, 100); // the interval between every character and next one, in milliseconds
  
      return () => {
        clearInterval(intervalId);
      };
    }, [code]);

    return (
        <div className='whitespace-pre text-xxs leading-3 p-2 font-mono'>
            {typedCode}
        </div>
    );
}