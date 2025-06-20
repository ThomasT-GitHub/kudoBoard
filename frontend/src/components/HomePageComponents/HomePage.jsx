import BoardCardGrid from './BoardCardGrid'
import BoardGridFilter from './BoardGridFilter'
import BoardGridSearch from './BoardGridSearch'
import './HomePageComponentStyles/HomePage.css'
import { getBoards } from '../../../utils/utils'
import { useEffect, useState } from 'react'

function HomePage() {
    const [boards, setBoards] = useState([])

    useEffect(() => {
        (async () => {
            const fetchedBoards = await getBoards();
            setBoards(fetchedBoards);
        })();
    }, []);

    return (
        <section className="HomePage-View">
            <header className="HomePage-Banner">
                <h1>KUDOBOARD</h1>
                <BoardGridSearch boards={boards} setBoards={setBoards}/>
                <BoardGridFilter boards={boards} setBoards={setBoards}/>
            </header>

            <section className="HomePage-Body">
                <BoardCardGrid boards={boards} setBoards={setBoards}/>
            </section>

            <footer className="HomePage-Footer">
                Thomas Trivino // Codepath 25
            </footer>
        </section>
    );
}

export default HomePage
