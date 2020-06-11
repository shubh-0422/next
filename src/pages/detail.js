import Link from 'next/link'

const p=[
    {v:'car', n:'ram'},{v:'bus', n:'raju'},
]

export default function detail(){

    return (
    <div>
        { p.map(e => (
            <div>

            <Link as={'/${e.v}/${e.n}'} href='/[vehicle]/[ram]'>
               <a>
                   link to {e.n} which have {e.v}
                </a> 
            </Link> 
            </div>       
        ))}
        </div>

        );
}