import { Container, Text, VStack, Heading, Box, Image, Link, useColorMode, Button } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Index = () => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const post = { id: 1 }; // Example post object

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-image.jpg" alt="Blog Image" borderRadius="md" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Hi there! I'm excited to share my thoughts, experiences, and stories with you. Stay tuned for more updates!
        </Text>
        <Link as={RouterLink} to="/new-post" color="teal.500" fontSize="lg">Create a new post</Link>
        <Button colorScheme="red" onClick={() => navigate(`/delete-post/${post.id}`)}>Delete</Button>
      </VStack>
    </Container>
  );
};

export default Index;