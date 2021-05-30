// export default ({ $axios, app, redirect, error: nuxtError }) => {
//   $axios.onRequest(config => {
//     // config.headers.common["locale"] = app.i18n.locale;
//   });
//   $axios.onError(error => {
//     const code = parseInt(error.response && error.response.status);
//     if (code === 422) return;
//     nuxtError({
//       statusCode: error.response.status,
//       message: error.message
//     });
//     return Promise.resolve(false);
//   });
// };
