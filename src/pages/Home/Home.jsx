import { TrendingToday } from "components/TrendingToday/TrendingToday"
import css from "./Home.module.css"

const Home = () => {

  return (
            <main className={css.container}>
              <h1>Trending Today</h1>
              <TrendingToday/>
            </main>
  )   
}

export default Home;