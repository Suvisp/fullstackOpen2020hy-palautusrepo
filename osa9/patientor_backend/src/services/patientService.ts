import { v4 as uuidv4 } from "uuid";
import patients from '../../data/patients';
import { PatientEntry, NonSensitivePatientEntry, NewPatientEntry } from '../types';

const getPatients = (): Array<PatientEntry> => {
    return patients;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const addPatient = (entry: NewPatientEntry): PatientEntry => {
    const newPatientEntry = {
        id: uuidv4(),
        ...entry,
    };

    patients.push(newPatientEntry);
    return newPatientEntry;
};

export default {
    getPatients,
    getNonSensitiveEntries,
    addPatient
};