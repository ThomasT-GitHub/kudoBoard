import BoardCardGrid from './BoardCardGrid'
import BoardGridFilter from './BoardGridFilter'
import BoardGridSearch from './BoardGridSearch'
import CreateBoardButton from './CreateBoardButton'
import LightAndDarkModeButton from '../../LightAndDarkModeButton'
import './HomePageComponentStyles/HomePage.css'
import { getBoards } from '../../../utils/utils'
import { useEffect, useState } from 'react'

function HomePage() {
    const [boards, setBoards] = useState([])
    const [refreshBoards, setRefreshBoards] = useState(0);
    useEffect(() => {
        (async () => {
            const fetchedBoards = await getBoards();
            setBoards(fetchedBoards);
        })();
    }, [refreshBoards]);

    return (
        <section className="HomePage-View">
            <header className="HomePage-Banner">
                <h1>KUDOBOARD</h1>
                <BoardGridSearch setBoards={setBoards} setRefreshBoards={setRefreshBoards} />
                <BoardGridFilter setBoards={setBoards} setRefreshBoards={setRefreshBoards} />
                <CreateBoardButton />
                <LightAndDarkModeButton />
            </header>

            <section className="HomePage-Body">
                <BoardCardGrid boards={boards} setBoards={setBoards} />
            </section>

            <footer className="HomePage-Footer">
                Thomas Trivino // Codepath 25
            </footer>
        </section>
    );
}

export default HomePage
