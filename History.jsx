import React from "react";
import './styles.css';

export default class History extends React.Component
{
    render()
    {
        return this.props.hist.map((e,i) => {
            return <div key = {i} className = "App"><font color = "#008000"><h3 style = {{textAlign: "center"}}>{JSON.stringify(e).split('"')}</h3></font></div>
        })
    }
}