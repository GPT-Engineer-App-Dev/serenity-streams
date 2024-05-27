import { useParams, useNavigate } from "react-router-dom";
import { Container, Heading, Text, Button, VStack } from "@chakra-ui/react";

const DeletePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    // Logic to delete the post goes here
    console.log(`Post with id ${id} deleted`);
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">Delete Blog Post</Heading>
        <Text fontSize="lg">Are you sure you want to delete this post?</Text>
        <Button colorScheme="red" onClick={handleDelete}>Delete</Button>
        <Button onClick={() => navigate("/")}>Cancel</Button>
      </VStack>
    </Container>
  );
};

export default DeletePost;