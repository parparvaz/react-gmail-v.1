import './Section.css'
const Section = ({Icon,title,color,selected}) => {
    const style = {
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`
    }
    return (
        <div className={`section ${selected && 'active'}`} style={style}>
            <Icon/>
            <h4>{title}</h4>
        </div>
    );
};

export default Section;
