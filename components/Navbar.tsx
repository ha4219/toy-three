import {
  Box,
  Container,
  Menu,
  Tab,
  Tabs,
  Button,
  MenuItem,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Avatar,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import gravatar from "gravatar";

const pages: string[] = ["Editor's pick", "추천코스", "테마여행", "코스를 부탁해", "내 주변 갈만한 곳"];
const settings: string[] = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [selectedNavIndex, setSelectedNavIndex] = useState(0);
  const [selectedUserIndex, setSelectedUserIndex] = useState(0);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {    
    setAnchorElNav(null);
  };

  const onHandleMenuItemClick = useCallback(
    (
      event: React.MouseEvent<HTMLElement>,
      index: number,
    ) => {
      handleCloseNavMenu();
      setSelectedNavIndex(index);
  }, []);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onHandleUserItemClick = useCallback(
    (
      event: React.MouseEvent<HTMLElement>,
      index: number,
    ) => {
      console.log(selectedUserIndex , event, index);
      setSelectedUserIndex(index);
      handleCloseUserMenu();
    },
  [selectedUserIndex]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={page} onClick={(event) => onHandleMenuItemClick(event, index)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={(event) => onHandleMenuItemClick(event, index)}
                sx={[{ my: 2, color: 'white', display: 'block'}, (selectedNavIndex === index) && {color: 'orange', fontWeight: 'bold'}]}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={gravatar.url('ha4219@naver.com', {s:'28px', d: 'retro'})} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem
                  key={setting}
                  onClick={(event) => onHandleUserItemClick(event, index)}
                  disabled={index === -1}
                  selected={index === selectedUserIndex}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
