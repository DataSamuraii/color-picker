import {rerenderEntireTree} from "../index";
export let store = {
    state:{
        r: 0,
        g: 0,
        b: 0,
        rgbColor: ''
    },
    onChange(r, g, b) {
        this.state.rgbColor = `rgb(${r}, ${g}, ${b})`
        rerenderEntireTree();
    },
    onSubmit(r, g, b) {
        this.state.r = r;
        this.state.g = g;
        this.state.b = b;
    },
}
