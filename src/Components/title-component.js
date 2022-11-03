import { MaterialUISwitch } from '../Components/common/switch-component';

export default function TitleComponent({toggleTheme}){
    return (
        <section className='title-section'>
           <div>
                <h1 className='main-title'>Social Media Dashboard</h1>
                <p className='follower'>Total Followers: 23,004</p>
            </div>     
            <div className="desktop-switch">
                <p>Dark Mode</p>
                <MaterialUISwitch onChange={toggleTheme}/>
            </div>
            <div className="mobile-switch">
                <div>
                    <p>Dark Mode</p>
                </div>
                <div>
                <MaterialUISwitch onChange={toggleTheme} />
                </div>
            </div>
        </section>
    )
}