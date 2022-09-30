/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { UserPosts } from "../models";
import { schema } from "../models/schema";
import { Button, Divider, Flex, Text, TextField } from "@aws-amplify/ui-react";
export default function Addnewpost(props) {
  const { AddNewPost, overrides, ...rest } = props;
  const [
    textFieldTwoNineSevenSixSixNineTwoTwoValue,
    setTextFieldTwoNineSevenSixSixNineTwoTwoValue,
  ] = useStateMutationAction("");
  const [
    textFieldTwoNineSevenSixSixNineTwoThreeValue,
    setTextFieldTwoNineSevenSixSixNineTwoThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldTwoNineSevenSixSixNineTwoFourValue,
    setTextFieldTwoNineSevenSixSixNineTwoFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourFiveSevenTwoSevenZeroThreeValue,
    setTextFieldThreeFourFiveSevenTwoSevenZeroThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeFourFiveSevenTwoSixNineZeroValue,
    setTextFieldThreeFourFiveSevenTwoSixNineZeroValue,
  ] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      Title: textFieldTwoNineSevenSixSixNineTwoTwoValue,
      Description: textFieldTwoNineSevenSixSixNineTwoThreeValue,
      link: textFieldTwoNineSevenSixSixNineTwoFourValue,
      tags: textFieldThreeFourFiveSevenTwoSevenZeroThreeValue,
      UserRequirements: textFieldThreeFourFiveSevenTwoSixNineZeroValue,
    },
    model: UserPosts,
    schema: schema,
  });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(251,234,235,1)"
      {...rest}
      {...getOverrideProps(overrides, "Addnewpost")}
    >
      <Flex
        gap="24px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <Text
            fontFamily="Inter"
            fontSize="40px"
            fontWeight="400"
            color="rgba(47,60,126,1)"
            lineHeight="60px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Add New Post"
            {...getOverrideProps(overrides, "Add New Post")}
          ></Text>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider29766917")}
        ></Divider>
        <Flex
          gap="16px"
          direction="column"
          width="592px"
          height="531px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Title"
            placeholder={AddNewPost?.Title}
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoTwoValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoTwoValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField29766922")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            height="81px"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Project Description"
            placeholder={AddNewPost?.Description}
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoThreeValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766923")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Project link (eg. GitHub)"
            placeholder={AddNewPost?.link}
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoFourValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766924")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            width="592px"
            height="92px"
            justifyContent="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Looking for Collaborators in these skills"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            placeholder={AddNewPost?.UserRequirements}
            value={textFieldThreeFourFiveSevenTwoSixNineZeroValue}
            onChange={(event) => {
              setTextFieldThreeFourFiveSevenTwoSixNineZeroValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField34572690")}
          ></TextField>
          <Flex
            gap="10px"
            direction="column"
            width="592px"
            shrink="0"
            position="relative"
            padding="10px 10px 10px 1px"
            {...getOverrideProps(overrides, "Frame 418")}
          >
            <TextField
              display="flex"
              gap="8px"
              direction="column"
              width="591px"
              justifyContent="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Tags"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              placeholder={AddNewPost?.tags}
              value={textFieldThreeFourFiveSevenTwoSevenZeroThreeValue}
              onChange={(event) => {
                setTextFieldThreeFourFiveSevenTwoSevenZeroThreeValue(
                  event.target.value
                );
              }}
              {...getOverrideProps(overrides, "TextField34572703")}
            ></TextField>
          </Flex>
        </Flex>
        <Button
          display="flex"
          gap="0"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Post"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider29766925")}
        ></Divider>
      </Flex>
    </Flex>
  );
}
