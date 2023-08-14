export default function componentStyleOverrides(theme) {
    const bgColor = theme.colors?.grey50;
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    color: '#333',
                    fontWeight: "400",
                },
                title: {
                    fontSize: '1.125rem'
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: "0",
                    marginTop: "82px",
                    paddingTop: "49px",
                },
            }
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    height: "100%",
                    '@media (min-width: 1200px)': {
                        paddingLeft: '0',
                        paddingRight: '0',
                        maxWidth: "1171px",
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    borderRadius: '4px',
                    padding: "0",
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: "#333",
                    textDecoration: "none",
                    fontFamily: `'Pretendard', sans-serif`,
                }
            }
        },
        MuiPaper: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    backgroundImage: 'none'
                },
                rounded: {
                    borderRadius: `${theme?.customization?.borderRadius}px`
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: '24px'
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    color: theme.darkTextPrimary,
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    '&.Mui-selected': {
                        color: theme.menuSelected,
                        backgroundColor: theme.menuSelectedBack,
                        '&:hover': {
                            backgroundColor: theme.menuSelectedBack
                        },
                        '& .MuiListItemIcon-root': {
                            color: theme.menuSelected
                        }
                    },
                    '&:hover': {
                        backgroundColor: theme.menuSelectedBack,
                        color: theme.menuSelected,
                        '& .MuiListItemIcon-root': {
                            color: theme.menuSelected
                        }
                    }
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: theme.darkTextPrimary,
                    minWidth: '36px'
                }
            }
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    '&:hover ': {
                        background: "#212121"
                    }
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    color: theme.textDark
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    color: theme.textDark,
                    '&::placeholder': {
                        color: theme.darkTextSecondary,
                        fontSize: '0.875rem'
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    background: "#fff",
                    borderRadius: '0',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: "#212121"
                    },
                    '&:hover $notchedOutline': {
                        borderColor: "#212121"
                    },
                    '&.MuiInputBase-multiline': {
                        padding: 1
                    }
                },
                input: {
                    fontWeight: 500,
                    background: "#fff",
                    padding: '15.5px 14px',
                    borderRadius: '0',
                    '&.MuiInputBase-inputSizeSmall': {
                        padding: '10px 14px',
                        '&.MuiInputBase-inputAdornedStart': {
                            paddingLeft: 0
                        }
                    }
                },
                inputAdornedStart: {
                    paddingLeft: 4
                },
                notchedOutline: {
                    borderRadius: '0'
                }
            }
        }
    };
}
