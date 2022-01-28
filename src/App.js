import s from './App.module.css';
import React from "react";
import blocks from './pictures/PixelBlocks.svg';

let r = 0, g = 0, b = 0;

let App = props => {
    let redColor = React.createRef();
    let blueColor = React.createRef();
    let greenColor = React.createRef();
    let configBlock = React.createRef();
    let checkBox = React.createRef();

    let changeColor = () => {
        r = redColor.current.value;
        g = greenColor.current.value;
        b = blueColor.current.value;
        props.onChange(r, g, b);
    }
    let onSubmit = () => {
        props.onSubmit(r, g, b);
    }
    let onCancel = () => {
        r = props.state.r;
        g = props.state.g;
        b = props.state.b;
        props.onChange(r, g, b);
        redColor.current.value = r;
        greenColor.current.value = g;
        blueColor.current.value = b;
        checkBox.current.checked = false;
        onSlidersBlockToggle();
    }
    let onSlidersBlockToggle = () => {
        configBlock.current.classList.toggle(s.toggleState);
    }

    return (
        <div>
            <h3>Color Picker</h3>
            <main>
                <div className={s.colorSquare}
                     style={{backgroundColor: props.state.rgbColor}}/>
                <input type="checkbox"
                       className={s.checkBox}
                       onClick={onSlidersBlockToggle}
                       ref={checkBox}/>
                <div className={s.configBlock} ref={configBlock}>
                    <div className={s.sliders}>
                        <input type='range' onChange={changeColor} ref={redColor} min="0" max="255" defaultValue='0'/>
                        R {r}
                        <input type='range' onChange={changeColor} ref={greenColor} min="0" max="255" defaultValue='0'/>
                        G {g}
                        <input type='range' onChange={changeColor} ref={blueColor} min="0" max="255" defaultValue='0'/>
                        B {b}
                    </div>
                    <div className={s.buttons}>
                        <button onClick={onCancel}>Cancel</button>
                        <button onClick={onSubmit}>Submit</button>
                    </div>
                </div>
            </main>
            <img src={blocks}/>
        </div>
    );
}

export default App;
