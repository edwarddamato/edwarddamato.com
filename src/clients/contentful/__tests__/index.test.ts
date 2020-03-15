import mockContactLinks from './expected/contactLinks';
import { getContactLinks } from '..';

const mockContentfulClient = {
  getEntries: () => Promise.resolve(mockContactLinks)
} as any;

describe('contactLink', () => {
  describe('getContactLinks()', () => {
    it('should return all contact links', async () => {
      const contactLinks = await getContactLinks(mockContentfulClient);
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
