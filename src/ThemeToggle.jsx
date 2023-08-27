import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import { useGlobalContext } from "./ContextGlobal";

const ThemeToggle = () => {
  const {isDarkTheme, toggleDarkTheme} = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? <BsFillSunFill className='sun' /> : <BsFillMoonFill />}
      </button>
    </section>
  );
}
export default ThemeToggle