import "./style.scss"

const index = ({ children, className }) => {
    return (
        <section className={className && className}>
            {children && children}
        </section>
    )
}

export default index;