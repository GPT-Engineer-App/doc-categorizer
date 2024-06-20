import { useState } from "react";
import { Container, VStack, Text, Input, Button, Box, FormControl, FormLabel, Select, useToast } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");
  const [suggestedFilename, setSuggestedFilename] = useState("");
  const [tags, setTags] = useState("");
  const [storageLocation, setStorageLocation] = useState("");
  const toast = useToast();

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
    // Placeholder for filename suggestion logic
    setSuggestedFilename(event.target.files[0].name);
    // Placeholder for tag suggestion logic
    setTags("example, tags");
    // Placeholder for storage location recommendation logic
    setStorageLocation("Recommended/Path");
  };

  const handleSubmit = () => {
    if (!file || !category || !suggestedFilename || !tags || !storageLocation) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    // Placeholder for Google Sheets update logic
    toast({
      title: "Success",
      description: "Document metadata updated successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Document Management Tool</Text>
        <FormControl id="file-upload">
          <FormLabel>Upload Document</FormLabel>
          <Input type="file" onChange={handleFileUpload} />
        </FormControl>
        <FormControl id="category">
          <FormLabel>Category</FormLabel>
          <Select placeholder="Select category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="finance">Finance</option>
            <option value="legal">Legal</option>
            <option value="hr">HR</option>
            <option value="it">IT</option>
          </Select>
        </FormControl>
        <FormControl id="suggested-filename">
          <FormLabel>Suggested Filename</FormLabel>
          <Input type="text" value={suggestedFilename} onChange={(e) => setSuggestedFilename(e.target.value)} />
        </FormControl>
        <FormControl id="tags">
          <FormLabel>Tags</FormLabel>
          <Input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
        </FormControl>
        <FormControl id="storage-location">
          <FormLabel>Recommended Storage Location</FormLabel>
          <Input type="text" value={storageLocation} onChange={(e) => setStorageLocation(e.target.value)} />
        </FormControl>
        <Button leftIcon={<FaUpload />} colorScheme="blue" onClick={handleSubmit}>
          Submit
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;