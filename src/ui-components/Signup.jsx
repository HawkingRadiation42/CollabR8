/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, TextField } from "@aws-amplify/ui-react";
export default function Signup(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      width="895px"
      height="940px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Signup")}
    >
      <Flex
        gap="0"
        width="895px"
        height="940px"
        alignItems="flex-start"
        grow="1"
        basis="895px"
        position="relative"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 411")}
      >
        <Flex
          gap="32px"
          direction="column"
          width="895px"
          height="908px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 313")}
        >
          <Flex
            gap="24px"
            direction="column"
            height="904px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 32px 562px 32px"
            {...getOverrideProps(overrides, "Frame 406")}
          >
            <Text
              fontFamily="Inter"
              fontSize="48px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="72px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="SignUp"
              {...getOverrideProps(overrides, "SignUp")}
            ></Text>
            <TextField
              display="flex"
              direction="column"
              width="426px"
              justifyContent="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Name"
              placeholder=""
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField29767009")}
            ></TextField>
            <TextField
              display="flex"
              direction="column"
              width="426px"
              justifyContent="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Email ID"
              placeholder=""
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField29767010")}
            ></TextField>
            <TextField
              display="flex"
              gap="8px"
              direction="column"
              width="426px"
              justifyContent="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Password"
              placeholder=""
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField34582725")}
            ></TextField>
            <TextField
              display="flex"
              gap="8px"
              direction="column"
              width="426px"
              justifyContent="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Confirm Password"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField34582718")}
            ></TextField>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
