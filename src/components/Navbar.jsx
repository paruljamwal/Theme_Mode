
import { Button } from "../styled/Button"
import { Nav } from "../styled/Nav"
import { useContext, useState } from "react"
import { ThemeContext } from '../context/Themecontext'

export const Navbar = () => {
    const { theme, handleTheme } = useContext(ThemeContext)
    return (
        <Nav theme={theme}>

            <Button
            style={{
                margin: "5px",
                right: 20,
                borderRadius:"6px",
                top:20,
               
                alignItems:"center",
                display: "flex",
            }}
                theme={theme}
                onClick={() => {
                    handleTheme()
                }}
            >   {theme==="dark" ? <i class="fa-solid fa-moon"></i> : <i class="fa-solid fa-sun"></i>}
                {theme}</Button></Nav>
    )
}