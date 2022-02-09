import styles from "./App.module.css";
import { SearchWeather } from "./components/SearchWeather";

export function App() {
  
  return (
    <div className={styles.weatherContainer}>      
      <SearchWeather />
    </div>
  );
}
