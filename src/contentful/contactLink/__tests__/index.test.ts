import { getContactLinksFromClient } from '../';
// import mockContactLinks from '../../../../test/responses/mockContactLinks';
import { createClient } from 'contentful';

// const mockContentfulClient = (): any => ({
//   getEntry: () => {},
//   getEntries: () => Promise.resolve(mockContactLinks),
//   getAsset: () => {},
//   getAssets: () => [],
//   getContentType: () => {},
//   getContentTypes: () => [],
//   getSpace: () => {},
//   sync: () => {}
// });

const SPACE_ID = 'c4ixle5ei1je';
const ACCESS_TOKEN = '0bbf0abfda2875b19326daa5786ecebf993e8f37bdbbe4782ae01dfb201c57ef';

const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

describe('contactLink', () => {
  describe('getContactLinks()', () => {
    it('should return all contact links', async () => {
      const contactLinks = await getContactLinksFromClient(client)();
      // console.log('=======', contactLinks);
      expect(contactLinks).toEqual([
        {
          text: 'http://lnkd.in/rHMR2B',
          href: 'http://lnkd.in/rHMR2B',
          type: ['print'],
          target: '_blank',
          order: 5
        },
        {
          text: 'info@edwarddamato.com',
          href: 'mailto:info@edwarddamato.com',
          type: ['online', 'print'],
          order: 0
        }
      ]);
    });
  });
});
