/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import patientService from '../services/patientService';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientService.getNonSensitiveEntries());
});

router.post('/', (req, res) => {
    const { name, dateOfBirth, ssn, gender, occupation } = req.body;
    const newPatientEntry = { name, dateOfBirth, ssn, gender, occupation };
    const addedPatient = patientService.addPatient(newPatientEntry);
    res.json(addedPatient);
});

export default router;