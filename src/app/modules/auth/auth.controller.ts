import { NextFunction, Request, Response } from 'express';
import config from '../../../config';
import sendResponse from '../../../shared/response';
import { AuthService } from './auth.service';

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthService.loginUser(req);

    if (result && result.data && result.data.refreshToken) {
      res.cookie('refreshToken', result.data.refreshToken, {
        httpOnly: true,
        secure: config.env === 'production'
      });
    }

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthService.refreshToken(req);

    if (result && result.data && result.data.refreshToken) {
      res.cookie('refreshToken', result.data.refreshToken, {
        httpOnly: true,
        secure: config.env === 'production'
      });
    }

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const changePassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthService.changePassword(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const forgotPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthService.forgotPassword(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthService.resetPassword(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AuthController = {
  loginUser,
  refreshToken,
  changePassword,
  forgotPassword,
  resetPassword
};
