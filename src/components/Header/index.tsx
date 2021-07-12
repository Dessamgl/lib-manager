import { Box, Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";
import Logo from "./Logo";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export default function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <header>
      <Box p={4} bg="#202024" display="flex" justifyContent="space-between">
        { isWideVersion && <Logo showLogoText={isWideVersion}/>}

        <SearchBox />

        <Profile showProfileData={isWideVersion}/>
      </Box>
    </header>
  )
}