import React from "react"

interface Props {
}
interface State {
    date: Date;
}

export class Clock extends React.Component<Props, State> {
    timeId: any;
    
    constructor(props: Props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() { // 出力が DOM にレンダーされた後に実行されます
        this.timeId = setInterval(
          () => this.tick(),
          1000
        ); 
    }

    componentWillUnmount() {
        clearInterval(this.timeId);
    }

    tick(){
        this.setState({date: new Date()});
    }

    render() {
        return (
            <div>
                <span>現在時刻:</span><span>{this.state.date.toLocaleTimeString()}</span>
            </div>
        );
    }
}