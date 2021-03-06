import { useState, useEffect } from 'react'
import {Stack,Button,TextField,Box, Card, CardActions, CardContent} from '@mui/material';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import { makeStyles } from '@mui/styles';


function AddTodo(props) {
    const [todo, setTodo] = useState({
        "userId": props.userId,
        "id": props.length,
        "title": "",
        "completed": false
    });
    const useStyles = makeStyles(theme => ({
        titles: {
          color: "white"
        }

    }));

    const classes = useStyles();

    useEffect(() => {
        setTodo(todo);
    }, [todo])

    return (
        <>
            <br></br>
            <Stack spacing={2} style={{ padding: 10, marginHorizontal: 5, }}>
                <Card sx={{ minWidth: 275, border: 5, borderColor: "primary.main" }}>
                    <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <CreateRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField type="text" onChange={e => setTodo({ ...todo, title: e.target.value })} id="outlined-basic" label="Title" variant="outlined" />
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Button color="success" variant="contained" size="small" onClick={() => props.callbackAddTask(todo)}>Add</Button>
                        <Button color="success" variant="contained" size="small" onClick={() => props.callbackIsAddTask()}>Cancel</Button>
                    </CardActions>

                </Card>
            </Stack>
        </>

    );
}

export default AddTodo;


