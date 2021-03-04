import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>OwnA</span>Car
            </h1>
            <p className={headerStyles.descrption}>
            Smart Choices Enabled  
            </p>
        </div>
    )
}

export default Header
