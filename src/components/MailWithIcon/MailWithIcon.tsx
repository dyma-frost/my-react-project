import './MailWithIcon.scss'
type Props = {}
const MailWithIcon = (props: Props) => {
    return (
        <div className="mail-with-icon">
            <a href="mailto:testmail@mail.com">
                <img src="/images/bedoctor-contact-icon1.svg" alt="mail-logo" />
                testmail@mail.com
            </a>
        </div>
    )
}
export default MailWithIcon
