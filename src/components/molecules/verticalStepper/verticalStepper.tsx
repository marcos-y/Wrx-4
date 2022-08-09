import React, { FC, ReactChild } from "react";

import { makeStyles, Stepper, Step, StepLabel, StepContent } from "@material-ui/core";

interface IProps {
  current: number;
  steps: IStep[];
}

interface IStep {
  label: string;
  content: ReactChild;
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: "transparent",
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1),
    },
  },
  stepContainer: {
    padding: theme.spacing(1),
  },
  stepIcon: {
    width: 40,
    color: "#A3A3A3",
  },
  activeStepIcon: {
    color: "#5EBC00 !important",
  },
  text: {
    textAlign: "left",
    textTransform: "uppercase",
  },
  textStep: {
    color: "#A3A3A3",
    display: "flex",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  customLabelStyle: {
    fontSize: 15,
    fontWeight: "bold",
  },
}));

const VerticalLinearStepper: FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <Stepper activeStep={props.current} orientation="vertical" className={classes.root}>
        {props.steps.map(({ label, content }) => (
          <Step key={label}>
            <StepLabel
              className={classes.text}
              classes={{ label: classes.customLabelStyle }}
              StepIconProps={{
                classes: {
                  root: classes.stepIcon,
                  text: classes.textStep,
                  active: classes.activeStepIcon,
                  completed: classes.activeStepIcon,
                },
              }}
            >
              {label}
            </StepLabel>

            <StepContent className={classes.stepContainer}>{content}</StepContent>
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default VerticalLinearStepper;
