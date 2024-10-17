import React from 'react';
import ErrorMessage from '../utils/ErrorMessage'; // Asegúrate de que la ruta sea correcta

const ErrorDisplay = ({ error }) => {
    return <ErrorMessage message={error} />;
};

export default ErrorDisplay;
