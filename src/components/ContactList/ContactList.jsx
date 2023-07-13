import { PropTypes } from "prop-types";
import { ContactListItem } from "components/ContactListItem/ContactListItem.jsx";
import { ContnactsList } from "./ContactList.styled";

export const ContactList = ({ contacts,onRemoveContact}) => {    
        return (
            <ContnactsList>
                {contacts.map(({ inputName, id, inputNumber }) => {
                    return (
                        <ContactListItem
                            key={id}
                            id={id}
                            name={inputName}
                            tel={inputNumber}
                            onRemoveContact={onRemoveContact}
                        />
                )})}
            </ContnactsList>
        )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired),
    onRemoveContact: PropTypes.func.isRequired,
}