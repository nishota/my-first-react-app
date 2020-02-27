import React from "react"

export class Clock extends React.Component {
    render() {
        return (
            <div>
                <span>現在時刻:</span><span>{new Date().toLocaleTimeString()}</span>
            </div>
        );
    } 
}