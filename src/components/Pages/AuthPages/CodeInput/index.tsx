import React, { useState } from 'react'

const CodeInput = () => {

    const [code, setCode] = useState(['', '', '', '', '']);

    const handleChange = (i: number, value: string) => {
        const newCode = [...code];
        newCode[i] = value;
        setCode(newCode);
    }


    return (
        <div className="w-full flex justify-between" dir='ltr'>
            {
                code.map((_, i) => (
                    <input
                        key={i}
                        type="text"
                        maxLength={1}
                        value={code[i]}
                        onChange={(e) => handleChange(i, e.target.value)}
                        className="outline-0 bg-[#F5F5F5] w-[76px]
                         h-fit px-8 py-4 rounded-[40px] text-xl border border-[#DDDDDD]"
                    />
                ))
            }
        </div>
    )
}

export default CodeInput