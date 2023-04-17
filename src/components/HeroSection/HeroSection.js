import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <div className="hero-web">
                <div className="hero-content">
                <span >برای موفقیت اینترنتی آماده هستید؟</span>
                <h1>وب‌سایت یا فروشگاه شگفت‌انگیز خود را بسازید</h1>
                <div class="dark-box">
                    <span class="uniqe">با </span><span class="u">ماژان</span>, در دنیای وب دیده شوید و ماندگار بمانید
                </div>
                <span className='strat' style={{background:'red', margin:'10px'}}> همین حالا شروع کنید</span>
                </div>
            </div>
        </div>
    )
}

export default HeroSection

