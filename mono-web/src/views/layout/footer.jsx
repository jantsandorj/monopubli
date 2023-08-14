import React from "react";

function Footer({ data }) {
    const createMarkup = () => {
        let changedContent = data?.footerContent;

        return { __html: `${changedContent ? changedContent : ""}` };
    };

    return <div className="footer" dangerouslySetInnerHTML={createMarkup()}></div>;
}

export default Footer;
