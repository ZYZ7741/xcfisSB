export default function Board() {
  return (
    <>
      <div className="board-row">
        <button className="square">X</button>
        <button className="square">C</button>
        <button className="square">F</button>
      </div>
      <div className="board-row">
        <button className="square">i</button>
        <button className="square">s</button>
      </div>
      <div className="board-row">
        <button className="square">d</button>
        <button className="square">a</button>
        <button className="square">s</button>
        <button className="square">h</button>
        <button className="square">a</button>
        <button className="square">b</button>
        <button className="square">i</button>
      </div>
      <div classNmae="board-row">
        <button className="square">😜</button>
        <button className="square">😜</button>
        <button className="square">😜</button>
      </div>
    </>
  );
}
