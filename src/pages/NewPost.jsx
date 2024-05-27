import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, Image, Box, useColorMode } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const { colorMode } = useColorMode();

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save the new post goes here
    console.log({ title, content, image });
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Create a New Blog Post</Heading>
        <Input 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          isRequired 
        />
        <Textarea 
          placeholder="Content" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          isRequired 
        />
        <Input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
        />
        {image && (
          <Box boxSize="sm">
            <Image src={image} alt="Selected Image" borderRadius="md" />
          </Box>
        )}
        <Button type="submit" colorScheme="teal" size="md">Submit</Button>
      </VStack>
    </Container>
  );
};

export default NewPost;