import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Box } from '@material-ui/core';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@material-ui/lab';
import CodeIcon from '@material-ui/icons/Code';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CompareIcon from '@material-ui/icons/Compare';

const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: 'calc(100vh - 64px - 50px)', // Subtracting header and footer heights
      background: 'black', // Set background color to black
      color: '#ffffff',
      padding: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden', // Ensures the background doesn't overflow
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'url(https://t4.ftcdn.net/jpg/09/70/98/83/360_F_970988366_b162VGNrPfAH8UzhFL9Oa36fWCQ2AdiX.jpg)', // Replace with a tech-themed image URL
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      opacity: 0.1, // Low transparency
      zIndex: 0, // Ensure it stays behind content
    },
    content: {
      position: 'relative',
      zIndex: 1, // Ensure content is on top of the background
    },
    title: {
      fontWeight: 'bold',
      marginBottom: theme.spacing(4),
      textAlign: 'center',
      animation: '$pulse 2s infinite',
    },
    subtitle: {
      marginBottom: theme.spacing(6),
      textAlign: 'center',
    },
    timeline: {
      padding: 0,
    },
    timelineContent: {
      padding: theme.spacing(2, 0),
    },
    timelineDot: {
      backgroundColor: '#ffffff',
      boxShadow: theme.shadows[3],
    },
    timelineConnector: {
      backgroundColor: '#ffffff',
    },
    icon: {
      color: '#764ba2',
    },
    '@keyframes pulse': {
      '0%': {
        opacity: 1,
        transform: 'scale(1)',
      },
      '50%': {
        opacity: 0.8,
        transform: 'scale(1.05)',
      },
      '100%': {
        opacity: 1,
        transform: 'scale(1)',
      },
    },
    '@keyframes fadeInUp': {
      from: {
        opacity: 0,
        transform: 'translate3d(0, 40px, 0)',
      },
      to: {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
      },
    },
    animatedItem: {
      animation: '$fadeInUp 1s ease-out',
    },
  }));
  
  const MainContent = () => {
    const classes = useStyles();
    const timelineRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(classes.animatedItem);
            }
          });
        },
        { threshold: 0.1 }
      );
  
      const timelineItems = timelineRef.current.querySelectorAll('.MuiTimelineItem-root');
      timelineItems.forEach((item) => observer.observe(item));
  
      return () => {
        timelineItems.forEach((item) => observer.unobserve(item));
      };
    }, [classes.animatedItem]);
  
    return (
      <Container className={classes.root} maxWidth={false}>
        <div className={classes.backgroundImage} /> {/* Background Image */}
        <div className={classes.content}> {/* Ensure content is above the background */}
          <Typography variant="h2" className={classes.title}>
            VisualForce-Codeforces Analyzer
          </Typography>
          <Typography variant="h5" className={classes.subtitle}>
            Analyze your Codeforces journey and improve your coding skills
          </Typography>
          <Timeline align="alternate" className={classes.timeline} ref={timelineRef}>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className={classes.timelineDot}>
                  <CodeIcon className={classes.icon} />
                </TimelineDot>
                <TimelineConnector className={classes.timelineConnector} />
              </TimelineSeparator>
              <TimelineContent className={classes.timelineContent}>
                <Box>
                  <Typography variant="h6">Analyze Your Profile</Typography>
                  <Typography>Dive deep into your Codeforces submissions and performance</Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className={classes.timelineDot}>
                  <TrendingUpIcon className={classes.icon} />
                </TimelineDot>
                <TimelineConnector className={classes.timelineConnector} />
              </TimelineSeparator>
              <TimelineContent className={classes.timelineContent}>
                <Box>
                  <Typography variant="h6">Track Your Progress</Typography>
                  <Typography>Visualize your rating changes and problem-solving patterns over time</Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className={classes.timelineDot}>
                  <CompareIcon className={classes.icon} />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent className={classes.timelineContent}>
                <Box>
                  <Typography variant="h6">Compare with Others</Typography>
                  <Typography>See how you stack up against your friends or top performers</Typography>
                </Box>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </Container>
    );
  };
  
  export default MainContent;
  

