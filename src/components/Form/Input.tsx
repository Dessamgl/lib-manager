import { forwardRef, ForwardRefRenderFunction } from "react";
import {Input as ChakraInput, FormLabel, FormControl, InputProps as ChakraInputProps, FormErrorMessage} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  size?: "sm" | "md" | "lg" | "xs";
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> 
  = ({ name, label, size = "lg", error = null,...rest }, ref ) => {
  return (
    <FormControl isInvalid={!!error}>
      { !!label && <FormLabel color="gray.200" htmlFor={name}>{label}</FormLabel> }

      <ChakraInput 
        name={name} 
        id={name}
        marginBottom="6"
        focusBorderColor="red.900"
        bgColor="gray.800"
        variant="filled"
        _hover={{
          bgColor: 'gray.700'
        }}
        size={size}
        ref={ref}
        {...rest}
      />

      { !!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}
  </FormControl>
  )
}

export const Input = forwardRef(InputBase);