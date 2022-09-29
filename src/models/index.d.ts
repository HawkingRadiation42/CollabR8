import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type UserPostsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UserPosts {
  readonly id: string;
  readonly Title: string;
  readonly Description: string;
  readonly Link: string;
  readonly OwnerName?: string | null;
  readonly Tags?: (string | null)[] | null;
  readonly DateCreated?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserPosts, UserPostsMetaData>);
  static copyOf(source: UserPosts, mutator: (draft: MutableModel<UserPosts, UserPostsMetaData>) => MutableModel<UserPosts, UserPostsMetaData> | void): UserPosts;
}