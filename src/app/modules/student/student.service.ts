import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreHttpService as HttpService, AuthHttpService } from '../../../shared/axios';

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {

};

const getMyCourses = async (req: Request): Promise<IGenericResponse> => {

};

const getMyAcademicInfos = async (req: Request): Promise<IGenericResponse> => {

};

const getMyCourseSchedules = async (req: Request): Promise<IGenericResponse> => {

};

const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {

};

const getStudentProfile = async (req: Request): Promise<IGenericResponse> => {

};

const updateOneInDB = async (req: Request): Promise<IGenericResponse> => {

};

const deleteByIdFromDB = async (req: Request): Promise<IGenericResponse> => {

};

export const StudentService = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  getMyCourses,
  getMyCourseSchedules,
  getMyAcademicInfos,
  getStudentProfile
};
