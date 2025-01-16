import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        flexGrow: 1,
        fontSize: '1.5rem',
        fontWeight: 'bold',
        fontFamily: "'Roboto', sans-serif",
    },
    btn: {
        marginRight: theme.spacing(2),
        fontSize: '0.9rem',
        color: 'white',
        textTransform: 'capitalize',
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.2)',
        },
    },
    navLink: {
        textDecoration: 'none',
    },
    active: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: '4px',
    },
}));

const Header = () => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" className={classes.title}>
                        Codeforces Analyzer
                    </Typography>
                    <div>
                        <Link
                            to="/Codeforces-Analyzer/"
                            className={classes.navLink}
                        >
                            <Button
                                color="inherit"
                                className={`${classes.btn} ${
                                    location.pathname === '/Codeforces-Analyzer/' ? classes.active : ''
                                }`}
                            >
                                <PersonIcon style={{ marginRight: 5 }} />
                                Single User
                            </Button>
                        </Link>
                        <Link
                            to="/Codeforces-Analyzer/versus"
                            className={classes.navLink}
                        >
                            <Button
                                color="inherit"
                                className={`${classes.btn} ${
                                    location.pathname === '/Codeforces-Analyzer/versus' ? classes.active : ''
                                }`}
                            >
                                <PeopleIcon style={{ marginRight: 5 }} />
                                Versus
                            </Button>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
