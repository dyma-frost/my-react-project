import './PhoneWithIcon.scss'

type Props = {}
const PhoneWithIcon = (props: Props) => {
    return (
        <div className="phone-with-icon">
            <a href="tel: +38 (000) 000 00 00">
                <img
                    src="/images/bedoctor-header-phone-icon.svg"
                    alt="phonecall-logo"
                />
                +38 (000) 000 00 00
            </a>
        </div>
    )
}
export default PhoneWithIcon
