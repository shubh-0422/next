import {useRouter} from 'next/router';

export default function name(){
    const rou=useRouter();
    return <h2>hello {rou.query.ram} have {rou.query.vehicle}</h2>
}