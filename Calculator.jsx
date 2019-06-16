import React from "react";

export default class Calculator extends React.Component {
    constructor(props) {
        super();
        this.state = {
            result: null,
            num1: null,
            num2: null,
            token: "+",
            arr: [],
            ishow: true
        }
        // this.clickSave = this.clickSave.bind(this);
    }

    show () {
        this.setState({ishow : !this.state.ishow})
    }
    clickSave() {
        this.props.save(this.state.arr = this.state.num1 + this.state.token + this.state.num2 + "=" + this.state.result);
    }
    innum1() {
        this.setState({ num1: event.target.value });
    }
    innum2() {
        this.setState({ num2: event.target.value });
    }
    select() {
        this.setState({ token: event.target.value });
    }
    res() {
        switch (this.state.token) {
            case "+":
                return this.setState({ result: this.state.result = +this.state.num1 + +this.state.num2 });
            case "-":
                return this.setState({ result: this.state.result = +this.state.num1 - +this.state.num2 });
            case "*":
                return this.setState({ result: this.state.result = +this.state.num1 * +this.state.num2 });
            case "/":
                if (this.state.num2 == 0) return alert("На ноль делить нельзя!")
                return this.setState({ result: this.state.result = +this.state.num1 / +this.state.num2 });
        }
    }
    render() {
        const shows = this.state.ishow && <p style = {{textAlign: "center"}}><font color="#008080"><i></i><big>{this.state.num1 + this.state.token + this.state.num2 + "=" + this.state.result}</big></font></p>
        return <div>
            <input type="number" value={this.state.num1} onChange={this.innum1.bind(this)} size="10" placeholder="Введите число" />
            <select name="select" value={this.state.token} onChange={this.select.bind(this)}>
                <option selected value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input type="number" value={this.state.num2} onChange={this.innum2.bind(this)} size="10" placeholder="Введите число" />
            <button onClick={this.res.bind(this)}>=</button>
            <span> {this.state.result} </span>
            <div>
                <br />
                <button onClick={this.clickSave.bind(this)}>Сохранить</button>
                <br />                
                {shows}
                <br/>
                <button onClick = {this.show.bind(this)}>{this.state.ishow ? 'Скрыть' : 'Показать'}</button>     
                <span><font color="red" ><b><em><h2>История:</h2></em></b></font></span>
            </div>
        </div>
    }
}

