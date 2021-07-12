import { Flex, Image, Text } from "@chakra-ui/react";

type LogoProps = {
  showLogoText: boolean;
}

export function Logo({ showLogoText }: LogoProps) {
  return (
    <Flex align="center">
      <Image src="/logo.png" alt="logo"  />
      { showLogoText && <Text fontSize={18} fontWeight="bold" ml={6}>LibManager</Text> }
    </Flex>
  )
}