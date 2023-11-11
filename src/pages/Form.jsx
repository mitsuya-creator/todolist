import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import ButtonBackNavigation from "@/components/button/ButtonNavigationBack";

export default function Form() {
    return (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <div className="container_new_task">
                <div className="container_button_back">
                    <ButtonBackNavigation />
                    <h1>New task</h1>
                </div>
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
            </div>
        </Slide>
    )
}