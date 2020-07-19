import { v4 as uuidv4 } from "uuid";
import patients from '../../data/patients';
import { Patient, PublicPatient, NewPatient } from '../types';

const getPatients = (): Array<Patient> => {
    return patients;
};

const getPatientById = (id: string): Patient => {
    const patientById = patients.filter((patient) => patient.id === id)[0];
    return patientById;
};

const getPublicPatients = (): PublicPatient[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const addPatient = (entry: NewPatient): Patient => {
    const newPatient = {
        id: uuidv4(),
        ...entry,
    };

    patients.push(newPatient);
    return newPatient;
};

export default {
    getPatients,
    getPatientById,
    getPublicPatients,
    addPatient
};