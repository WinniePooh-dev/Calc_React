import React from "react";
import Calculator from "./Calculator";
import History from "./History";

export default class Master extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            hist: []
        }        

        this.save = this.save.bind(this);
    }

    save(obj)  {
        this.setState({
            hist: this.state.hist.concat(obj)
        })
    }

    render()
    {
        return <div style = {{width : 600, margin : 'auto', paddingTop : '20px', background : "#C0C0C0", paddingLeft : '30px', paddingRight : '30px', paddingBottom : '20px'}}>
            <Calculator save={this.save} />
            <History hist={this.state.hist}/>
        </div>
    }
}