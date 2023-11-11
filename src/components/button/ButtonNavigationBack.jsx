import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ButtonBackNavigation() {
    return (
        <button onClick={() => window.navigation.back()} className="button_back"><ArrowBackIcon /></button>
    )
}