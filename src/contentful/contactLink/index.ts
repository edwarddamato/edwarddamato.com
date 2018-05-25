import { ContentfulClientApi, EntryCollection } from 'contentful';

interface ContactLink {
  text: string;
  href: string;
  type: 'online' & 'print';
  target: '_blank' | '_self';
  order: number;
}

const getContactLinksFromClient = (
  client: ContentfulClientApi
): (() => Promise<EntryCollection<{}>>) => async (): Promise<EntryCollection<{}>> =>
  await client.getEntries<{}>({
    content_type: 'contactLink',
    order: 'fields.order'
  });

export { getContactLinksFromClient };
