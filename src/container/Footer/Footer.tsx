import './Footer.scss'

type Props = {};
const Footer = (props: Props) => {
    return (
        <>
            <hr />
            <footer>
                © 2022 Betheme by
                <a href="https://muffingroup.com/">
                    <span>"</span>Muffin group<span>"</span>
                </a>
                | All Rights Reserved | Powered by
                <a href="https://wordpress.org/">
                    <span>"</span>WordPress
                </a>
            </footer>
        </>
    )
};
export default Footer;
