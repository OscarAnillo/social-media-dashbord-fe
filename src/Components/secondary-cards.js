import data from '../Data/secondary-data.json';

export default function SecondaryCards(){
    return (
        <section>
            <h1 className='secondary-title'>Overview - Today</h1>
            <div className='desktop-row'>
                {data.map(item => (
                    <div key={item.id} className="secondary-card">
                        <div>
                            <p className='activity'>{item.activity}</p>
                        </div>
                        <div>
                            <img src={item.social} alt="" />
                        </div>
                        <div>
                            <h1 className='secondary-num'>{item.number_activity}</h1>
                        </div>
                        <div>
                            <div className='test'>
                                <>
                                    <img src={item.arrow} alt="" className='secondary-arrow'/>
                                </>
                                <>
                                    <p className={`${item.arrow === "images/icon-down.svg" ? "red":"green"}`}>{item.final_number}%</p>
                                </>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}