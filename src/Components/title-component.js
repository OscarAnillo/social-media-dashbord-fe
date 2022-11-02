import { MaterialUISwitch } from '../Components/common/switch-component';

export default function TitleComponent(){
    return (
        <section className='title-section'>
           <div>
                <h1>Social Media Dashboard</h1>
                <p>Total Followers: 23,004</p>
            </div>     
            <div className="desktop-switch">
                <p>Dark Mode</p>
                <MaterialUISwitch />
            </div>
            <div className="mobile-switch">
                <div>
                    <p>Dark Mode</p>
                </div>
                <div>
                <MaterialUISwitch />
                </div>
            </div>
        </section>
    )
}