import { paths } from '../routes/paths';
import { BASE_URL } from './config.js';
import { Cookie } from '../../utils/helpers/index';
//import {ApiService} from "./api-service";



/*const refreshJwtInterval = 5 * 60 * 1000; // 10 minutes*/

export const requestInterceptor = (config) => {
    const requestConfig = { ...config };

  /*  const now = Date.now();
    const jwtRefreshedAt = LSService.getItem('jwtRefreshedAt');
    const timeToNextRefresh = refreshJwtInterval - (now - Number(jwtRefreshedAt));

    timeToNextRefresh > 0 ? setTimeout(refreshJwt, timeToNextRefresh) : refreshJwt();

    LSService.setItem('jwtRefreshedAt', String(Date.now()));
    setTimeout(refreshJwt, refreshJwtInterval);
*/
    if (requestConfig.url !== `${BASE_URL}/auth/signin` && requestConfig.url !== `${BASE_URL}/account`) {
        const token = Cookie.get('jwt');

        requestConfig.headers.Authorization = `Bearer ${token}`;
        requestConfig.headers['Content-Type'] = 'application/json';
    }

    if (requestConfig.data) {
        requestConfig.headers['Content-Type'] = 'application/json';
    }

    return requestConfig;
};

/*async function refreshJwt(){
/!*    return fetch(`${appConfig.baseUrl}/internal/jwt`, {
        headers: getAuthorizationHeaders()
    })
        .then(encodedResponse => encodedResponse.json())
        .then(response => {
            store.dispatch(commonActions.getUpdateJwtTokenSuccess(response.jwt));

        })
        .catch(() => {
            store.dispatch(commonActions.getUpdateJwtTokenError({
                message: 'Your access token expired. Please refresh web-page'
            }));
        });*!/
    try{
        const token = Cookie.get('refreshJwt');
        console.log('refresh token',JSON.stringify({refreshToken: token}));
        const res = await ApiService.create('/auth/refresh', JSON.stringify({refreshToken: token}));
        console.log('refresh res', res);
        //return res;
    }catch(error){
        console.log('refresh error', error);
    }
}*/

export const responseInterceptor = (response) => {
    console.log('res interseptor', response.data);
    const token = response.data.accessToken;
    const refreshToken = response.data.refreshToken;
    if (token) {
        Cookie.set('jwt', token, 1);
        Cookie.set('refreshJwt', refreshToken, 1);
    }
    return response;
};

export const responseErrorInterceptor = (error) => {
    const requestUrl = error.response.config.url.split('/api')[1];

    console.log('response Interseptor error', error)

    if (error.response.status === 401 && requestUrl !== '/auth/signin') {
       Cookie.del('jwt');
        Cookie.del('refreshJwt');
        Cookie.del('user');
        //const response = refreshJwt();
        //console.log('refresh response', response);
        window.location.href = paths.AUTH;

    }

    if (typeof error.response.data === 'string') {
        return Promise.reject(error.response.data);
    }

    if (error.response.data.error) {
        return Promise.reject(error.response.data.error.message);
    }

    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject('An error occurred');
};
