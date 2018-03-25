export const NavigationLinkStyles = theme => {
  console.log(theme);
  return {
    root: {
      ...theme.typography.button,
      padding: `${theme.gutters[12]} ${theme.gutters[20]}`,
      color: theme.palette.text.primary,
      textDecoration: 'none',
      transition: `all ${theme.transitionTime} ease-in`,
      border: `solid 1px ${theme.palette.secondary.light}`,
    },
    active: {
      background: theme.palette.primary.light,
      color: theme.palette.common.white,
    },
  };
};
