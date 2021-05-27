import React, { useState} from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    position: relative;
    width: 50vw;
    height: 50vh;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span{
        font-size: 40px;
    }
`;

const CounterButtons = styled.div`
    position: relative;
    margin-top: 20px;
`;

const Button = styled.button`
    width: 150px;
    height: 50px;
    margin: 0 20px;
`;


const CountComponent = () => {
    const [counter, setCount] = useState(0);

    function handleCounter(e,increase){
        e.preventDefault();
        if(increase)
            setCounterIncrease();
        else
            setCounterDecrease();
    }

    function setCounterIncrease(){
        if(counter == 10){
            alert("El contador no se puede incrementar mas");
        }
        else{
            console.log('counter ', counter)
            setCount(counter + 1);
        }
    }

    function setCounterDecrease(){
        if(counter == 0){
            alert("El contador no se puede decrementar mas");
        }
        else{
            setCount(counter - 1);
        }
    }

    return (
        <StyledWrapper>
            <div className="counter">
                <span>{counter}</span>
            </div>
            <CounterButtons className="counter__buttons">
                <Button className="increase" onClick={e => handleCounter(e,true)}>
                    <p>Increase</p>
                </Button>
                <Button className="decrease" onClick={e => handleCounter(e,false)}>
                    <p>Decrease</p>
                </Button>
            </CounterButtons>
        </StyledWrapper>
    );
};

export default CountComponent
