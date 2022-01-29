import request from 'utils/request';

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1`;

export async function registerApi(data) {
  return request({
    baseURL,
    url: '/auth/register',
    method: 'POST',
    data,
  });
}

export async function loginApi(data) {
  return request({
    baseURL,
    url: '/auth/login',
    method: 'POST',
    data,
  });
}

export async function loginFacebookApi(data) {
  return request({
    baseURL,
    url: `/auth/facebook?access_token=${data}`,
    method: 'POST',
  });
}

export async function loginGoogleApi(data) {
  return request({
    baseURL,
    url: `/auth/google?access_token=${data}`,
    method: 'POST',
  });
}

export async function logoutApi() {
  return request.post('/auth/logout');
}

export async function forgotPasswordApi(data) {
  return request({
    baseURL,
    url: '/auth/forgotPassword',
    method: 'POST',
    data,
  });
}

export async function changePasswordApi(data) {
  return request({
    baseURL,
    url: '/auth/me/changePassword',
    method: 'PUT',
    data,
  });
}

export async function resetPasswordApi(data) {
  return request({
    baseURL,
    url: '/auth/resetPassword',
    method: 'POST',
    data,
  });
}

export async function verifyCodeResetPasswordApi(data) {
  return request.post('/auth/resetPassword/verifyCode', data);
}

export async function resendCodeResetPasswordApi(data) {
  return request.post('/auth/resetPassword/resendCode', data);
}

export async function updatePasswordApi(data) {
  return request.post('/users/password/change', data);
}

export async function verifyPasswordTokenApi(data) {
  return request.post('/users/password/verify', data);
}

export async function getInfoApi() {
  return request({
    baseURL,
    url: '/auth/me',
    method: 'GET',
  });
}

export async function editUserApi(data) {
  return request.put('/users/me', data);
}

export async function signInWithPhoneNumberApi(payload) {
  return request.post('/auth/loginPhoneNumber', payload, null, 'v1');
}

export async function firebaseSignInWithPhoneNumberApi() {
  return {};
}

export async function firebaseConfirmCodeApi() {
  return null;
}

export async function createInstallationApi(params) {
  return request.post('/installations', params);
}

export async function updateInstallationApi(id, params) {
  return request.put(`/installations/${id}`, params);
}

export async function deleteInstallationApi(id) {
  return request.delete(`/installations/${id}`);
}

export async function getDailyArtApi() {
  return request.get('/artworkDaily');
}
