import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/logo3.png";
import { useSelector, useDispatch } from "react-redux";
import { signin, toggleSnackbarOpen } from "../actions";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router";

const pages = ["About Me", "Gallery"];
const settings = ["Profile", "Logout"];

const ResponsiveAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogin = () => {
    dispatch(toggleSnackbarOpen("Welcome Admin, you are now logged in!"));
    return dispatch(signin());
  };
  const handleCloseMenuList = (item) => {
    if (item === "Logout") {
      setAnchorElUser(null);
      dispatch(toggleSnackbarOpen("Successfully logged out!"));
      navigate("/");
      return dispatch(signin());
    } else {
      return null;
    }
  };
  let navigate = useNavigate();
  const goto = () => {
    handleLogin();
    navigate("/signin");
  };
  const isLogged = useSelector((state) => state.isLogged);

  const dispatch = useDispatch();
  return (
    <AppBar
      position="static"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Toolbar>
            <img src={logo} alt="logo" height={84} />
          </Toolbar>

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
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {isLogged ? (
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={() => navigate("/")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Home
              </Button>
              <Button
                onClick={() => navigate("gallery")}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                List
              </Button>
            </Box>
          ) : (
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>
          )}
          <Box sx={{ flexGrow: 0 }}>
            {isLogged ? (
              <>
                <Toolbar variant="dense">
                  <Typography variant="h6" color="inherit" component="div">
                    Admin
                  </Typography>
                  <Tooltip title="Open settings">
                    <IconButton
                      size="large"
                      edge="end"
                      aria-label="account of current user"
                      aria-haspopup="true"
                      onClick={handleOpenUserMenu}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                  </Tooltip>
                </Toolbar>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={() => handleCloseMenuList(setting)}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Button color="inherit" onClick={goto}>
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
