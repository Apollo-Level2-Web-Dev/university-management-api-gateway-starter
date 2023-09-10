import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreHttpService } from '../../../shared/axios';

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {

};

const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {

};

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {

};

const updateOneInDB = async (req: Request): Promise<IGenericResponse> => {

};

const deleteByIdFromDB = async (req: Request): Promise<IGenericResponse> => {

};

const getMyRegistration = async (req: Request): Promise<IGenericResponse> => {

};

const startRegistration = async (req: Request): Promise<IGenericResponse> => {

};

const mySemesterRegistrationCourses = async (req: Request): Promise<IGenericResponse> => {

};

const enrollIntoCourse = async (req: Request): Promise<IGenericResponse> => {

};

const withDrawFromCourse = async (req: Request): Promise<IGenericResponse> => {

};

const confirmRegistration = async (req: Request): Promise<IGenericResponse> => {

};

const startNewSemester = async (req: Request): Promise<IGenericResponse> => {

};

export const SemesterRegistrationService = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  insertIntoDB,
  getMyRegistration,
  startRegistration,
  mySemesterRegistrationCourses,
  enrollIntoCourse,
  withDrawFromCourse,
  confirmRegistration,
  startNewSemester
};
