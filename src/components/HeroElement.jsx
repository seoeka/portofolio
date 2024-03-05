import Hero from '../../public/hero.jpg';

const HeroElement = () => {
    return (
        <header>
            <div>
                <div className=''></div>
                <img src={Hero} className=''></img>
                <div>
                    <h1>Hi 👋! I’m Ekasari Amalia</h1>
                    <p>A software engineer, diving into web & Android development realms. Currently, my primary focus revolves around JavaScript & Kotlin.</p>
                </div>
            </div>
        </header>
    )
}

export default HeroElement;