import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "ofcxhojc",
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: "sk3KxDRvLjSUYcUT2lZwg0nKu2vKUv9bsh0At7KLCltWSv8v4AN9zyFop6G1Mn7o6sMwwGLfIEHtnsxaxglKfKG09PNQcGWelurqmexSo3gpeX3CVxxe2Be12wjc6v0wzqlxvEwpSA2BPAKcTgptsgygKHw9RbaE0WgW7uhHbESa1bo1eEcp",
});
console.log(client)

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
