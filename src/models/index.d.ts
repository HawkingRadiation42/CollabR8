import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type UserPostsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UserPosts {
  readonly id: string;
  readonly Title?: string | null;
  readonly Description?: string | null;
  readonly link?: string | null;
  readonly tags?: string | null;
  readonly UserRequirements?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserPosts, UserPostsMetaData>);
  static copyOf(source: UserPosts, mutator: (draft: MutableModel<UserPosts, UserPostsMetaData>) => MutableModel<UserPosts, UserPostsMetaData> | void): UserPosts;
}