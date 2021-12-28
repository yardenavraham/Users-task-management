import { useState, useEffect } from 'react'
import './index.css';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

function UserComp(props) {     
    const useStyles = makeStyles(theme => ({
        card: {
            border: props => (props.isCompleted ? `3px solid ${theme.palette.success.main}`: `3px solid ${theme.palette.error.main}`),
            minWidth :"300px",
            padding: 10,
        },
    }));

    const [user, setUser] = useState(props.item);
    const [isShownHoverContent, setIsShownHoverContent] = useState(false);
    const [showTasks, setShowTasks] = useState(false);
    const classes = useStyles(props);

    useEffect(() => {
    }, [user, isShownHoverContent, showTasks])


    const setTasksFunc = (id) => {

        setShowTasks(true);
        props.callback({ "showTasks": showTasks, "userId": id });
    }



    return (
                <Stack spacing={2} style={{ padding:10, marginHorizontal: 5 }}>
                    <Card className={classes.card}>
                        <Stack spacing={2}>
                            <Box >
                                <TextField value={user.id} type="text" onMouseEnter={() => setShowTasks(true)} onClick={() => setTasksFunc(user.id)} onChange={e => setUser({ ...user, id: e.target.value })} id="filled-basic" label="ID" variant="filled" />
                            </Box>
                            <Box>
                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField value={user.name} type="text" onChange={e => setUser({ ...user, name: e.target.value })} id="input-with-sx" variant="standard" />
                            </Box>
                            <Box >
                                <EmailRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField value={user.email} type="text" onChange={e => setUser({ ...user, email: e.target.value })} id="input-with-sx" variant="standard" />
                            </Box>
                            <Stack spacing={1} direction="row">
                                <Button type="button" onMouseEnter={() => setIsShownHoverContent(true)} variant="contained">Other data</Button>
                                <Button onClick={() => props.callbackUpdate(user)} type="submit" name="update" variant="contained">Update</Button>
                                <Button onClick={() => props.callbackDelete(user)} type="submit" name="delete" variant="contained">Delete</Button>
                            </Stack>
                        </Stack>
                        {isShownHoverContent && (
                            <div onClick={() => setIsShownHoverContent(false)}>
                                <Stack spacing={2} style ={{paddingTop: 20}}>
                                    <Box>
                                        <TextField defaultValue={user.address.street} type="text" onChange={e => setUser({ ...user, street: e.target.value })}
                                            id="outlined-helperText"
                                            label="Street"
                                            size="small"></TextField>
                                    </Box>
                                    <Box >
                                        <TextField defaultValue={user.address.city} type="text" onChange={e => setUser({ ...user, city: e.target.value })} id="outlined-helperText"
                                            label="City"
                                            size="small"></TextField>
                                    </Box>
                                    <Box>
                                        <TextField defaultValue={user.address.zipcode} type="text" onChange={e => setUser({ ...user, zipcode: e.target.value })} id="outlined-helperText"
                                            label="Zip code"
                                            size="small"></TextField>
                                    </Box>
                                </Stack>
                            </div>)}
                    </Card>
                </Stack>

    );
}

export default UserComp;

