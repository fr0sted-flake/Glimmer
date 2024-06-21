import { Box, Flex, Image, Skeleton, Text } from "@chakra-ui/react";
import { useState } from "react";

const Message = ({ ownMessage, message }) => {
  return (
    <>
      {ownMessage ? (
        <Flex gap={2} alignSelf={"flex-end"}>
          {message.text && (
            <Flex bg={"green.800"} maxW={"350px"} p={1} borderRadius={"md"}>
              <Text color={"white"}>{message.text}</Text>
              <Box
                alignSelf={"flex-end"}
                ml={1}
                color={message.seen ? "blue.400" : ""}
                fontWeight={"bold"}
              ></Box>
            </Flex>
          )}
        </Flex>
      ) : (
        <Flex gap={2}>
          {message.text && (
            <Text maxW={"350px"} bg={"gray.400"} p={1} borderRadius={"md"} color={"black"}>
              {message.text}
            </Text>
          )}
        </Flex>
      )}
    </>
  );
};

export default Message;
