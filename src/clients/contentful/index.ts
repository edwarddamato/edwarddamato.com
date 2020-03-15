import { createClient, ContentfulClientApi } from 'contentful';

const SPACE_ID = 'c4ixle5ei1je';
const ACCESS_TOKEN = '0bbf0abfda2875b19326daa5786ecebf993e8f37bdbbe4782ae01dfb201c57ef';

const contentfulClient = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

interface ContactLink {
  text: string;
  href: string;
  type: 'online' & 'print';
  target: '_blank' | '_self';
  order: number;
}

const getContactLinks = async (client: ContentfulClientApi = contentfulClient): Promise<ContactLink[]> =>
  (
    await client.getEntries<ContactLink>({
      content_type: 'contactLink',
      order: 'fields.order'
    })
  ).items.map(i => i.fields);

export { getContactLinks };
