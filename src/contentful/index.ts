import { createClient } from 'contentful';
import { getContactLinksFromClient } from './contactLink';

const SPACE_ID = 'c4ixle5ei1je';
const ACCESS_TOKEN = '0bbf0abfda2875b19326daa5786ecebf993e8f37bdbbe4782ae01dfb201c57ef';

const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

const getContactLinks = getContactLinksFromClient(client);

export { getContactLinks };
