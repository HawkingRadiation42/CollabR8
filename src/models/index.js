// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserPosts } = initSchema(schema);

export {
  UserPosts
};