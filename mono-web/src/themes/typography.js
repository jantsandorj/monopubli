/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */

export default function themeTypography(theme) {
    return {
        fontFamily: `'Pretendard', sans-serif`,
        h6: {
            fontWeight: 500,
            color: theme.heading,
            fontSize: "0.75rem"
        },
        h5: {
            fontSize: "0.875rem",
            color: theme.heading,
            fontWeight: 500
        },
        h4: {
            fontSize: "1rem",
            color: theme.heading,
            fontWeight: 600
        },
        h3: {
            fontSize: "1.25rem",
            color: theme.heading,
            fontWeight: "bold"
        },
        h2: {
            fontSize: "1.5rem",
            color: theme.heading,
            fontWeight: 700
        },
        h1: {
            fontSize: "2.125rem",
            color: theme.heading,
            fontWeight: 700
        },
        subtitle1: {
            fontSize: "0.875rem",
            fontWeight: 500,
            color: theme.textDark
        },
        subtitle2: {
            fontSize: "0.75rem",
            fontWeight: 400,
            color: theme.darkTextSecondary
        },
        caption: {
            fontSize: "0.75rem",
            color: theme.darkTextSecondary,
            fontWeight: 400
        },
        body1: {
            fontSize: "0.875rem",
            fontWeight: 400,
            lineHeight: "1.334em"
        },
        button: {
            textTransform: "capitalize"
        },
        logo: {
            fontSize: "1.625rem",
            textTransform: "uppercase",
            color: theme.heading,
            fontWeight: 800
        }
    };
}
