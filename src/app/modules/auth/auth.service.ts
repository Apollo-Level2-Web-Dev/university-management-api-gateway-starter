import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { AuthHttpService } from '../../../shared/axios';

const loginUser = async (req: Request): Promise<IGenericResponse> => {

};

const refreshToken = async (req: Request): Promise<IGenericResponse> => {

};

const changePassword = async (req: Request): Promise<IGenericResponse> => {

};

const forgotPassword = async (req: Request): Promise<IGenericResponse> => {

};

const resetPassword = async (req: Request): Promise<IGenericResponse> => {

};

export const AuthService = {
    loginUser,
    refreshToken,
    changePassword,
    resetPassword,
    forgotPassword
};
