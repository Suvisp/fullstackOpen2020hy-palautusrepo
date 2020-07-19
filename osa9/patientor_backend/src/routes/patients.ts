/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import patientService from '../services/patientService';

const router = express.Router();

//GET ALL PATIENTS without sensitive data: ssn | entries
router.get('/', (_req, res) => {
    res.send(patientService.getPublicPatients());
});

//GET ONE PATIENT BY ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
      res.send(patientService.getPatientById(id));
  });

//POST NEW PATIENT
router.post('/', (req, res) => {
    const { name, dateOfBirth, ssn, gender, occupation, entries } = req.body;
    const newPatientEntry = { name, dateOfBirth, ssn, gender, occupation, entries };
    const addedPatient = patientService.addPatient(newPatientEntry);
    res.json(addedPatient);
});

export default router;