export default function GameLayout(props) {
    return <div id="GameLayout" className="m-20">
        {/* GamePage */}
        {props.children}
        {/* Team Page */}
        {props.team}
        {/* Player Page */}
        {props.player}
    </div>
}