import { boards } from '../../../../backend/data'
import BoardCardGrid from './BoardCardGrid'
import BoardGridFilter from './BoardGridFilter'
import BoardGridSearch from './BoardGridSearch'
import './HomePageComponentStyles/HomePage.css'


function HomePage() {
    return (
        <section className="HomePage-View">
            <header className="HomePage-Banner">
                <h1>KUDOBOARD</h1>
                <BoardGridSearch />
                <BoardGridFilter />
            </header>

            <section className="HomePage-Body">
                <BoardCardGrid boardCardList={Object.values(boards)} />
            </section>

            <footer className="HomePage-Footer">
                Thomas Trivino // Codepath 25
            </footer>
        </section>
    );
}

export default HomePage
