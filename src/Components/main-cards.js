import 'animate.css';
import data from '../Data/main-data.json';

export default function MainCards(){
    return (
        <div className="desktop-row">
            {data.map(item => (
                <div key={item.id} className={`${item.className} card animate__animated animate__fadeInDown`}>
                    <div className="card-row">
                        <div>
                            <img src={item.social} alt="" className='social'/>
                        </div>
                        <div>
                            <p className='username'>{item.username}</p>
                        </div>

                    </div>
                    <h1 className='number'>{item.current_number} <span>followers</span></h1>
                    <div className='card-row'>
                        <div>
                            <img src={item.arrow} alt="" className='arrow' />
                        </div>
                        <div>
                            <p className={`${item.new_followers}` > 90 ? "green":"new"}>{item.new_followers} Today</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}