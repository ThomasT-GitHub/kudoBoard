import BoardCard from './BoardCard'
import './HomePageComponentStyles/BoardCardGrid.css'

const BoardCardGrid = ({ boards, setBoards}) => {

    return (
        <>
            <section className="BoardCardGrid-view">
                {boards.map((board) => {
                    return <BoardCard key={board.id} board={board} setBoards={setBoards}/>
                })}
            </section>
        </>
    )
}

export default BoardCardGrid
