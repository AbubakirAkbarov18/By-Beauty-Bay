import './Head.css'

const Head = () => {
  return (
    <section className='head'>
        <div className='head__black'>
            <span>Get 10% off selected items when you spend £50 with code: YAY10 *Exclusions apply</span>
        </div>
        <div className='head__white'>
            <span className='head__white-text-left'>FREE Sheer Tinted Lip Balm when you spend $40 on BY BEAUTY BAY</span>
            <span className='head__white-text'>Ready, set, haul! These newbies belong in your collection</span>
            <span className='head__white-text-right'>Download the app for exclusive offers and discounts!</span>
            <div className='head__language'>            
                <img width={24} height={16} src="https://www.beautybay.com/assets/flags/gb.png" alt="" />
                <span>EN</span>
            </div>
        </div>
    </section>
  )
}

export default Head