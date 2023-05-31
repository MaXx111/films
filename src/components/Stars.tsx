import { Star } from './Star'
import { v4 } from 'uuid' 

interface StarsProps{
    count: number
}

export function Stars({count}: StarsProps) {

    let print = false;
    let res = [];

    if(count <= 5 && count >= 0 ) {

        for(let i = 0; i < count; i++) {
            let id = v4();
            res.push(<Star key={id}/>)
        }

        print = true
    }

    return (
        <ul className="card-body-stars u-clearfix">
             { print && res }
        </ul>
    )
}