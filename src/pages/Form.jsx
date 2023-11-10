import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';


export default function Form() {
    return (
        <div className="container_form">
            <div className="body_form">
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div className="title_form">
                        <h1>New events</h1>
                    </div>
                    <div>
                        <TextField
                            id="filled-number"
                            label="Enter task"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                        />
                    </div>
                    <div>
                        <TextField
                            id="filled-number"
                            label="Date"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                        />
                    </div>
                    <div>
                        <TextField
                            id="filled-number"
                            label="Description"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            multiline
                            rows={4}
                            variant="filled"
                        />
                    </div>
                    <div className="container_submit_form">
                        <Button variant="contained">Add task</Button>
                    </div>
                </Box>
            </div>
        </div>
    )
}