export type UrlPath<T> = string & { _?: T }; // Basically a string.  The second clause is to peg the generic type
