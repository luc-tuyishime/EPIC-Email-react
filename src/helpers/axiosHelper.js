import 'dotenv/config';
import axios from 'axios';
import * as urlHelper from './urlHelper';

const { appUrl, defaultUrl } = urlHelper.backend;

export default (data = {}) => {
  const { token, URL } = data;
  const baseURL =
    URL ||
    (appUrl && `${appUrl}/api/v1`) ||
    (defaultUrl && `${defaultUrl}/api/v1`);
  const headers = { 'access-token': token || localStorage.token || undefined };

  return (
    (process.env.NODE === 'test' && axios) || axios.create({ baseURL, headers })
  );
};
