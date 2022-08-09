// Utils & config
import React, { useContext, useState} from "react";
import axios from 'axios';
import { useTheme } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";

//External components
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

//Internal components
import Button from "../../atoms/button/button";
import PasswordForm from "../../atoms/passwordForm/passwordForm";
import { useAuthStore, useUserInfoStore } from "../../../stores/auth";
import { clearLocalStorage, getToken, getUserInfo } from "../../../helpers/localStorage/localStorage";
import { verifyToken } from "../../../helpers/serviceRequests/user";
import AuthService from "../../../services/auth";

const LoginPopover = (props) =>{

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);
  const [isLoading, setisLoading] = useState(true);
  const setUserInfo = useUserInfoStore((state) => state.setUserInfo);

  const history = useHistory();
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();

  const useStyles = makeStyles((theme) => ({
    typography: {
      float:'left'
  },
  }));
  const classes = useStyles();

  //---EMAIL Y PASS QUE RECIBO DEL USUARIO---
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const handleChangeEmail = event =>setEmail(event.target.value);
  const handleChangePassword = (valuepassword) => setPassword(valuepassword);

  //----SUBMIT PASS AND EMAIL-----
  const handleSubmitUserAuth = async () =>{

    const user = {email:email,password:password}

    try {
      const res = await AuthService.login(user);
      console.log('respuesta:',res);
      setIsAuthenticated(true);
      const name = 'Nombre';
      setUserInfo({ name: name, email: email });
      history.push("/myaccount");
    }
    catch(error){
      console.log('ERROR:',error);
      enqueueSnackbar(`ERROR:${error}`, { variant: "error" });
    }
}

   //---SUBMIT PARA RECUPERAR CONTRASEÑA----
   const handleSubmitRecoveryPass = async() => {
    console.log(email);
    try {
      const res = await AuthService.forgotPassword(email);
      console.log(res);
      setIsAuthenticated(true);
    }
    catch(error){
      console.log(error);
      enqueueSnackbar(`ERROR:${error}`, { variant: "error" });
    }
    handleClose2();
  }

  //---OPEN POP OVER 2 (RECUPERAR CONTRASEÑA)---
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const handleClick2 = (event) => {
    props.close();
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const open2 = Boolean(anchorEl2);
  const id2 = open2 ? 'simple-popover' : undefined;

    return(
        <>
        <Popover
        PaperProps={{style:{display:'flex',flexDirection:'column',width:theme.spacing(47),
        justifyContent:'flexStart',padding:theme.spacing(2)}}}
        id={props.id}
        open={props.open}
        anchorEl={props.anchorEl}
        onClose={props.close}
        disableScrollLock
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        >
        <Typography  className={classes.typography} style={{fontSize:20}}>INGRESAR A TU CUENTA</Typography>
        <TextField onChange={handleChangeEmail} value={email} style={{width:'100%',marginTop:theme.spacing(4)}} id="outlined-basic" label="Correo electrónico" variant="outlined" />
        <PasswordForm handleChangePassword={handleChangePassword} style={{marginTop:theme.spacing(4)}}></PasswordForm>
        <Typography className={classes.typography} style={{marginTop:theme.spacing(3),marginBottom:theme.spacing(3),
        fontSize:14}}>
          ¿Has olvidado tu contraseña? 
          <Button onClick={handleClick2}>
          Pinche aquí
          </Button>
        </Typography>
        <Button onClick={handleSubmitUserAuth} variant="contained" color="primary" style={{width:'100%'}}>
          INGRESAR
        </Button>
        </Popover>


        <Popover
        PaperProps={{style:{display:'flex',flexDirection:'column',width:theme.spacing(47),
        justifyContent:'flexStart',padding:theme.spacing(2)}}}
        id={id2}
        open={open2}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 60, left: 690 }}
        onClose={handleClose2}
        disableScrollLock
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Typography  className={classes.typography} style={{fontSize:20}}>
          RECUPERAR CONTRASEÑA
        </Typography>
        <Typography  className={classes.typography} style={{fontSize:14,marginTop:theme.spacing(4)}}>
          Ingrese su correo electrónico a continuación y
          te enviaremos un mail para que introduzcas una nueva contraseña
        </Typography>
        <TextField onChange={handleChangeEmail} value={email} style={{width:'100%',marginTop:theme.spacing(4),marginBottom:theme.spacing(4)}} 
        id="outlined-basic" label="Correo electrónico" variant="outlined" />
        <Button onClick={handleSubmitRecoveryPass} variant="contained" color="primary" style={{width:'100%'}}>
          INGRESAR
        </Button>
      </Popover>
    </>
    )
}

export default LoginPopover;

