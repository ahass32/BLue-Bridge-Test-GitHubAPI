import { List, ListItem, Image, Text, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useGithubRepos } from "./useGithubRepos";

export const ReposList = () => {
  const data = useGithubRepos();

  const repos = data?.data?.search?.edges;

  console.log(repos);

  return (
    <List mt="12" mb="4" p="12">
      {repos &&
        repos.map(
          (
            {
              node: {
                name,
                description,
                owner: { avatarUrl },
                url,
                stargazerCount,
              },
            },
            key
          ) => (
            <ListItem
              key={`list-item-${key}`}
              display="flex"
              flexDir="row"
              alignItems="center"
              my="4"
            >
              <Image src={avatarUrl} w={68} h={68} borderRadius="full" />
              <Flex flexDir="column" ml="4" align="flex-start">
                <Text fontSize="lg" fontWeight="600">
                  {name}
                </Text>
                <Text>{description}</Text>
                <Text as="a" href={url}>
                  {url}
                </Text>
                <Flex flexDir="row" align="center">
                  <Text>{`Stars: ${stargazerCount}`}</Text>
                  <StarIcon ml="2" />
                </Flex>
              </Flex>
            </ListItem>
          )
        )}
    </List>
  );
};
