import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { getRefreshToken, getToken, setRefreshToken, setToken } from './storage'

// config axios
const axiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,

  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
})

axiosClient.interceptors.request.use((config: AxiosRequestConfig): any => {
  return {
    ...config,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  }
})

axiosClient.interceptors.response.use(
  (response) => {
    if (response.data.code === 401) {
      setToken('')
      window.location.replace('/auth/sign-in')
    }

    if (response.data.code) {
      if (![200, 201, 204].includes(response.data.code)) {
        throw response.data
      }
    }

    // if (response.config.method === "post") {
    //   const excludeUrl = [
    //     "auth/login",
    //     "external/image/upload",
    //     "order",
    //     "discount/order",
    //     "discount/product",
    //     "discount/config",
    //     "trip/geofencing?page=1&limit=999",
    //     "trip/map-routing",
    //     "sale-return",
    //   ];

    //   if (!excludeUrl.includes(response.config?.url as string)) {
    //     message.success("Thêm mới thành công!");
    //   }
    // } else if (response.config.method === "put" || response.config.method === "patch") {
    //   message.success("Cập nhật thành công!");
    // } else if (response.config.method === "delete") {
    //   message.success("Xóa thành công!");
    // }

    if (response && response.data) {
      return response
    }
    return response
  },
  async (error: any) => {
    if (error.response && error.response.status === 401) {
      const refreshTk = getRefreshToken()

      if (refreshTk) {
        const refreshTokenBody = { refreshTk }
        const res = await axios.post('/auth/refresh-token', refreshTokenBody)
        if (res.status === 200) {
          setRefreshToken(res.data)
        } else {
          // logout
        }
      } else {
        // logout
      }
    }
    throw error
  },
)

export default axiosClient
