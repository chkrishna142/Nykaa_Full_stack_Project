import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
  Text,
  Link,
  useDisclosure,
  useColorMode,
  Icon,
  IconButton,
  textDecoration,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import {
  HamburgerIcon,
  SunIcon,
  MoonIcon,
  SmallCloseIcon,
} from "@chakra-ui/icons";
import { GiTechnoHeart } from "react-icons/gi";
import { IconsManifest } from "react-icons";

const links = [
  { linkName: "Products", path: "/products" },
  { linkName: "ShoppingCart", path: "/cart" },
];

const NavLink = ({ path, children }) => (
  <Link
    as={ReactLink}
    to={path}
    px={2}
    py={2}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.400", "gray.600"),
    }}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue("gray.200", "gray.900")}>
      <Flex
        h={16}
        px={2}
        alignItems="center"
        justifyContent="space-between"
        textDecoration="none"
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.900"),
        }}
      >
        <IconButton
          size="md"
          icon={isOpen ? <SmallCloseIcon /> : <HamburgerIcon />}
          onClick={isOpen ? onClose : onOpen}
          display={{ md: "none" }}
        />
        <HStack>
          <Link as={ReactLink} to={"/"} display={"flex"} gap={2}>
            <Icon as={GiTechnoHeart} h={6} w={6} color={"orange.400"} />
            <Text fontWeight={"extrabold"}>Nykaa</Text>
          </Link>
          <HStack display={{ base: "none", md: "inline-flex" }}>
            {links.map((links) => (
              <NavLink key={links.linkName} path={links.path}>
                {links.linkName}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <NavLink>
            <Icon
              as={colorMode === "light" ? MoonIcon : SunIcon}
              alignSelf={"center"}
              onClick={() => toggleColorMode()}
            />
          </NavLink>
          <Button
            as={ReactLink}
            variant={"link"}
            fontWeight={400}
            fontSize={"sm"}
            p={2}
            to={"/login"}
          >
            Sign In
          </Button>
          <Button
            as={ReactLink}
            fontWeight={600}
            fontSize={"sm"}
            m={2}
            display={{ base: "none", md: "inline-flex" }}
            to={"/registration"}
            _hover={{ bg: "oraange.500" }}
            bg={"orange.500"}
            textColor={"white"}
          >
            Sign Up
          </Button>
        </Flex>
      </Flex>
      {isOpen ? (
        <Box p={2} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {links.map((links) => (
              <NavLink key={links.linkName} path={links.path}>
                {links.linkName}
              </NavLink>
            ))}
            <NavLink key={"signUp"} path={"/registration"}>
              signUp
            </NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
export default Navbar;
