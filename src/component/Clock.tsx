import React from "react";
import './Clock.scss';

interface Props {
}
interface State {
    isLive: boolean;
    curTime: number;
    startTime: number;
}

export class Clock extends React.Component<Props, State> {
    timerId: any;

    constructor(props: Props) {
        super(props);
        // 初期値を設定
        this.state = {
            isLive: false,
            curTime: 0,
            startTime: 0
        };
    }

    // マウント
    componentDidMount(): void {
        this.timerId = setInterval(() => this.tick(), 1000);
    }
    // アンマウント
    componentWillUnmount(): void {
        clearInterval(this.timerId);
    }

    render():JSX.Element{
        let label = this.state.isLive?'STOP':'START';
        const disp = this.getDisp();
        const fclick = () =>this.clickHandler();
        return(<div className='StopWatch'>
            <div>{disp}</div>
            <button onClick={fclick}>{label}</button>
        </div>)
    }

    tick(): void {
        if (this.state.isLive) {
            const v = new Date().getTime();
            this.setState({ curTime: v });
        }
    }

    clickHandler(): void {
        if (this.state.isLive) {
            this.setState({ isLive: false });
            return;
        }

        const v = new Date().getTime();
        this.setState({
            isLive: true,
            curTime: v,
            startTime: v
        });
        return;
    }

    getDisp(): JSX.Element {
        const s = this.state;
        const delta = s.curTime - s.startTime;
        const t = Math.floor(delta / 1000);
        const ss = t % 60;
        const m = Math.floor(t / 60);
        const mm = m % 60;
        const hh = Math.floor(mm / 60);
        const z = (num: number) => {
            const s = '00' + String(num);
            return s.substr(s.length - 2, 2);
        }
        return (<span className='disp'>
            {z(hh)}:{z(mm)}:{z(ss)}
        </span>);
    }
}
