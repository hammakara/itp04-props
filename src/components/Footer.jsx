function Footer() {
    const hour =  new Date().getHours()
    const openHour = 8
    const closeHour = 22
    const isOpen = hour >=openHour && hour <=closeHour
    return (
        <div className="bottom">
            {
                isOpen ? <h1>ហាងកំពុងបើកដំណើរការ</h1> : 
                <h1>ហាងយើងខ្ញុំបើកដំណើរការចាប់ពីម៉ោង {openHour}:00AM រហូតដល់ម៉ោង {closeHour}:00PM</h1>
            }
        </div>
    )
}
export default Footer