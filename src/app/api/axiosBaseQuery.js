import { axiosClient } from './axiosClient';

export const axiosBaseQuery =
  () =>
  async ({ url, method = 'GET', data, params, headers, responseType }) => {
    try {
      const result = await axiosClient({ url, method, data, params, headers, responseType });
      return { data: result.data };
    } catch (error) {
      return {
        error: {
          status: error.response?.status ?? 0,
          message: error.response?.data?.message ?? error.message ?? 'Something went wrong',
          details: error.response?.data?.details ?? null,
        },
      };
    }
  };
