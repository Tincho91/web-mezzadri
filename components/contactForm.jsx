import { useState } from "react";

import {
  Box,
  Flex,
  FormControl,
  Input,
  Select,
  Button,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { AiOutlineSend } from "react-icons/ai";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    correoElectronico: "",
    telefono: "",
    tipoInmueble: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const buttonWidth = useBreakpointValue({
    base: "100%",
    md: "auto",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    if (!formData.nombreCompleto)
      errors.nombreCompleto = "Nombre completo es necesario.";
    if (!formData.correoElectronico)
      errors.correoElectronico = "Correo electrónico es necesario.";
    if (!formData.telefono) errors.telefono = "Teléfono es necesario.";
    // Perform more advanced validation here if needed

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Submit form
      console.log("Form data:", formData);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box bg="white" p="5">
      <FormControl isInvalid={formErrors.nombreCompleto} mb="4">
        <Input
          placeholder="Nombre completo"
          name="nombreCompleto"
          value={formData.nombreCompleto}
          onChange={handleChange}
        />
        {formErrors.nombreCompleto && (
          <Text color="red.500">{formErrors.nombreCompleto}</Text>
        )}
      </FormControl>

      <FormControl isInvalid={formErrors.correoElectronico} mb="4">
        <Input
          placeholder="Correo electrónico"
          name="correoElectronico"
          value={formData.correoElectronico}
          onChange={handleChange}
        />
        {formErrors.correoElectronico && (
          <Text color="red.500">{formErrors.correoElectronico}</Text>
        )}
      </FormControl>

      <FormControl isInvalid={formErrors.telefono} mb="4">
        <Input
          placeholder="Teléfono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
        />
        {formErrors.telefono && (
          <Text color="red.500">{formErrors.telefono}</Text>
        )}
      </FormControl>

      <FormControl mb="4">
        <Select
          placeholder="¿Qué tipo de inmueble querés vender?"
          name="tipoInmueble"
          value={formData.tipoInmueble}
          onChange={handleChange}
        >
          <option value="Departamento">Departamento</option>
          <option value="Casa">Casa</option>
          <option value="PH">PH</option>
          <option value="Duplex">Duplex</option>
          <option value="Lote">Lote</option>
          <option value="Otro">Otro</option>
        </Select>
      </FormControl>

      <Button
        colorScheme="blue"
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight={300}
        letterSpacing="4.8px"
        bg="#090D1D"
        borderRadius={0}
        py={7}
        onClick={handleSubmit}
        width={buttonWidth}
        alignSelf={buttonWidth === "auto" ? "flex-end" : "stretch"}
      >
        <Flex
          gap={2}
          justify="center"
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight={300}
          letterSpacing="4.8px"
        >
          <AiOutlineSend />
          <Text>ENVIAR</Text>
        </Flex>
      </Button>
    </Box>
  );
};

export default ContactForm;
