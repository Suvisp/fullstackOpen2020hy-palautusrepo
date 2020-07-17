import patients from '../../data/patients';
import { PatientEntry, NonSensitivePatientEntry } from '../types';

const getPatients = (): Array<PatientEntry> => {
  return patients;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry [] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation
    }));
  };

//   const addPatient = () => {
//     return []
//   }

export default {
  getPatients,
  getNonSensitiveEntries
//   addPatient
};