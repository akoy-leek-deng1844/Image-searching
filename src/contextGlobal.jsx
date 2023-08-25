import { useContext, createContext, useState, useEffect } from "react";


const AppContext = createContext();
const getInitialDM = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;
    const storedTheme = localStorage.getItem('darkTheme') === 'true';
    return storedTheme || prefersDarkMode;
}
export const AppContextProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDM());
    const [searchTerm, setSearchTerm] = useState('cat');
    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        const body = document.querySelector('body');
        body.classList.toggle('dark-theme', newDarkTheme);
        localStorage.setItem('darkTheme', newDarkTheme);
    }
    useEffect(() => {
        document.body.classList.toggle('dark-theme', isDarkTheme);
    },[])
    return <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}>
        {children}
    </AppContext.Provider>

}
export const useGlobalContext = () => {
    return useContext(AppContext)
}