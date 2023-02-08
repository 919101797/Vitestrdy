
import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';

const EffectDemo = () => {
    const [count, setCount] = useState(1);
    const box1 = useRef()
    const box2 = useRef()
    useEffect(function useEffectDemo() {
        console.log('useEffect:', count);
        const ele = box1.current 
        if(ele && (count%2 === 0)) {
           setTimeout(()=> {
            ele.style.left = '500px'
        },1000) 
        }else{
            ele &&  (ele.style.left = '0px')
        }
      
    }, [count]);
    useLayoutEffect(function useLayoutEffectDemo() {
        console.log('useLayoutEffect:', count);
        const ele = box2.current 
        if(ele && (count%2 === 0)) {
            setTimeout(()=> {
                ele.style.left = '500px'
            },1000) 
        }else{
            ele &&  (ele.style.left = '0px')
        }

    }, [count]);
    return <div style={{position: 'relative'}}>
    <button onClick = { ()=> { setCount(count+1)}} >点击</button>
    <div  ref = {box1} style={{position: 'absolute', width: '200px', height: '200px', backgroundColor: 'red'}} >layout</div>
    <div ref = {box2} style={{position: 'absolute', width: '200px', height: '200px', backgroundColor: 'green', top:'220px'}}>effect</div>
    </div>
};


export default EffectDemo;

