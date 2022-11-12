import Navbar from "./Navbar"

const MainLayout = ({children}) => {
    return(
        <>
        <Navbar />
        {children}
        </>
    )
}

export function withMainLayout(Component) {
    Component.Layout = MainLayout
    return Component
}

export default MainLayout