import { useQuery } from "react-query";
import { request, gql } from "graphql-request";

const endpoint = "https://api.github.com/graphql";

export const useGithubRepos = () => {
  return useQuery("repos", async () => {
    const data = await request(
      endpoint,
      gql`
        {
          search(query: "is:public", type: REPOSITORY, first: 15) {
            repositoryCount
            pageInfo {
              endCursor
              startCursor
            }
            edges {
              node {
                ... on Repository {
                  name
                  createdAt
                  description
                  url
                  stargazerCount
                  owner {
                    avatarUrl
                  }
                }
              }
            }
          }
        }
      `,
      {},
      { authorization: "Bearer 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" }
    );
    return data;
  });
};
