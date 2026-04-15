const Logo = ({className}: {className?: string}) => {
    return (
        <img alt="logo" src="/logo.png" className={'w-20 ${className}'} />
    )
}

const NavBar = () => {
    return (
        <nav className = "navbar">
            <div className="w-full flex justify-center items-center h-auto">
                <Logo />
            </div>
        </nav>
    )
}

export default NavBar;