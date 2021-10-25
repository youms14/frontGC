import React from 'react';
import { ThemeProvider,makeStyles, createMuiTheme,withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { deepOrange } from '@material-ui/core/colors';
import { KeyboardDatePicker,MuiPickersUtilsProvider} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




    const QontoConnector = withStyles({
        alternativeLabel: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
        },
        active: {
        '& $line': {
            borderColor: '#784af4',
        },
        },
        completed: {
        '& $line': {
            borderColor: '#784af4',
        },
        },
        line: {
        borderColor: '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
        },
    })(StepConnector);

    const useQontoStepIconStyles = makeStyles({
        root: {
        color: '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center',
        },
        active: {
        color: '#784af4',
        },
        circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
        },
        completed: {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
        },
    });
  


    function QontoStepIcon(props) {
        const classes = useQontoStepIconStyles();
        const { active, completed } = props;
    
        return (
        <div
            className={clsx(classes.root, {
            [classes.active]: active,
            })}
        >
            {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
        </div>
        );
    }

    const ColorlibConnector = withStyles({
        alternativeLabel: {
        top: 22,
        },
        active: {
        '& $line': {
            backgroundImage:
            'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
        },
        completed: {
        '& $line': {
            backgroundImage:
            'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
        },
        line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
        },
    })(StepConnector);
  

    const useColorlibStepIconStyles = makeStyles({
        root: {
          backgroundColor: '#ccc',
          zIndex: 1,
          color: '#fff',
          width: 50,
          height: 50,
          display: 'flex',
          borderRadius: '50%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        active: {
          backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
          boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
        },
        completed: {
          backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        },
    });
      
    function ColorlibStepIcon(props) {
        const classes = useColorlibStepIconStyles();
        const { active, completed } = props;
      
        const icons = {
          1: <SettingsIcon />,
          2: <GroupAddIcon />,
          3: <VideoLabelIcon />,
        };
      
        return (
          <div
            className={clsx(classes.root, {
              [classes.active]: active,
              [classes.completed]: completed,
            })}
          >
            {icons[String(props.icon)]}
          </div>
        );
    }
      
    ColorlibStepIcon.propTypes = {
        /**
         * Whether this step is active.
         */
        active: PropTypes.bool,
        /**
         * Mark the step as completed. Is passed to child components.
         */
        completed: PropTypes.bool,
        /**
         * The label displayed in the step icon.
         */
        icon: PropTypes.node,
    };


    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
            margin: theme.spacing(2),
            width: '30ch',
            },
            selectEmpty: {
                marginTop: theme.spacing(2),
            },
            button: {
                marginRight: theme.spacing(10),
            },
            instructions: {
                marginTop: theme.spacing(2),
                marginBottom: theme.spacing(2),
            },
        },
    }));



    function getSteps() {
        return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
    }
  
    function getStepContent(step) {
        switch (step) {
        case 0:
            return 'Select campaign settings...';
        case 1:
            return 'What is an ad group anyways?';
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Unknown step';
        }
    }
  
    // componentDidMount() {
    //     fetch('http://localhost:8080/allprocedures')
    //     .then(res => res.json())
    //     .then((data) => {
    //       this.setState({ procedures: data.data })
    //     })
    //     .catch(console.log)

   
    // }


 function EnregistrerCourriel() {
  const classes = useStyles();
  const [codeValue, setValue] = React.useState('');
  const [selectedDate, setSelectedDate]= React.useState(new Date())
  const [selectedDateRetrait, setSelectedDateRetrait]= React.useState(new Date())
  const [proce, setProcedure] = React.useState('');
  const [activeStep, setActiveStep] = React.useState(1);
  const [procedures, setProcedures]=React.useState([]);

  
//   componentDidMount() {
//     fetch('http://localhost:8080/allprocedures')
//     .then(res => res.json())
//     .then((data) => {
//       this.setState({ procedures: data.data })
//     })
//     .catch(console.log)


//     }
  
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(selectedDate)
  };

  const handleDateRetraitChange = (date) => {
    setSelectedDateRetrait(date);
    console.log(selectedDateRetrait)
  };


  const handleChangeProcedure = (procedure) =>{
    setProcedure(procedure);
    console.log(proce)
  }

  const theme = createMuiTheme({
    palette: {
      primary: deepOrange,
    },
  });

  //figure de procedure
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  

  const steps = getSteps();


  return (
      <div className="margingSide">
          {/*{classes.root} */}
          <br></br>
            <h1>Enregistrement d'un Nouveau Courriel:{codeValue}</h1>
        <form  fullWidth noValidate autoComplete="on">
            <br></br>
            <ThemeProvider theme={theme}>
                <TextField fullWidth id="standard-basic" label="Code Courriel"  />
                <br></br>
                <br></br>
                <TextField fullWidth id="filled-basic" label="Numero Courriel"  type="number" variant="filled" />
                <br></br>
                <br></br>
                <TextField fullWidth id="outlined-basic" label="Objet" multiline variant="outlined" />
                <br></br>
                <br></br>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>

                    <KeyboardDatePicker

                        margin="normal"
                        id="date-picker-dialog"
                        label="Date Enregistrement"
                        format="dd/MM/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />

                    <KeyboardDatePicker
                       
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date Retrait"
                        format="dd/MM/yyyy"
                        value={selectedDateRetrait}
                        onChange={handleDateRetraitChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
              
                </MuiPickersUtilsProvider>    
                <br></br>
                <br></br>
                
                <FormControl variant="filled" className="withMenuProcedure">
                    <InputLabel id="demo-simple-select-filled-label">Procedure</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        
                        onChange={handleChangeProcedure}
                        label="Age"
                    >
                        {}
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={'Fiche Academique'}>Fiche Academique</MenuItem>
                        <MenuItem value={'Certification de Relevé'}>Certification de Relevé</MenuItem>
                        <MenuItem value={'Certificat de scolarite'}>Certificat de scolarite</MenuItem>
                    </Select>
                </FormControl>

               
                <Stepper alternativeLabel activeStep={activeStep}>
                    {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>

                <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
                    {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>

                <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                    {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>

                <div>
                    {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                        All steps completed - you&apos;re finished
                        </Typography>
                        <Button onClick={handleReset} className={classes.button}>
                        Reset
                        </Button>
                    </div>
                    ) : (
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div>
                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                Back
                            </Button>

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                            </div>
                    </div>
                    )}
                
                </div>

            </ThemeProvider>
        </form>

    </div>
  );
}




export default EnregistrerCourriel
