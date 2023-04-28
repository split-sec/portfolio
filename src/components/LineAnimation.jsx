import { useEffect, useState } from "react";

export default function LineAnimation({ timing=500, children, className }) {
    const [ hover, setHover ]= useState(false);

    const style = {
        display: 'block',
        height: '5px',
        backgroundColor: '#fff',
        width: hover ? '100%' : '0', 
        transition: `width ${timing}ms`,
      };

    function trigger() {
        if(hover === false) {
            setHover(true);
        }
        else {
            setHover(false);
        }
    }

    return (
        <span onMouseEnter={trigger} onMouseLeave={trigger} className={className}>
            {children}
            <div style={style}></div>
        </span>
    );
}