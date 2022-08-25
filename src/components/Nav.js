import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Link,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import BusinessIcon from "@mui/icons-material/Business";
import LoginIcon from "@mui/icons-material/Login";

import { Logo } from "../subcomponents/AllSvgs";
import { styled, useTheme } from "@mui/material/styles";
import { absCenter } from "../globalStyles";
import { default as styledC } from "styled-components";
import { FilledButton, OutlinedButton } from "../subcomponents/Buttons";

const pages = [
  { name: "Talent", icon: () => <TipsAndUpdatesIcon /> },
  { name: "Companies", icon: () => <BusinessIcon /> },
  { name: "Sign in", icon: () => <LoginIcon /> },
];
const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const PageLink = styledC.a`
    margin: 0 20px;
    position: relative;
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 0;
        bottom: -5px;
        left: 0;
        background: var(--primary);
        transition: height .4s ease-in;
    }

    &:hover::after {
        height: 3px;
    }
`;

const Gap = styledC.div`
    height: 20px;
`;

const Nav = () => {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="transparent" id="main-nav">
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ justifyContent: "space-between" }}>
          <Link
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Logo />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  boxSizing: "border-box",
                },
              }}
              variant="persistent"
              anchor="left"
              open={Boolean(anchorElNav)}
            >
              <DrawerHeader>
                <IconButton onClick={handleCloseNavMenu}>
                  {theme.direction === "ltr" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </DrawerHeader>
              <Divider />
              <List>
                {pages.map(({ name, icon }, index) => (
                  <ListItem key={name} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{icon()}</ListItemIcon>
                      <ListItemText primary={name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <Box>
                <OutlinedButton variant="outlined" wt="500">
                  Sign Up
                </OutlinedButton>
                <Gap></Gap>
                <FilledButton variant="contained" wt="500">
                  Hire Developers
                </FilledButton>
              </Box>
            </Drawer>
          </Box>
          <Box className="d-flex align-items-center">
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <Logo style={absCenter} />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map(({ name }) => (
                <PageLink
                  key={name}
                  onClick={handleCloseNavMenu}
                  className="text-reset"
                >
                  {name}
                </PageLink>
              ))}
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <OutlinedButton variant="outlined" wt="600">
                Sign Up
              </OutlinedButton>
              <FilledButton variant="contained" wt="600">
                Hire Developers
              </FilledButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
