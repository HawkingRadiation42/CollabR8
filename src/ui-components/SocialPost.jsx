/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function SocialPost(props) {
  const { userPosts, overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="755px"
      height="543px"
      position="relative"
      border="1px SOLID rgba(4,125,149,1)"
      boxShadow="20px 20px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="30px"
      padding="23px 23px 23px 23px"
      backgroundColor="rgba(251,234,235,1)"
      {...rest}
      {...getOverrideProps(overrides, "SocialPost")}
    >
      <Flex
        gap="40px"
        height="256px"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 37px 0px"
        {...getOverrideProps(overrides, "Body")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="664px"
          shrink="0"
          height="272px"
          position="relative"
          padding="0px 82px 0px 0px"
          {...getOverrideProps(overrides, "Text")}
        >
          <Flex
            gap="16px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Headline")}
          >
            <Text
              fontFamily="Inter"
              fontSize="32px"
              fontWeight="400"
              color="rgba(47,60,126,1)"
              lineHeight="48px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="199px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={userPosts?.Title}
              {...getOverrideProps(overrides, "Post Title")}
            ></Text>
            <Flex
              gap="16px"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(47,60,126,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0.01px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Project Maintainer"
                {...getOverrideProps(overrides, "Project Maintainer")}
              ></Text>
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(47,60,126,1)"
                lineHeight="24px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                letterSpacing="0.01px"
                width="1396px"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children={userPosts?.createdAt}
                {...getOverrideProps(overrides, "29-9-2022")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="16px"
            width="fit-content"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Article")}
          >
            <View
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              border="1px SOLID rgba(255,153,0,1)"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "MyIcon29766860")}
            ></View>
            <Text
              fontFamily="Quantico"
              fontSize="16px"
              fontWeight="400"
              color="rgba(47,60,126,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="672px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={userPosts?.Description}
              {...getOverrideProps(
                overrides,
                "AWS Amplify Studio is a visual development environment for building full-stack web and mobile apps that grows with your business. Studio builds on existing backend building capabilities in AWS Amplify, allowing you to build your UI faster with a set of ready-to-use UI components that are editable in Figma. With Studio, you can quickly build an entire web app, front-to-back, with minimal coding, while still maintaining full control over your app design and behavior through code. Ship faster, scale effortlessly, and delight every user."
              )}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="16px"
        height="34px"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="10px 0px 10px 0px"
        {...getOverrideProps(overrides, "Read more")}
      >
        <View
          width="24px"
          height="24px"
          shrink="0"
          overflow="hidden"
          position="relative"
          border="1px SOLID rgba(0,0,0,1)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,153,0,1)"
          {...getOverrideProps(overrides, "MyIcon29766869")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(47,60,126,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          textDecoration="underline"
          letterSpacing="0.01px"
          width="667px"
          grow="1"
          basis="667px"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Github Link:  "}${userPosts?.link}`}
          {...getOverrideProps(overrides, "Github Link")}
        ></Text>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(47,60,126,1)"
        textTransform="capitalize"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        textDecoration="underline"
        width="224px"
        height="55px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Tags:  "}${userPosts?.tags}`}
        {...getOverrideProps(overrides, "Tags:")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(47,60,126,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        textDecoration="underline"
        letterSpacing="0.01px"
        width="546px"
        height="97px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Collaborator specification:  "}${
          userPosts?.UserRequirements
        }`}
        {...getOverrideProps(overrides, "Collaborator Specifications:")}
      ></Text>
    </Flex>
  );
}
