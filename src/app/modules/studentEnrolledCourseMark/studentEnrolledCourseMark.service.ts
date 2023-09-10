import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreHttpService } from '../../../shared/axios';

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {

};

const getStudentMarks = async (req: Request): Promise<IGenericResponse> => {

};

const updateMarks = async (req: Request): Promise<IGenericResponse> => {

};

const updateCourseFinalMarks = async (req: Request): Promise<IGenericResponse> => {

};

export const StudentEnrolledCourseMarkService = {
  getAllFromDB,
  getStudentMarks,
  updateCourseFinalMarks,
  updateMarks
};
