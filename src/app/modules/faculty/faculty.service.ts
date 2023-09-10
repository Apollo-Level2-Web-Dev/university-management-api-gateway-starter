import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { AuthHttpService } from '../../../shared/axios';
import { CoreHttpService as HttpService } from '../../../shared/axios';

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {

};

const getMyCourses = async (req: Request): Promise<IGenericResponse> => {

};

const getMyCourseStudents = async (req: Request): Promise<IGenericResponse> => {

};

const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {

};

const getFacultyProfile = async (req: Request): Promise<IGenericResponse> => {

};

const updateOneInDB = async (req: Request): Promise<IGenericResponse> => {

};

const deleteByIdFromDB = async (req: Request): Promise<IGenericResponse> => {

};

export const FacultyService = {
    getAllFromDB,
    getByIdFromDB,
    updateOneInDB,
    deleteByIdFromDB,
    getMyCourses,
    getMyCourseStudents,
    getFacultyProfile
};
