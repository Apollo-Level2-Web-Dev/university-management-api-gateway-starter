import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { AuthHttpService } from '../../../shared/axios';

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {

};

const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {

};

const updateOneInDB = async (req: Request): Promise<IGenericResponse> => {

};

const deleteByIdFromDB = async (req: Request): Promise<IGenericResponse> => {

};

export const AdminService = {
    getAllFromDB,
    getByIdFromDB,
    updateOneInDB,
    deleteByIdFromDB
};
