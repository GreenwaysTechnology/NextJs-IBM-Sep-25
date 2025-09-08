export default function PanelLayout(props) {
    const isAdmin = false

    return <div className="m-30 ">
        {props.children}
        {/* Conditional rendering */}
        {isAdmin ? props.AdminPanel : props.UserPanel}
    </div>
}