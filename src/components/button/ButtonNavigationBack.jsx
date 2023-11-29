import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

export default function ButtonBackNavigation() {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate(-1)} className="button_back"><ArrowBackIcon /></button>
    )
}