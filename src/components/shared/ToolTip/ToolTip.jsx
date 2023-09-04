import ReactTooltip from "react-tooltip";
const ToolTip = ({ id, tooltipContent, children }) => {
    return (
        <>
            {children}
            <ReactTooltip
                id={id}
                place='bottom'
                type='info'
                effect='solid'
                className='tooltip'
                arrowColor='#00abfe'
                delayShow={500}
                delayHide={500}
                backgroundColor="#213065ba"
            >
                {tooltipContent}
            </ReactTooltip>
        </>
    )
}

export default ToolTip
