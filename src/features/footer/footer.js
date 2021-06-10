import React from 'react';
import {Facebook, Instagram, LinkedIn} from "@material-ui/icons";
import {useStylesFooter} from "./footerStyles";

export const Footer = () => {
    const styles = useStylesFooter();

    return (
        <div className={styles.footer}>
            <div className={styles.contacts}>
                    Contacts
                <br/>
                    +380-66-66-66
                <br/>
                    test-online@gmail.com
            </div>
            <div className={styles.socialMedia}>
                <Instagram className={styles.icon}/>
                <Facebook className={styles.icon}/>
                <LinkedIn className={styles.icon}/>
            </div>
        </div>
    )
}