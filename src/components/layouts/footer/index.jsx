import "./style.scss"

const index = () => {
    return (
        <footer className="p-3 bg-[#4e43ee] text-white">
            <p className="text-center">
                &copy; {new Date().getFullYear()}
                My Website. All rights reserved.  |  Designed by
                <a href="#">
                    Example
                </a>  |  Developed by
                <a href="#">Example</a>  |
                <a href="#">Terms & Conditions</a>  |
                <a href="#">Privacy Policy</a>  |
                <a href=""></a>
            </p>
        </footer>
    )
}

export default index;