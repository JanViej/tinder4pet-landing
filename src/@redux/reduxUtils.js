import { notification } from 'antd';

export async function apiWrapper(
  options = {
    isShowLoading: true,
    isShowSuccess: false,
  },
  apiFunction,
  ...payload
) {
  try {
    const response = await apiFunction(...payload);
    
    if (options.isShowSuccess) {
      process.browser &&
        notification?.success({
          message: 'Success',
          description:
            response.message || options.successDescription || 'success',
        });
    }
    return response;
  } catch (error) {
    process.browser && notification.destroy();
    
    process.browser &&
      notification.error({
        message: 'Oops!',
        description: error.message || error || 'some thing wrong!',
      });
    
    
    // eslint-disable-next-line
    if (error?.code == 401) {
      // window.location = '/login';
    } else {
      // showInAppNoti({
      //   title: error.code === 500 ? options.errorMessage : null,
      //   content: error.message,
      //   type: 'error',
      // });
    }

    throw error;
  }
}
